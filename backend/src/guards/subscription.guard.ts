import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/model/UserSchema';
@Injectable()
export class SubscriptionGuard implements CanActivate {
  private readonly PlansLimits = {
    free: 10,
    starter: 40,
    premium: 'unlimited',
  };
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(request.user);
    const userId = request.user.id;
    if (!userId) throw new UnauthorizedException('No user id provided');

    const user = await this.userModel.findById(userId);
    if (!user) throw new UnauthorizedException('User not found');
    const userPlan = user.plan;
    const userUsage = user.credits;
    if (!userPlan)
      throw new UnauthorizedException('Please subscribe to a plan');
    if (userPlan === 'free' && userUsage >= this.PlansLimits.free) {
      await this.userModel.findByIdAndUpdate(userId, { plan: 'none' });
      throw new UnauthorizedException('Free plan limit reached');
    }

    if (userPlan === 'starter' && userUsage >= this.PlansLimits.starter) {
      await this.userModel.findByIdAndUpdate(userId, { plan: 'none' });
      throw new UnauthorizedException('Starter plan limit reached');
    }

    return true;
  }
}
