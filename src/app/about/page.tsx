import Image from "next/image";
import {
  Crown,
  Users,
  Landmark,
  BookOpen,
  Scale,
  Star,
  Target,
  Eye,
  Settings,
  Building2,
  FileText,
  Shield,
} from "lucide-react";

const timeline = [
  {
    era: "Foundation",
    title: "Establishment of the Akuapem State",
    description:
      "The Akuapem State was established by Akan migrants who settled along the Akuapem Ridge. Under the leadership of early paramount chiefs, the kingdom grew into a powerful confederation of towns united by shared customs, language, and governance through the Ofori Kuma Stool.",
  },
  {
    era: "19th Century",
    title: "Basel Mission & Education Pioneer",
    description:
      "The arrival of the Basel missionaries in Akropong in 1835 marked a transformative era. Akropong became a beacon of education in the Gold Coast, with the establishment of schools and the translation of the Bible into Twi by Johann Gottlieb Christaller.",
  },
  {
    era: "Colonial Period",
    title: "Resistance & Diplomacy",
    description:
      "During the colonial period, successive Okuapemhenes navigated the complex relationship with British colonial authorities, preserving traditional institutions while advocating for the rights and welfare of the Akuapem people.",
  },
  {
    era: "Independence Era",
    title: "Nation Building",
    description:
      "Following Ghana's independence in 1957, the Okuapemhene played a vital role in national development while maintaining the cultural identity and traditional governance structures of the Akuapem area.",
  },
  {
    era: "Present Day",
    title: "Reform & Transformation Under Oseadeeyo Kwasi Akuffo III",
    description:
      "As the 26th Occupant of the Ofori Kuma Stool, His Royal Majesty is driving a renewed vision to modernize the Office into a world-class, globally recognized institution — restructuring, redeveloping, reforming, and rebranding to align with contemporary governance standards.",
  },
];

const courtMembers = [
  {
    role: "Okuapemhene",
    desc: "King of the Akuapem State, First Citizen, and Head of the Traditional Council",
    image: "/Images/4444 1.png",
  },
  {
    role: "Okuapehemaa",
    desc: "Queen Mother, custodian of royal lineage and traditions",
    image: "/Images/Queen.png",
  },
  {
    role: "Gyaasehene",
    desc: "Chief of the Gyaase division, head of the palace household",
    image: null,
  },
  {
    role: "Kontihene",
    desc: "Second in command, acts in the Okuapemhene's absence",
    image: null,
  },
  {
    role: "Adontenhene",
    desc: "Chief of the main body (Adonten) of the traditional army",
    image: null,
  },
  { role: "Nifahene", desc: "Chief of the right wing division", image: null },
];

const goals = [
  "Improve the quality of life for all Akuapem citizens",
  "Foster economic growth and create opportunities for all",
  "Preserve and promote the unique cultural heritage of Akuapem",
  "Position Akuapem as a center for innovation and development",
];

const principles = [
  { icon: Scale, label: "Transparency & Accountability" },
  { icon: Users, label: "Community Participation" },
  { icon: Landmark, label: "Sustainability" },
  { icon: BookOpen, label: "Respect for Cultural Diversity" },
  { icon: Star, label: "Collaboration & Partnerships" },
  { icon: Crown, label: "Traditional Authority" },
];

const fourPillars = [
  {
    title: "Reforms",
    description:
      "Introducing changes to existing policies, procedures, and practices. Implementing modern financial management systems, streamlining administrative processes, and enhancing communication channels.",
    icon: Settings,
  },
  {
    title: "Redevelopment",
    description:
      "Upgrading the physical infrastructure and facilities associated with the Office. Renovating existing buildings, constructing new offices, and investing in modern technology and equipment.",
    icon: Building2,
  },
  {
    title: "Restructuring",
    description:
      "Reorganising the internal structure to improve workflow, coordination, and effectiveness. Creating new departments, redefining roles, and establishing clear lines of authority.",
    icon: Users,
  },
  {
    title: "Rebranding",
    description:
      "Creating a new image and identity reflecting the modernized role and aspirations. Designing a new visual identity, developing a strong digital presence, and communicating the Office's achievements.",
    icon: Star,
  },
];

