import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import Pricing from "@/components/landing/pricing";
import Testimonials from "@/components/landing/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_2px,transparent_0)] bg-[size:24px_24px]" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      {/* <Testimonials /> */}
      <Pricing />
    </main>
  );
}
