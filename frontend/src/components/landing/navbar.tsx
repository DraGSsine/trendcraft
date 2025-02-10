"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./logo";
import Link from "next/link";

const navigation = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-lg">
      <div className="container px-6 sm:px-8 mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {item.name}
            </a>
          ))}
          <Link href="/auth/signin">
            <Button variant="ghost" className="text-sm text-white/70 hover:text-white">
              Sign In
            </Button>
          </Link>
          <Link href="#pricing">
            <Button className="text-sm bg-indigo-500 text-white text-zinc-900 hover:bg-indigo-500 text-white transition-all rounded-lg px-6 py-2">
              Start Free Trial
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="h-9 w-9 p-0 rounded-lg text-white hover:bg-zinc-800"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[300px] pr-0 bg-zinc-950 backdrop-blur-lg border-l border-white/10 p-6"
            >
              <div className="flex flex-col space-y-6 mt-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-4 pt-4 border-t border-white/10">
                  <Link href="/auth/signin">
                    <Button variant="ghost" className="text-white/70 hover:text-white">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="#pricing">
                    <Button className="bg-indigo-500 text-white text-zinc-900 hover:bg-indigo-500 text-white transition-all rounded-lg">
                      Start Free Trial
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
