import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Chieftaincy", href: "/chieftaincy" },
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-gold/10 text-gold font-serif text-lg font-bold">
                O
              </div>
              <div>
                <p className="font-serif text-base font-bold leading-tight">
                  Okuapehene
                </p>
                <p className="text-[10px] text-gold-light tracking-widest uppercase">
                  Office of the King
                </p>
              </div>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              The official website of the Office of the Okuapehene — His Royal
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
              Office of the Okuapehene.
            </p>
            <div className="flex gap-2">
              {["Facebook", "Twitter", "Instagram", "YouTube"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all text-xs font-bold"
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/40">
            &copy; {new Date().getFullYear()} Office of the Okuapehene. All rights reserved.
          </p>
          <p className="text-[11px] text-white/40">
            Akuapem Traditional Area &middot; Eastern Region, Ghana
          </p>
        </div>
      </div>
    </footer>
  );
}
