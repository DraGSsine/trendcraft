"use client";

import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Trusted from "./trusted";

const socialPlatforms = [
  {
    icon: "/icons/youtube.svg",
    color: "bg-zinc-900",
    position: "top-[15%] left-[14%]",
    delay: "delay-100",
  },
  {
    icon: "/icons/instagram.svg",
    color: "bg-zinc-900",
    position: "top-[35%] left-[11%]",
    delay: "delay-300",
  },
  {
    icon: "/icons/facebook.svg",
    color: "bg-zinc-900",
    position: "top-[50%] left-[16%]",
    delay: "delay-200",
  },
  {
    icon: "/icons/twitter.svg",
    color: "bg-zinc-900",
    position: "top-[45%] right-[15%]",
    delay: "delay-400",
  },
  {
    icon: "/icons/tiktok.svg",
    color: "bg-zinc-900",
    position: "top-[35%] right-[11%]",
    delay: "delay-500",
  },
  {
    icon: "/icons/linkedin.svg",
    color: "bg-zinc-900",
    position: "top-[15%] right-[13%]",
    delay: "delay-600",
  },
];

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-zinc-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Floating Social Media Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {socialPlatforms.map((platform, index) => (
          <div
            key={index}
            className={cn(
              "absolute w-14 h-14 rounded-xl p-3",
              platform.color,
              platform.position,
              "animate-float",
              platform.delay,
              "border border-white/5",
              "shadow-lg shadow-black/10"
            )}
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
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 text-white">
            Ride the Wave with{" "}
            <span className="text-indigo-500">AI</span> & <span className=" text-indigo-500" >Google Trends</span>
            <span className="block mt-2">Inspired Content</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-zinc-400 my-12 max-w-2xl mx-auto leading-relaxed">
            Harness the power of AI to craft captivating content, decode
            emerging trends, and amplify your social media presence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/auth/signup" className="w-full sm:w-auto">
              <Button 
                className="w-full h-12 bg-indigo-500 text-white hover:bg-indigo-500 rounded-lg"
              >
                <span className="flex items-center justify-center gap-2 text-base font-semibold">
                  Start Creating
                  <Play className="w-4 h-4" />
                </span>
              </Button>
            </Link>

            <Link href="#pricing" className="w-full sm:w-auto">
              <Button 
                variant="outline"
                className="w-full h-12 border border-zinc-800 hover:bg-zinc-800 text-white rounded-lg"
              >
                <span className="flex items-center justify-center gap-2 text-base font-semibold">
                  Free Trial
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
          </div>

          {/* Dashboard Preview */}
          <div className="relative mx-auto max-w-5xl">
            <div className="relative bg-zinc-900 rounded-xl border border-zinc-800 p-4 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent rounded-xl" />
              <Image
                width={1213}
                height={607}
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"
                alt="Analytics Dashboard"
                className="w-full rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}