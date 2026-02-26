import Link from "next/link";
import { ArrowRight, Landmark, BookOpen, Star } from "lucide-react";

const highlights = [
  {
    icon: Landmark,
    title: "Akropong — The Royal Seat",
    description:
      "Perched atop the Akuapem Ridge, Akropong has served as the capital of the Okuapeman state for centuries. It is the home of the revered Okuapemhene stool and the center of traditional governance.",
  },
  {
    icon: BookOpen,
    title: "The Odwira Festival",
    description:
      "The Odwira festival is the most sacred annual celebration of the Okuapeman people, a time of purification, thanksgiving, and reaffirmation of allegiance to the Okuapemhene and the Golden Stool.",
  },
  {
    icon: Star,
    title: "Pioneers of Education",
    description:
      "Akropong was one of the first places in Ghana to receive formal Western education through the Basel Mission in the 19th century. The Okuapemhene has since championed education as a pillar of progress.",
  },
];

export default function HistorySection() {
  return (
    <section className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative rounded-sm overflow-hidden bg-gradient-to-br from-charcoal to-navy min-h-[400px] flex items-end">
            <div className="absolute inset-0 opacity-10">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(196,151,90,0.4) 30px, rgba(196,151,90,0.4) 31px),
                    repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(139,26,26,0.3) 30px, rgba(139,26,26,0.3) 31px)
                  `,
                }}
              />
            </div>
            <div className="relative z-10 p-8">
              <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs uppercase tracking-wider rounded-sm mb-4">
                Heritage
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Over Three Centuries of Royal Tradition
              </h3>
              <p className="text-white/60 text-sm max-w-md leading-relaxed">
                The Okuapeman Kingdom is steeped in Akan history, with a royal
                lineage that stretches back over 300 years of leadership,
                cultural preservation, and community stewardship.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Our Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 mb-8 gold-underline">
              Roots of the Kingdom
            </h2>

            <div className="space-y-6">
              {highlights.map((item) => {
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
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-gold font-medium uppercase text-sm tracking-wider hover:gap-3 transition-all"
            >
              Explore Full History
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
