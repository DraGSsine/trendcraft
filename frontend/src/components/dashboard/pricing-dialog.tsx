"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useUserInfo } from "@/lib/queries";
import { Check, Crown, Sparkles, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "19",
    description: "Perfect for individuals and small teams",
    icon: Zap,
    features: [
      "5 AI-generated posts per day",
      "Basic trend analytics",
      "3 social media accounts",
      "24-hour content scheduling",
      "Email support",
    ],
    iconClass: "text-blue-500",
    buttonVariant: "outline" as const,
  },
  {
    name: "Pro",
    price: "49",
    description: "For professionals who need more power",
    icon: Crown,
    features: [
      "Unlimited AI-generated posts",
      "Advanced trend analytics",
      "Unlimited social accounts",
      "30-day content scheduling",
      "Priority support",
      "Custom branding",
      "API access",
    ],
    iconClass: "text-amber-500",
    buttonVariant: "default" as const,
    popular: true,
  },
];

export function PricingDialog() {
  const { data } = useUserInfo();
  if (data?.plan !== "free") return null;
  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[900px] bg-zinc-900 border-zinc-800">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 text-2xl font-bold">
            <Sparkles className="w-6 h-6 text-indigo-400" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400">
              Choose Your Plan
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6 p-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-6 rounded-xl bg-zinc-800/50 border ${
                plan.popular ? "border-amber-500/20" : "border-zinc-700/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  Most Popular
                </div>
              )}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-lg bg-zinc-800 ${
                    plan.popular ? "bg-amber-500/10" : "bg-blue-500/10"
                  }`}
                >
                  <plan.icon className={`w-6 h-6 ${plan.iconClass}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-zinc-400">{plan.description}</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-zinc-400">/month</span>
                </div>
              </div>
              <div className="flex-1 space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="flex-shrink-0">
                      <Check className="w-5 h-5 text-emerald-500" />
                    </div>
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                variant={plan.buttonVariant}
                className={`w-full rounded-xl ${
                  plan.popular
                    ? "bg-amber-500 hover:bg-amber-600 text-zinc-900"
                    : "border-zinc-700 hover:border-zinc-600"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
