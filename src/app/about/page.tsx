import { Crown, Users, Landmark, BookOpen, Scale, Star } from "lucide-react";

const timeline = [
  {
    era: "Pre-Colonial Era",
    title: "Foundation of Okuapeman",
    description:
      "The Okuapeman state was established by Akan migrants who settled along the Akuapem Ridge. Under the leadership of early paramount chiefs, the kingdom grew into a powerful confederation of towns united by shared customs, language, and governance.",
  },
  {
    era: "19th Century",
    title: "Basel Mission & Education",
    description:
      "The arrival of the Basel missionaries in Akropong in 1835 marked a transformative era. Akropong became a beacon of education in the Gold Coast, with the establishment of schools and the translation of the Bible into Twi by Johann Gottlieb Christaller.",
  },
  {
    era: "Colonial Period",
    title: "Resistance & Diplomacy",
    description:
      "During the colonial period, successive Okuapemhenes navigated the complex relationship with British colonial authorities, preserving traditional institutions while advocating for the rights and welfare of the people.",
  },
  {
    era: "Independence Era",
    title: "Nation Building",
    description:
      "Following Ghana's independence in 1957, the Okuapemhene played a vital role in national development while maintaining the cultural identity and traditional governance structures of the Okuapeman area.",
  },
  {
    era: "Modern Era",
    title: "Progress & Preservation",
    description:
      "Today's Okuapemhene continues the legacy of leadership — championing education, healthcare, infrastructure development, and cultural preservation while embracing modern governance and sustainable development practices.",
  },
];

const courtMembers = [
  { role: "Okuapemhene", desc: "Paramount Chief and Head of the Traditional Council" },
  { role: "Okuapemhemaa", desc: "Queen Mother, custodian of royal lineage and traditions" },
  { role: "Gyaasehene", desc: "Chief of the Gyaase division, head of the palace household" },
  { role: "Kontihene", desc: "Second in command, acts in the Okuapemhene's absence" },
  { role: "Adontenhene", desc: "Chief of the main body (Adonten) of the traditional army" },
  { role: "Nifahene", desc: "Chief of the right wing division" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(196,151,90,0.5) 40px, rgba(196,151,90,0.5) 41px)`,
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 text-center">
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
            Discover
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mt-3 mb-6">
            About the <span className="text-gold">Okuapemhene</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Learn about the rich history, governance, and cultural significance of
            the Okuapemhene and the Okuapeman Traditional Area.
          </p>
        </div>
      </section>

      <div className="kente-border" />

      {/* History timeline */}
      <section id="history" className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Our Story
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy mt-3 gold-underline-center">
              History &amp; Heritage
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.era}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-white z-10 mt-2" />

                  {/* Content */}
                  <div className={`md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="text-gold text-xs uppercase tracking-wider font-medium">
                      {item.era}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-navy mt-1 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-light/70 leading-relaxed">
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
      <section id="court" className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Traditional Governance
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy mt-3 gold-underline-center">
              The Royal Court
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courtMembers.map((member) => (
              <div
                key={member.role}
                className="bg-white rounded-sm p-8 card-hover group"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 text-navy mb-5 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                  <Crown className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-2">
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

      {/* Governance & Traditions */}
      <section id="governance" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                Governance
              </span>
              <h2 className="font-serif text-4xl font-bold text-navy mt-3 mb-6 gold-underline">
                Governance &amp; Traditions
              </h2>
              <p className="text-charcoal-light/80 leading-relaxed mb-4">
                The Okuapemhene governs through a traditional council system rooted
                in Akan customary law. The council comprises divisional chiefs,
                sub-chiefs, and the Queen Mother, each playing a crucial role in
                the administration of the traditional area.
              </p>
              <p className="text-charcoal-light/80 leading-relaxed mb-4">
                Key governance principles include consensus-building, respect for
                elders, communal responsibility, and the sacred bond between the
                stool and the people. The Okuapemhene serves as the final arbiter
                in traditional disputes and the custodian of customary law.
              </p>
              <p className="text-charcoal-light/80 leading-relaxed">
                The traditional governance system works alongside Ghana&apos;s
                modern democratic institutions, with the Okuapemhene serving as a
                member of the Eastern Regional House of Chiefs and the National
                House of Chiefs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Scale, label: "Justice & Arbitration" },
                { icon: Users, label: "Community Assembly" },
                { icon: Landmark, label: "Stool Traditions" },
                { icon: BookOpen, label: "Customary Law" },
                { icon: Star, label: "Sacred Oaths" },
                { icon: Crown, label: "Royal Rites" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-cream rounded-sm p-6 text-center group hover:bg-navy transition-colors duration-300"
                  >
                    <Icon className="h-8 w-8 text-gold mx-auto mb-3" />
                    <p className="text-sm font-medium text-navy group-hover:text-white transition-colors">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Kingdom overview */}
      <section id="kingdom" className="py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 text-center">
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
            The Kingdom
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 mb-6 gold-underline-center">
            The Okuapeman Traditional Area
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            Stretching along the majestic Akuapem Ridge in Ghana&apos;s Eastern
            Region, the Okuapeman Traditional Area encompasses over 17 towns and
            communities, each with its own sub-chief owing allegiance to the
            Okuapemhene.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["Akropong", "Aburi", "Mampong", "Larteh", "Mamfe", "Tutu", "Amanokrom", "Adukrom"].map(
              (town) => (
                <div key={town} className="stat-glow rounded-sm py-4 px-6">
                  <p className="font-serif text-lg text-white font-semibold">
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