const policyInstruments = [
  {
    icon: FileText,
    title: "Executive Resolutions",
    desc: "Binding resolutions from the Okuapemhene and Traditional Council guiding specific development actions",
  },
  {
    icon: Scale,
    title: "Government Agreements",
    desc: "Joint agreements with the national government defining collaborative frameworks for development",
  },
  {
    icon: BookOpen,
    title: "Memoranda of Understanding",
    desc: "MOUs with stakeholders outlining shared objectives, commitments, and cooperation modalities",
  },
  {
    icon: Shield,
    title: "Partnership Charter",
    desc: "A charter guiding equitable negotiation, partnership establishment, and mutual benefit",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <Image
          src="/Images/4444 1.png"
          alt="His Royal Majesty Oseadeeyo Kwasi Akuffo III"
          fill
          className="object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
            About
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            The Office of the <span className="text-gold">Okuapemhene</span>
          </h1>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            His Royal Majesty Oseadeeyo Kwasi Akuffo III is the King of the
            Akuapem State, the 26th Occupant of the Ofori Kuma Stool, and the
            First Citizen of the Akuapem Traditional Area.
          </p>
        </div>
      </section>

      <div className="kente-border" />

      {/* Vision & Mission */}
      <section id="vision" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                Policy Direction
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 mb-6 gold-underline">
                Vision &amp; Mission
              </h2>

              <div className="bg-cream rounded-sm p-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="h-6 w-6 text-gold" />
                  <h3 className="font-serif text-xl font-bold text-navy">
                    Vision
                  </h3>
                </div>
                <p className="text-charcoal-light/80 leading-relaxed">
                  To transform the Office of the Okuapemhene into a world-class,
                  globally recognized institution, driving socio-economic
                  development, cultural preservation, and innovation.
                </p>
              </div>

              <div className="bg-cream rounded-sm p-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="h-6 w-6 text-gold" />
                  <h3 className="font-serif text-xl font-bold text-navy">
                    Mission
                  </h3>
                </div>
                <p className="text-charcoal-light/80 leading-relaxed">
                  To serve as a dynamic and transformative force, leading the
                  Akuapem Traditional Area towards sustainable development while
                  upholding its rich cultural heritage.
                </p>
              </div>

              <p className="text-charcoal-light/70 text-sm leading-relaxed">
                Over the years, the Office has remained largely ceremonial.
                Under His Royal Majesty&apos;s dynamic leadership, there is now
                a renewed vision to modernize and uplift the Office —
                restructuring, redeveloping, reforming, and rebranding to align
                with contemporary standards of governance and development.
              </p>
            </div>

            <div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden mb-8">
                <Image
                  src="/Images/hene.png"
                  alt="His Royal Majesty Oseadeeyo Kwasi Akuffo III on the golden throne"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <h3 className="font-serif text-xl font-bold text-navy mb-4">
                Goals &amp; Aspirations
              </h3>
              <ul className="space-y-3 mb-8">
                {goals.map((goal) => (
                  <li key={goal} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
                    <span className="text-charcoal-light/80 text-sm leading-relaxed">
                      {goal}
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="font-serif text-xl font-bold text-navy mb-4">
                Strategic Objectives
              </h3>
              <ul className="space-y-3">
                {[
                  "Strengthen institutional capacity and governance",
                  "Promote sustainable economic development and job creation",
                  "Invest in education, healthcare, and infrastructure",
                  "Preserve and promote cultural heritage and tourism",
                  "Foster innovation and technological advancement",
                ].map((obj) => (
                  <li key={obj} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
                    <span className="text-charcoal-light/80 text-sm leading-relaxed">
                      {obj}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars of Transformation */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Content, Context &amp; Components
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 gold-underline-center">
              Four Pillars of Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {fourPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="relative bg-white rounded-sm p-7 card-hover"
                >
                  <span className="font-serif text-5xl font-bold text-gold/10 absolute top-3 right-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-charcoal-light/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section id="history" className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Our Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 gold-underline-center">
              History &amp; Heritage
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={item.era}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-white z-10 mt-2" />
                  <div
                    className={`md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14"}`}
                  >
                    <span className="text-gold text-xs uppercase tracking-wider font-medium">
                      {item.era}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-navy mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-charcoal-light/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Royal Court */}
      <section id="court" className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Traditional Governance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 gold-underline-center">
              The Royal Court
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courtMembers.map((member) => (
              <div
                key={member.role}
                className="bg-white rounded-sm overflow-hidden card-hover group"
              >
                {member.image ? (
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.role}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  </div>
                ) : (
                  <div className="h-24 bg-gradient-to-br from-navy/5 to-gold/5 flex items-center justify-center">
                    <Crown className="h-10 w-10 text-gold/30" />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-navy mb-1">
                    {member.role}
                  </h3>
                  <p className="text-sm text-charcoal-light/60 leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles & Policy Instruments */}
      <section id="governance" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                Operational Policy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 mb-6 gold-underline">
                Guiding Principles
              </h2>
              <p className="text-charcoal-light/80 leading-relaxed mb-4">
                The Operational Policy and Work Programme is guided by a set of
                core principles that ensure every initiative serves the Akuapem
                people with integrity, inclusiveness, and accountability.
              </p>
              <p className="text-charcoal-light/80 leading-relaxed mb-4">
                The Office exercises its traditional authority while operating
                in full accordance with the laws of the Republic of Ghana and
                the customary laws and practices of the Akuapem people.
              </p>
              <p className="text-charcoal-light/80 leading-relaxed">
                Policy instruments include Executive Resolutions, Joint
                Agreements with the national government, Memoranda of
                Understanding, and a Joint Partnerships and Negotiation Charter
                — ensuring robust legal and institutional foundations for all
                development activities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {principles.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-cream rounded-sm p-5 text-center group hover:bg-navy transition-colors duration-300"
                  >
                    <Icon className="h-7 w-7 text-gold mx-auto mb-2" />
                    <p className="text-xs font-medium text-navy group-hover:text-white transition-colors">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Policy Instruments */}
          <div className="text-center mb-10">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Legal Framework
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 gold-underline-center">
              Policy Instruments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {policyInstruments.map((inst) => {
              const Icon = inst.icon;
              return (
                <div
                  key={inst.title}
                  className="bg-cream rounded-sm p-6 card-hover group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-navy mb-2">
                    {inst.title}
                  </h3>
                  <p className="text-xs text-charcoal-light/60 leading-relaxed">
                    {inst.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Akuapem State */}
      <section id="kingdom" className="py-20 bg-navy relative overflow-hidden">
        <Image
          src="/Images/People.png"
          alt="Chiefs and people of the Akuapem Traditional Area"
          fill
          className="object-cover opacity-10"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
            The Kingdom
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-3 mb-6 gold-underline-center">
            The Akuapem Traditional Area
          </h2>
          <p className="text-white/60 text-base max-w-3xl mx-auto mb-10 leading-relaxed">
            Stretching along the majestic Akuapem Ridge in Ghana&apos;s Eastern
            Region, the Akuapem Traditional Area encompasses diverse towns and
            communities, each with its own sub-chief owing allegiance to the
            Okuapemhene on the Ofori Kuma Stool.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Akropong",
              "Aburi",
              "Mampong",
              "Larteh",
              "Mamfe",
              "Tutu",
              "Amanokrom",
              "Adukrom",
            ].map((town) => (
              <div key={town} className="stat-glow rounded-sm py-3 px-5">
                <p className="font-serif text-base text-white font-semibold">
                  {town}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-16 bg-cream text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <blockquote className="font-serif text-2xl text-navy/90 leading-relaxed mb-6 italic">
            &ldquo;The Office will be empowered to function at the highest level
            of excellence, comparable to the world&apos;s leading traditional
            institutions — as a dynamic, transformative body driving significant
            socio-economic progress.&rdquo;
          </blockquote>
          <p className="text-gold uppercase tracking-widest text-sm">
            — Operational Policy, Office of the Okuapemhene
          </p>
        </div>
      </section>
    </>
  );
}
