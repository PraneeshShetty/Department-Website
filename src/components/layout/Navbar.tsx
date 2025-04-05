'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/faculty', label: 'Faculty' },
  { href: '/students', label: 'Students' },
  { href: '/projects', label: 'Projects' },
  { href: '/alumni', label: 'Alumni' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-950/90 via-blue-900/90 to-blue-950/90 backdrop-blur-sm border-b border-blue-800/50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 text-transparent bg-clip-text">
            AISE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-blue-100 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="ml-4 bg-blue-800/30 border-blue-400/30 text-blue-100 hover:bg-blue-700/50 hover:text-white"
          >
            Member Login
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-blue-100">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-blue-950/95 backdrop-blur-md border-blue-800/50 p-0">
            <div className="flex flex-col h-full">
              <div className="pt-5 px-6 flex justify-between items-center border-b border-blue-800/30 pb-5">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 text-transparent bg-clip-text">
                  AISE
                </span>
                <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="text-blue-100">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex-1 pt-6 pb-8 px-6 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-3 text-blue-100 hover:text-white border-b border-blue-800/30"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  variant="outline"
                  size="default"
                  className="mt-auto bg-blue-800/30 border-blue-400/30 text-blue-100 hover:bg-blue-700/50 hover:text-white"
                >
                  Member Login
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
