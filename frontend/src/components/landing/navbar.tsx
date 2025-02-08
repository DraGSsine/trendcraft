"use client";
import { Menu } from "lucide-react";
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
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <Link href="/auth/signin">
              <Button
                variant="ghost"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Sign In
              </Button>
            </Link>
            <Link href="#pricing">
              <Button className="text-sm font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition-colors">
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
                  className="h-9 w-9 p-0 text-white hover:bg-indigo-900 transition-colors"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-[300px] pr-0 bg-background/95 backdrop-blur border-l border-white/10"
              >
                <div className="flex flex-col space-y-6 mt-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="flex flex-col space-y-4 pt-4 border-t border-white/10">
                    <Link href="/auth/signin">
                      <Button
                        variant="ghost"
                        className="justify-start text-white/70 hover:text-white transition-colors"
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Link href="#pricing">
                      <Button
                        variant="ghost"
                        className="justify-start bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
                      >
                        Start Free Trial
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
