"use client";

import { BarChart3, Sparkles, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Target,
    title: "Smart Input",
    description: "Simply enter your content niche and channel description to get started.",
    color: "bg-blue-500",
  },
  {
    icon: BarChart3,
    title: "Trend Analysis",
    description: "Our AI analyzes current Google Trends to find what your audience wants.",
    color: "bg-violet-500",
  },
  {
    icon: Sparkles,
    title: "Content Generation",
    description: "Get AI-powered content ideas perfectly matched to your niche and trends.",
    color: "bg-indigo-500 text-white",
  },
];

export default function Features() {
  return (
    <section id="how-it-works" className="py-24 relative bg-zinc-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Create Trending Content
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            From idea to trending content in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((Feature, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900 rounded-xl p-8 transition-all duration-200 hover:bg-zinc-800/50"
            >
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              
              <div className="relative">
                <div className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                  "bg-zinc-800 text-white",
                  "transition-transform duration-200 group-hover:scale-110"
                )}>
                  <Feature.icon className="w-6 h-6" />
                </div>

                <div className="absolute top-2 right-0 text-sm font-medium text-zinc-500">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {Feature.title}
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {Feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}