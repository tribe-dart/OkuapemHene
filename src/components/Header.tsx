"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "History & Heritage", href: "/about#history" },
      { label: "The Royal Court", href: "/about#court" },
      { label: "Governance & Traditions", href: "/about#governance" },
      { label: "The Okuapeman Kingdom", href: "/about#kingdom" },
    ],
  },
  { label: "Chieftaincy", href: "/chieftaincy" },
  { label: "Development", href: "/development" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="kente-border" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold bg-gold/10 text-gold font-serif text-lg font-bold transition-colors group-hover:bg-gold group-hover:text-white">
              O
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-base font-bold text-white leading-tight">
                Okuapemhene
              </p>
              <p className="text-[10px] text-gold-light tracking-widest uppercase">
                Royal Palace
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div key={item.label} className="nav-item relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-xs font-medium text-white/90 hover:text-gold transition-colors uppercase tracking-wider"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3 w-3" />}
                </Link>

                {item.children && (
                  <div className="nav-dropdown absolute left-0 top-full pt-2">
                    <div className="w-56 rounded-lg bg-navy-light border border-white/10 shadow-2xl py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Search"
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-full text-white/80 hover:text-gold hover:bg-white/5 transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden h-10 w-10 flex items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy-light backdrop-blur-lg border-t border-white/10">
          <nav className="mx-auto max-w-7xl px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-white/90 hover:text-gold uppercase tracking-wider transition-colors"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-8 py-2 text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
