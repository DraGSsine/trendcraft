import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Pricing = () => {
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
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Pro",
      price: "9",
      description: "Unlimited content ideas generation",
      gradient: "bg-indigo-500",
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r bg-indigo-500">
              Pricing
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Choose your plan and start generating trending content ideas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r bg-indigo-500 rounded-full text-white text-sm">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-white">
                  ${plan.price}
                </span>
                <span className="text-white/60">/month</span>
              </div>

              <p className="text-white/70 mb-6 text-sm">{plan.description}</p>

              <ul className="space-y-3 mb-6">
                {sharedFeatures.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-white/80 text-sm"
                  >
                    <Check className="w-4 h-4 text-purple-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/auth/signup">
                <Button
                  className={`w-full text-center rounded-xl ${
                    plan.popular
                      ? "bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
