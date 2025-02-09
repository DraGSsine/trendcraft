import { ArrowRight, Play, Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Trusted from "./trusted";
const socialPlatforms = [
  {
    icon: "/icons/youtube.svg",
    gradient: "from-red-500/20 to-red-600/20",
    iconColor: "text-red-500",
    size: "w-14 h-14",
    position: "top-[15%] left-[14%]",
    delay: "delay-100",
  },
  {
    icon: "/icons/instagram.svg",
    gradient: "from-pink-500/20 to-purple-500/20",
    iconColor: "text-pink-500",
    size: "w-14 h-14",
    position: "top-[35%] left-[11%]",
    delay: "delay-300",
  },
  {
    icon: "/icons/facebook.svg",
    gradient: "from-blue-600/20 to-blue-700/20",
    iconColor: "text-blue-600",
    size: "w-14 h-14",
    position: "top-[50%] left-[16%]",
    delay: "delay-200",
  },
  {
    icon: "/icons/twitter.svg",
    gradient: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-500",
    size: "w-14 h-14",
    position: "top-[45%] right-[15%]",
    delay: "delay-400",
  },
  {
    icon: "/icons/tiktok.svg",
    gradient: "from-neutral-500/20 to-neutral-600/20",
    iconColor: "text-white",
    size: "w-14 h-14",
    position: "top-[35%] right-[11%]",
    delay: "delay-500",
  },
  {
    icon: "/icons/linkedin.svg",
    gradient: "from-blue-700/20 to-blue-800/20",
    iconColor: "text-blue-600",
    size: "w-14 h-14",
    position: "top-[15%] right-[13%]",
    delay: "delay-600",
  },
];
const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      {/* Floating Social Media Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {socialPlatforms.map((platform, index) => (
          <div
            key={index}
            className={`absolute ${platform.position} ${platform.size} bg-gradient-to-br ${platform.gradient} rounded-full p-3 animate-float ${platform.delay}`}
          >
            <Image
              src={platform.icon}
              alt="social media icon"
              width={40}
              height={40}
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-4xl mx-auto">
        <Trusted />

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight font-bold mb-8">
            Ride the Wave with
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              AI & Google Trends
            </span>
            Inspired Content
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/70 my-12 max-w-2xl mx-auto leading-relaxed">
            Harness the power of AI to craft captivating content, decode
            emerging trends, and amplify your social media presence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
      <Link href="/auth/signup" className="w-full sm:w-auto">
        <Button 
          className="w-full bg-gradient-to-r from-indigo-500 to-indigo-700 text-white hover:opacity-90 transition-all duration-300 rounded-xl p-6"
        >
          <span className="flex items-center justify-center gap-2 text-lg font-semibold">
            Start Creating
            <Play className="w-5 h-5" />
          </span>
        </Button>
      </Link>

      <Link href="#pricing" className="w-full sm:w-auto">
        <Button 
          variant="outline"
          className="w-full border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all duration-300 rounded-xl p-6"
        >
          <span className="flex items-center justify-center gap-2 text-lg font-semibold">
            Free Trial
            <ArrowRight className="w-5 h-5" />
          </span>
        </Button>
      </Link>
    </div>

          {/* Dashboard Preview */}
          <div className="relative mx-auto max-w-5xl">
            <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl">
              <Image
                width={1213}
                height={607}
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"
                alt="Analytics Dashboard"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
