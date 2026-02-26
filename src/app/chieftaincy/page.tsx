import { Crown, Shield, Users, Star, BookOpen, Landmark } from "lucide-react";

const stoolHistory = [
  {
    title: "The Sacred Stool",
    description:
      "In Akan tradition, the stool is the most sacred symbol of authority. The Okuapemhene's stool represents the soul of the nation, carrying the spiritual essence of all past rulers. It is never sat upon but is rather a symbol of the bond between the living, the dead, and the yet unborn.",
  },
  {
    title: "Enstoolment Ceremony",
    description:
      "The enstoolment of a new Okuapemhene is one of the most elaborate traditional ceremonies in Ghana. The process involves nomination by the Queen Mother, confirmation by the kingmakers, swearing of sacred oaths, and a series of ritual purification rites spanning several weeks.",
  },
  {
    title: "Oath of Office",
    description:
      "Upon enstoolment, the Okuapemhene swears a sacred oath — the Great Oath of Okuapeman — pledging to uphold the traditions, protect the people, administer justice fairly, and work for the development and unity of the kingdom.",
  },
];

const roles = [
  {
    icon: Shield,
    title: "Custodian of Tradition",
    description:
      "The Okuapemhene is the chief protector and custodian of Akan customs, rituals, and cultural practices within the traditional area.",
  },
  {
    icon: Users,
    title: "Unifier of the People",
    description:
      "As paramount chief, the Okuapemhene brings together the diverse communities and sub-chiefs of Okuapeman under a shared identity.",
  },
  {
    icon: Star,
    title: "Arbiter of Justice",
    description:
      "The Okuapemhene's court serves as the highest traditional judicial authority, resolving disputes and upholding customary law.",
  },
  {
    icon: BookOpen,
    title: "Champion of Education",
    description:
      "Following the legacy of Akropong's pioneering role in education, the Okuapemhene actively promotes educational development.",
  },
  {
    icon: Landmark,
    title: "Development Leader",
    description:
      "Modern Okuapemhenes have championed infrastructure, healthcare, and economic development across the traditional area.",
  },
  {
    icon: Crown,
    title: "National Statesman",
    description:
      "As a member of the National House of Chiefs, the Okuapemhene participates in national policy and governance discourse.",
  },
];

export default function ChieftaincyPage() {
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
            Institution
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mt-3 mb-6">
            The <span className="text-gold">Chieftaincy</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            The sacred institution of the Okuapemhene — its traditions, roles, and
            significance in Ghanaian governance and culture.
          </p>
        </div>
      </section>

      <div className="kente-border" />

      {/* Stool History */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Sacred Traditions
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy mt-3 gold-underline-center">
              The Stool &amp; Its Legacy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stoolHistory.map((item, i) => (
              <div
                key={item.title}
                className="relative bg-cream rounded-sm p-10 card-hover"
              >
                <span className="font-serif text-6xl font-bold text-gold/10 absolute top-4 right-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl font-bold text-navy mb-4">
                  {item.title}
                </h3>
                <p className="text-charcoal-light/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Responsibilities
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy mt-3 gold-underline-center">
              Roles of the Okuapemhene
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.title}
                  className="bg-white rounded-sm p-8 card-hover group"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-3">
                    {role.title}
                  </h3>
                  <p className="text-sm text-charcoal-light/70 leading-relaxed">
                    {role.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-navy text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <blockquote className="font-serif text-3xl text-white/90 leading-relaxed mb-6 italic">
            &ldquo;The stool does not belong to the chief who sits on it. It
            belongs to the people — past, present, and future.&rdquo;
          </blockquote>
          <p className="text-gold uppercase tracking-widest text-sm">
            — Akan Proverb
          </p>
        </div>
      </section>
    </>
  );
}
