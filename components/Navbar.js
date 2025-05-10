// components/Navbar.js
'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ModeToggle } from './theme-btn';

const Navbar = () => {
  return (
    <nav className="shadow-md top-0 w-full z-50 bg-background/50 sticky backdrop-blur">
      <div className="max-w-7xl mx-auto px-2 sm:px-5 lg:px-6">
        <div className="flex justify-between h-14 items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold" aria-label="Go to Home">MyLogo</Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:scale-105 hover:transition-transform duration-200" aria-label="Home">Home</Link>
            <Link href="/about" className="text-gray-700 hover:scale-105 hover:transition-transform duration-200" aria-label="About">About</Link>
            <Link href="/contact" className="text-gray-700 hover:scale-105 hover:transition-transform duration-200" aria-label="Contact">Contact</Link>
            <div>
              <Button className="mx-1" variant="default">Login</Button>
              <Button className="mx-1" variant="outline">Sign Up</Button>
              <ModeToggle />
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 sm:w-80">
                <SheetHeader>
                  <SheetTitle className="text-lg">Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col space-y-4 text-center items-center">
                  <Link href="/" className="text-gray-700 hover:text-blue-500 text-base" aria-label="Home">Home</Link>
                  <Link href="/about" className="text-gray-700 hover:text-blue-500 text-base" aria-label="About">About</Link>
                  <Link href="/contact" className="text-gray-700 hover:text-blue-500 text-base" aria-label="Contact">Contact</Link>
                  <div className="flex flex-col gap-2 pt-4 w-full px-6">
                    <Button variant="default" className="w-full">Login</Button>
                    <Button variant="outline" className="w-full">Sign Up</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
