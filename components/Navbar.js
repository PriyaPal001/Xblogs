// components/Navbar.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ModeToggle } from './theme-btn';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" shadow-md top-0 w-full z-50 bg-background/50 sticky backdrop-blur">
      <div className="max-w-7xl mx-auto px-2 sm:px-5 lg:px-6">
        <div className="flex justify-between h-14 items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold ">MyLogo</Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
            <div>
                <Button className="mx-1" variant="default">Login</Button>
                <Button className="mx-1" variant="outline">Sign Up</Button>
                <ModeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
          <Sheet>
          <ModeToggle />
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
                  <Link href="/" className="text-gray-700 hover:text-blue-500 text-base">Home</Link>
                  <Link href="/about" className="text-gray-700 hover:text-blue-500 text-base">About</Link>
                  <Link href="/contact" className="text-gray-700 hover:text-blue-500 text-base">Contact</Link>
                  <div className="flex flex-col gap-2 pt-4">
                    <Button variant="default" className="w-16">Login</Button>
                    <Button variant="outline" className="w-16">Sign Up</Button>
              
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
 