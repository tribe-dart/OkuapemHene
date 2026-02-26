import { Crown, Users, Landmark, BookOpen, Scale, Star, Target, Eye } from "lucide-react";

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
      "During the colonial period, successive Okuapehenes navigated the complex relationship with British colonial authorities, preserving traditional institutions while advocating for the rights and welfare of the Akuapem people.",
  },
  {
    era: "Independence Era",
    title: "Nation Building",
    description:
      "Following Ghana's independence in 1957, the Okuapehene played a vital role in national development while maintaining the cultural identity and traditional governance structures of the Akuapem area.",
  },
  {
    era: "Present Day",
    title: "Reform & Transformation Under Oseadeeyo Kwasi Akuffo III",
    description:
      "As the 26th Occupant of the Ofori Kuma Stool, His Royal Majesty is driving a renewed vision to modernize the Office into a world-class, globally recognized institution — restructuring, redeveloping, reforming, and rebranding to align with contemporary governance standards.",
  },
];

const courtMembers = [
  { role: "Okuapehene", desc: "King of the Akuapem State, First Citizen, and Head of the Traditional Council" },
  { role: "Okuapehemaa", desc: "Queen Mother, custodian of royal lineage and traditions" },
  { role: "Gyaasehene", desc: "Chief of the Gyaase division, head of the palace household" },
  { role: "Kontihene", desc: "Second in command, acts in the Okuapehene's absence" },
  { role: "Adontenhene", desc: "Chief of the main body (Adonten) of the traditional army" },
  { role: "Nifahene", desc: "Chief of the right wing division" },
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

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(196,151,90,0.5) 40px, rgba(196,151,90,0.5) 41px)`,
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
            About
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            The Office of the <span className="text-gold">Okuapehene</span>
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
                  <h3 className="font-serif text-xl font-bold text-navy">Vision</h3>
                </div>
                <p className="text-charcoal-light/80 leading-relaxed">
                  To transform the Office of the Okuapehene into a world-class,
                  globally recognized institution, driving socio-economic
                  development, cultural preservation, and innovation.
                </p>
              </div>

              <div className="bg-cream rounded-sm p-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="h-6 w-6 text-gold" />
                  <h3 className="font-serif text-xl font-bold text-navy">Mission</h3>
                </div>
                <p className="text-charcoal-light/80 leading-relaxed">
                  To serve as a dynamic and transformative force, leading the
                  Akuapem Traditional Area towards sustainable development while
                  upholding its rich cultural heritage.
                </p>
              </div>

              <p className="text-charcoal-light/70 text-sm leading-relaxed">
                Over the years, the Office has remained largely ceremonial.
                Under His Royal Majesty&apos;s dynamic leadership, there is now a
                renewed vision to modernize and uplift the Office — restructuring,
                redeveloping, reforming, and rebranding to align with contemporary
                standards of governance and development.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-navy mb-4">
                Goals &amp; Aspirations
              </h3>
              <ul className="space-y-3 mb-8">
                {goals.map((goal) => (
                  <li key={goal} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
                    <span className="text-charcoal-light/80 text-sm leading-relaxed">{goal}</span>
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
                    <span className="text-charcoal-light/80 text-sm leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section id="history" className="py-20 bg-cream">
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
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-cream z-10 mt-2" />
                  <div className={`md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
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
      <section id="court" className="py-20 bg-white">
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
                className="bg-cream rounded-sm p-7 card-hover group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-navy mb-4 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                  <Crown className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy mb-1">
                  {member.role}
                </h3>
                <p className="text-sm text-charcoal-light/60 leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section id="governance" className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
                The Office exercises its traditional authority while operating in
                full accordance with the laws of the Republic of Ghana and the
                customary laws and practices of the Akuapem people.
              </p>
              <p className="text-charcoal-light/80 leading-relaxed">
                Policy instruments include Executive Resolutions, Joint Agreements
                with the national government, Memoranda of Understanding, and a
                Joint Partnerships and Negotiation Charter — ensuring robust legal
                and institutional foundations for all development activities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {principles.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-white rounded-sm p-5 text-center group hover:bg-navy transition-colors duration-300"
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
        </div>
      </section>

      {/* The Akuapem State */}
      <section id="kingdom" className="py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
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
            Okuapehene on the Ofori Kuma Stool.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {["Akropong", "Aburi", "Mampong", "Larteh", "Mamfe", "Tutu", "Amanokrom", "Adukrom"].map(
              (town) => (
                <div key={town} className="stat-glow rounded-sm py-3 px-5">
                  <p className="font-serif text-base text-white font-semibold">
                    {town}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
