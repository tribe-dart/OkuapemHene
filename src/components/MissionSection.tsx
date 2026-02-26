import Link from "next/link";
import { Crown, Users, BookOpen, Heart } from "lucide-react";

const values = [
  {
    icon: Crown,
    title: "Royal Authority",
    description:
      "Upholding the sacred institution of Akan chieftaincy and the traditions passed down through generations of Okuapemhene rulers.",
  },
  {
    icon: Users,
    title: "Community Unity",
    description:
      "Bringing together the diverse communities of the Okuapeman Traditional Area under a shared vision of progress and prosperity.",
  },
  {
    icon: BookOpen,
    title: "Cultural Preservation",
    description:
      "Safeguarding the rich cultural heritage, language, customs, and festivals that define the identity of Okuapeman.",
  },
  {
    icon: Heart,
    title: "Service to the People",
    description:
      "Championing education, healthcare, infrastructure, and economic development to uplift the lives of all citizens.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Our Mission
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 mb-6 gold-underline">
              A Legacy of Leadership &amp; Service
            </h2>
            <p className="text-charcoal-light/80 leading-relaxed text-base mb-4">
              For centuries, the Okuapemhene has served as the paramount chief and
              spiritual leader of the Okuapeman Traditional Area, one of the most
              historically significant chieftaincy institutions in Ghana&apos;s
              Eastern Region.
            </p>
            <p className="text-charcoal-light/80 leading-relaxed text-sm mb-8">
              From the ancient seat of Akropong, the Okuapemhene continues a
              sacred tradition of governance rooted in Akan values — justice,
              unity, and progress. The Palace works tirelessly to preserve
              cultural heritage while driving modernization and sustainable
              development for the people.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-gold font-medium border-b-2 border-gold/30 pb-1 hover:border-gold transition-colors uppercase text-sm tracking-wider"
            >
              Learn More About Our Heritage
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-28 h-28 mx-auto mb-5 rounded-full border-4 border-gold/30 flex items-center justify-center">
                  <Crown className="h-14 w-14 text-gold/60" />
                </div>
                <p className="font-serif text-xl text-white/80 mb-2">
                  The Okuapemhene
                </p>
                <p className="text-gold-light/60 text-xs uppercase tracking-widest">
                  Paramount Chief of Okuapeman
                </p>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-4 border-r-4 border-gold/30 rounded-br-sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="group p-6 rounded-sm bg-cream hover:bg-navy transition-all duration-300 card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy mb-2 group-hover:text-white transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-charcoal-light/70 leading-relaxed group-hover:text-white/70 transition-colors">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
