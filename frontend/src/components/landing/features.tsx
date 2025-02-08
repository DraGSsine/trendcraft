import { BarChart3, Sparkles, Target } from "lucide-react";
import React from "react";

const Features = () => {
  const features = [
    {
      icon: <Target className="w-7 h-7" />,
      title: "Smart Input",
      description:
        "Simply enter your content niche and channel description to get started.",
      color: "bg-purple-500",
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Trend Analysis",
      description:
        "Our AI analyzes current Google Trends to find what your audience wants.",
      color: "bg-pink-500",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Content Generation",
      description:
        "Get AI-powered content ideas perfectly matched to your niche and trends.",
      color: "bg-rose-500",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Create{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r bg-indigo-500  ">
              Trending Content
            </span>
          </h2>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            From idea to trending content in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
            >
              {/* Enhanced Glow Effect */}
              <div
                className={`absolute -top-1 -right-1 w-14 h-14 ${feature.color} opacity-20 blur-2xl rounded-full group-hover:w-full group-hover:h-full group-hover:opacity-10 transition-all duration-500`}
              />

              {/* Step Number */}
              <div className="absolute top-4 right-4 text-sm font-medium text-white/40">
                Step {index + 1}
              </div>

              {/* Icon Container with Enhanced Hover */}
              <div
                className={`relative w-14 h-14 rounded-xl ${feature.color} bg-opacity-10 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-out`}
              >
                <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                {feature.icon}
              </div>

              {/* Content with Smoother Hover */}
              <div className="relative">
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:translate-x-1 transition-all duration-300 ease-out">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed group-hover:translate-x-1 transition-all duration-300 ease-out">
                  {feature.description}
                </p>
              </div>

              {/* Enhanced Hover Line */}
              <div
                className={`absolute bottom-0 left-0 h-0.5 ${feature.color} opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out w-0 group-hover:w-full`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;