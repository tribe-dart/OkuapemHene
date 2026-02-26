import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Landmark, Target, TrendingUp } from "lucide-react";

const roadmap = [
  {
    icon: Target,
    title: "Short-Term (1–2 Years)",
    description:
      "Enhanced efficiency in internal processes, increased transparency through clearer roles and financial systems, and initial partnerships with key stakeholders for pilot projects.",
  },
  {
    icon: TrendingUp,
    title: "Medium-Term (3–5 Years)",
    description:
      "Tangible development impacts in education, healthcare, and economic growth. Cultural revitalization strengthening Akuapem identity and boosting tourism. Stronger institutional capacity.",
  },
  {
    icon: Landmark,
    title: "Long-Term (5+ Years)",
    description:
      "A globally recognized, world-class institution. Sustainable development ensuring economic prosperity, social well-being, and environmental protection. A lasting legacy of progress.",
  },
];

export default function HistorySection() {
  return (
    <section className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative rounded-sm overflow-hidden min-h-[400px] flex items-end">
            <Image
              src="/Images/Heritage.png"
              alt="Traditional gathering at the Akuapem court"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
            <div className="relative z-10 p-8">
              <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs uppercase tracking-wider rounded-sm mb-4">
                Policy Forecast
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                From Ceremonial to Transformative
              </h3>
              <p className="text-white/60 text-sm max-w-md leading-relaxed">
                The Office will be empowered to function at the highest level of
                excellence — comparable to the Office of the Ruler of Dubai, the
                Emir of Qatar, and the King of Saudi Arabia — as a dynamic body
                driving socio-economic progress across Akuapem State.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Strategic Roadmap
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 mb-8 gold-underline">
              Policy Forecast &amp; Timeline
            </h2>

            <div className="space-y-6">
              {roadmap.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 group">
                    <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-navy mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-charcoal-light/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/development"
              className="mt-8 inline-flex items-center gap-2 text-gold font-medium uppercase text-sm tracking-wider hover:gap-3 transition-all"
            >
              Full Work Programme
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
