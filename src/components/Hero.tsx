import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-navy">
      {/* Background image of the King */}
      <Image
        src="/Images/Hero.png"
        alt="His Royal Majesty Oseadeeyo Kwasi Akuffo III"
        fill
        className="object-cover object-top opacity-30"
        priority
      />
      <div className="hero-overlay absolute inset-0" />

      {/* Kente-inspired pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg, transparent, transparent 60px,
              rgba(196,151,90,0.3) 60px, rgba(196,151,90,0.3) 61px
            ),
            repeating-linear-gradient(
              90deg, transparent, transparent 60px,
              rgba(196,151,90,0.3) 60px, rgba(196,151,90,0.3) 61px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content — left side */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-gold/50" />
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                Office of the Okuapemhene
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
              Reform. Rebuild.
              <br />
              <span className="text-gold">Transform Akuapem.</span>
            </h1>

            <p className="max-w-lg text-base text-white/70 leading-relaxed mb-4">
              His Royal Majesty Oseadeeyo Kwasi Akuffo III, the 26th Occupant of
              the Ofori Kuma Stool, King of the Akuapem State — driving
              socio-economic development, cultural preservation, and innovation.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-white/50 mb-10">
              <span>Reforms</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
              <span>Redevelopment</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
              <span>Restructuring</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
              <span>Rebranding</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-14 px-10 bg-gold text-white font-medium rounded-sm tracking-wider uppercase text-sm hover:bg-gold-dark transition-colors"
              >
                Our Vision &amp; Policy
              </Link>
              <Link
                href="/development"
                className="inline-flex items-center justify-center h-14 px-10 border border-gold/40 text-gold font-medium rounded-sm tracking-wider uppercase text-sm hover:bg-gold/10 transition-colors"
              >
                Work Programme 2025–2030
              </Link>
            </div>
          </div>

          {/* King's portrait — right side (visible on desktop) */}
          <div className="hidden md:flex justify-end">
            <div className="relative">
              <div className="w-[380px] h-[480px] rounded-sm overflow-hidden relative">
                <Image
                  src="/Images/Hero.png"
                  alt="His Royal Majesty Oseadeeyo Kwasi Akuffo III in royal kente"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-4 border-l-4 border-gold/40 rounded-bl-sm" />
              <div className="absolute -top-3 -right-3 w-24 h-24 border-t-4 border-r-4 border-gold/40 rounded-tr-sm" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="h-5 w-5 text-gold/60" />
      </div>
    </section>
  );
}
