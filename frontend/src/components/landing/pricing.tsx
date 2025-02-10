"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sharedFeatures = [
  "AI-powered content generation",
  "Google Trends integration",
  "Real-time topic suggestions",
  "24/7 support",
];

const plans = [
  {
    name: "Basic",
    price: "5",
    description: "Generate up to 40 content ideas per month",
    color: "text-blue-500",
  },
  {
    name: "Pro",
    price: "9",
    description: "Unlimited content ideas generation",
    color: "text-indigo-500",
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative bg-zinc-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple Pricing
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Choose your plan and start generating trending content ideas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "group relative bg-zinc-900 rounded-xl p-8",
                "transition-all duration-200 hover:bg-zinc-800/50"
              )}
            >
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500 text-white">
                  Most Popular
                </div>
              )}

              <div className="relative">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {plan.name}
                  </h3>
                  <div className="h-px flex-1 bg-zinc-800" />
                </div>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-zinc-400">/month</span>
                </div>

                <p className="text-zinc-400 text-sm mb-8">
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {sharedFeatures.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-zinc-300 text-sm"
                    >
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/auth/signup" className="block">
                  <Button 
                    className={cn(
                      "w-full h-11 rounded-lg transition-colors",
                      plan.popular 
                        ? "bg-indigo-500 hover:bg-indigo-500 text-white"
                        : "bg-zinc-800 hover:bg-zinc-700 text-white"
                    )}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}