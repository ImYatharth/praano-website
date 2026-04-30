"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/maheshwaribhagyashree914/30min";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/demo", label: "Demo" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-teal rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-ink tracking-tight">
              Praano
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink/70 hover:text-teal transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center px-5 py-2.5 bg-teal text-white text-sm font-semibold rounded-lg hover:bg-teal-dark"
            >
              Book a Free Demo
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-ink transition-transform duration-200"
            aria-label="Toggle menu"
          >
            <span
              className="block transition-all duration-200"
              style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </span>
          </button>
        </div>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "400px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="border-t border-gray-100 bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-ink/80 hover:text-teal transition-colors duration-200 py-2.5"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-press block w-full text-center px-5 py-3 bg-teal text-white font-semibold rounded-lg hover:bg-teal-dark mt-3"
          >
            Book a Free Demo
          </a>
        </div>
      </div>
    </header>
  );
}
