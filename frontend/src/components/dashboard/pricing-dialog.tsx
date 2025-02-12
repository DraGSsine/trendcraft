"use client";
/* eslint-disable */

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { api } from "@/lib/axios";
import { useUserInfo } from "@/lib/queries";
import { useMutation } from "@tanstack/react-query";
import { Check, Crown, Loader2, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "5",
    description: "Generate up to 40 content ideas per month",
    icon: Zap,
    features: [
      "AI-powered content generation",
      "Google Trends integration",
      "Real-time topic suggestions",
      "24/7 support",
    ],
    iconClass: "text-indigo-500",
    buttonVariant: "outline" as const,
  },
  {
    name: "Premium",
    price: "9",
    description: "Unlimited content ideas generation",
    icon: Crown,
    features: [
      "AI-powered content generation",
      "Google Trends integration",
      "Real-time topic suggestions",
      "24/7 support",
    ],
    iconClass: "text-indigo-500",
    buttonVariant: "default" as const,
    popular: true,
  },
];

export function PricingDialog() {
  const [planName, setPlanName] = useState<string>("starter");
  const { data } = useUserInfo();
  const { mutate, isPending } = useMutation({
    mutationFn: async (plan: string) => {
      const response = await api.post("/payments/create-checkout-session", {
        plan,
      });
      return response.data;
    },
    onSuccess: (data: any) => {
      window.location.href = data.url;
    },
    onError: (error) => {
      console.error(error);
      toast({
        variant: "destructive",
        description: "Failed to create checkout session. Please try again later.",
      });
    },
  });

  if (data?.plan !== "none") return null;

  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[900px] bg-zinc-950 border-zinc-800">
        <DialogHeader className="mb-8">
          <div className="text-center space-y-4">
            <DialogTitle className="text-3xl font-bold text-white">
              Choose Your Plan
            </DialogTitle>
            <p className="text-zinc-400 text-sm">
              Select the perfect plan to unlock all the features
            </p>
          </div>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col p-6 rounded-xl transition-colors duration-200",
                "bg-zinc-900",
                "border",
                plan.popular
                  ? "border-indigo-500"
                  : "border-zinc-800"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500 text-white">
                  Most Popular
                </div>
              )}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={cn(
                    "p-2 rounded-lg",
                    plan.popular ? "bg-indigo-500/10" : "bg-indigo-500/10"
                  )}
                >
                  <plan.icon className={cn("w-6 h-6", plan.iconClass)} />
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
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => {
                  setPlanName(plan.name);
                  mutate(plan.name.toLowerCase());
                }}
                variant={plan.buttonVariant}
                className={cn(
                  "w-full rounded-lg h-11",
                  plan.popular
                    ? "bg-indigo-500 text-white hover:bg-indigo-600"
                    : "border-zinc-800 hover:bg-zinc-800"
                )}
                disabled={isPending}
              >
                {isPending && plan.name === planName ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Upgrade Now"
                )}
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
