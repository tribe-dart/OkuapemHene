import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Development", href: "/development" },
  { label: "News & Events", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Vision & Mission", href: "/about#vision" },
  { label: "Operational Policy", href: "/about#governance" },
  { label: "Work Programme 2025–2030", href: "/development" },
  { label: "Cultural Heritage", href: "/gallery" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="kente-border" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/Images/Logo.png"
                alt="Akuapem Traditional Area Crest"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-serif text-base font-bold leading-tight">
                  Okuapemhene
                </p>
                <p className="text-[10px] text-gold-light tracking-widest uppercase">
                  Office of the King
                </p>
              </div>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              The official website of the Office of the Okuapemhene — His Royal
              Majesty Oseadeeyo Kwasi Akuffo III, King of the Akuapem State and
              26th Occupant of the Ofori Kuma Stool.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-gold text-base mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-gold text-base mb-5">Resources</h3>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-gold text-base mb-5">Follow Us</h3>
            <p className="text-xs text-white/60 mb-5 leading-relaxed">
              Stay connected with the latest news and announcements from the
              Office of the Okuapemhene.
            </p>
            <div className="flex gap-2">
              {[
                { label: "Facebook", icon: Facebook, href: "#" },
                { label: "Twitter", icon: Twitter, href: "#" },
                { label: "Instagram", icon: Instagram, href: "#" },
                { label: "YouTube", icon: Youtube, href: "#" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/40">
            &copy; {new Date().getFullYear()} Office of the Okuapemhene. All
            rights reserved.
          </p>
          <p className="text-[11px] text-white/40">
            Akuapem Traditional Area &middot; Eastern Region, Ghana
          </p>
        </div>
      </div>
    </footer>
  );
}
