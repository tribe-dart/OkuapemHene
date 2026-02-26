import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background — rich dark gradient with golden tones evoking Ghanaian royalty */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><radialGradient id="g1" cx="50%25" cy="40%25" r="70%25"><stop offset="0%25" style="stop-color:%231a3040"/><stop offset="100%25" style="stop-color:%230f1a24"/></radialGradient><radialGradient id="g2" cx="80%25" cy="20%25" r="40%25"><stop offset="0%25" style="stop-color:%23C4975A;stop-opacity:0.15"/><stop offset="100%25" style="stop-color:transparent"/></radialGradient></defs><rect fill="url(%23g1)" width="1920" height="1080"/><rect fill="url(%23g2)" width="1920" height="1080"/></svg>')`,
        }}
      />
      <div className="hero-overlay absolute inset-0" />

      {/* Decorative geometric pattern — kente-inspired */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 60px,
              rgba(196,151,90,0.3) 60px,
              rgba(196,151,90,0.3) 61px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 60px,
              rgba(196,151,90,0.3) 60px,
              rgba(196,151,90,0.3) 61px
            )`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {/* Decorative top line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-16 bg-gold/50" />
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            The Royal Palace of Okuapeman
          </span>
          <span className="h-px w-16 bg-gold/50" />
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6">
          Preserving Heritage,
          <br />
          <span className="text-gold">Building the Future</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/70 leading-relaxed mb-4">
          The seat of the Okuapemhene — the paramount chief of the Okuapeman
          Traditional Area, custodian of Akan culture, and champion of
          community development in the Eastern Region of Ghana.
        </p>

        {/* Tagline badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/50 mb-10">
          <span>Royal Heritage</span>
          <span className="h-1 w-1 rounded-full bg-gold" />
          <span>Cultural Custodian</span>
          <span className="h-1 w-1 rounded-full bg-gold" />
          <span>Community Development</span>
          <span className="h-1 w-1 rounded-full bg-gold" />
          <span>Unity &amp; Progress</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center justify-center h-14 px-10 bg-gold text-white font-medium rounded-sm tracking-wider uppercase text-sm hover:bg-gold-dark transition-colors"
          >
            Discover Our Heritage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-14 px-10 border border-gold/40 text-gold font-medium rounded-sm tracking-wider uppercase text-sm hover:bg-gold/10 transition-colors"
          >
            Visit the Palace
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="h-5 w-5 text-gold/60" />
      </div>
    </section>
  );
}
