import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Request, Response } from 'express';
import { Model } from 'mongoose';
import { User } from 'src/model/UserSchema';
import { planType } from 'src/types/types';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
  private stripeClient: any;
  private plans = {
    free: this.configService.get<string>('FREE_PRICE_ID')!,
    starter: this.configService.get<string>('TC_STARTER_PRICE_ID')!,
    premium: this.configService.get<string>('TC_PREMIUM_PRICE_ID')!,
  };
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private configService: ConfigService,
  ) {
    const key = this.configService.get<string>('TC_STRIPE_SECRET_KEY');
    if (!key) {
      throw new Error('Missing Stripe secret key');
    }
    this.stripeClient = new Stripe(key, { apiVersion: '2025-01-27.acacia' });
  }

  async createCheckoutSession(plan: planType, userId: string) {
    const session = await this.stripeClient.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: this.plans[plan],
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${this.configService.get<string>('FRONTEND_URL')}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: this.configService.get<string>('FRONTEND_URL'),
      metadata: {
        userId,
        plan,
      },
    });

    return { url: session.url };
  } 

  async stripeWebhook(req: any, res: Response) {
    const sig = req.headers['stripe-signature'];
    const key = this.configService.get<string>('TC_STRIPE_WEBHOOK_SECRET');
    if (!key) {
      throw new Error('Missing Stripe webhook secret');
    }
    let event: Stripe.Event;
    try {
      event = this.stripeClient.webhooks.constructEvent(req.rawBody, sig, key);
    } catch (err) {
      console.log(err);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;
      const plan = session.metadata?.plan;
      if (!userId) {
        return res.status(400).send('User ID not found');
      }
      await this.userModel.findByIdAndUpdate(userId, { plan: plan, credits: 0 });
    }
  }
}

