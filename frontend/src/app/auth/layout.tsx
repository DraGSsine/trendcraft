import React, { ReactNode } from "react";
import Trusted from "@/components/landing/trusted";
import Logo from "@/components/landing/logo";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left Decorative Panel */}
      <div className="hidden lg:flex w-1/2 p-12 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-purple-600/20" />
        <div className="absolute inset-0 backdrop-blur-xl" />

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Decorative Orbs */}
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-[600px] w-[600px] rounded-full bg-indigo-500/20 blur-3xl" />

        {/* Content Section */}
        <div className="relative flex flex-col justify-between h-full">
          {/* Logo */}
          <Logo />

          {/* Hero Content */}
          <div className="space-y-8 max-w-lg">
            <h1 className="text-6xl font-bold text-white">
              Ignite Your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500">
                Creative Journey
              </span>
            </h1>
            <p className="text-xl text-zinc-400">
              Join over 100 creators leveraging AI and trending insights to fuel
              your social media success.
            </p>

            {/* Social Proof */}
            <Trusted />
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="flex-1 flex items-center justify-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
