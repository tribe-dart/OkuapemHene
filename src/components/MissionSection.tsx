import Link from "next/link";
import Image from "next/image";
import { Crown, Users, BookOpen, Lightbulb } from "lucide-react";

const focusAreas = [
  {
    icon: Crown,
    title: "Institutional Strengthening",
    description:
      "Developing a comprehensive organizational structure with robust financial management, capacity building, and clear governance frameworks.",
  },
  {
    icon: Users,
    title: "Socio-Economic Development",
    description:
      "Collaborating with government, NGOs, and the private sector to attract investment, create opportunities, and address poverty and inequality.",
  },
  {
    icon: BookOpen,
    title: "Cultural Heritage Preservation",
    description:
      "Establishing a cultural heritage center, organizing festivals, supporting research on Akuapem history, and promoting cultural tourism.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Technology",
    description:
      "Establishing an innovation hub, promoting digital literacy, and partnering with research institutions to drive technology-driven solutions.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Vision &amp; Mission
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 mb-6 gold-underline">
              A World-Class Institution for Akuapem
            </h2>
            <p className="text-charcoal-light/80 leading-relaxed text-base mb-4">
              Under the dynamic leadership of His Royal Majesty Oseadeeyo Kwasi
              Akuffo III, the Office of the Okuapemhene is being transformed
              from a largely ceremonial entity into a modern, globally
              recognized institution driving significant socio-economic
              progress.
            </p>
            <p className="text-charcoal-light/80 leading-relaxed text-sm mb-4">
              <strong className="text-navy">Vision:</strong> To transform the
              Office of the Okuapemhene into a world-class, globally recognized
              institution, driving socio-economic development, cultural
              preservation, and innovation.
            </p>
            <p className="text-charcoal-light/80 leading-relaxed text-sm mb-8">
              <strong className="text-navy">Mission:</strong> To serve as a
              dynamic and transformative force, leading the Akuapem Traditional
              Area towards sustainable development while upholding its rich
              cultural heritage.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-gold font-medium border-b-2 border-gold/30 pb-1 hover:border-gold transition-colors uppercase text-sm tracking-wider"
            >
              Read the Full Policy Framework
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden relative">
              <Image
                src="/Images/king.png"
                alt="His Royal Majesty Oseadeeyo Kwasi Akuffo III on the royal throne"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="font-serif text-lg text-white font-semibold mb-1">
                  Oseadeeyo Kwasi Akuffo III
                </p>
                <p className="text-gold-light text-xs uppercase tracking-widest">
                  26th Occupant &middot; Ofori Kuma Stool
                </p>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-4 border-r-4 border-gold/30 rounded-br-sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="group p-6 rounded-sm bg-cream hover:bg-navy transition-all duration-300 card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy mb-2 group-hover:text-white transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-charcoal-light/70 leading-relaxed group-hover:text-white/70 transition-colors">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
