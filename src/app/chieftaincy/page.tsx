import { Crown, Shield, Users, Star, BookOpen, Landmark, Settings, FileText, Scale, Building2 } from "lucide-react";

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

const systems = [
  {
    category: "Systems",
    items: [
      "Administrative systems for financial management and record keeping",
      "Decision-making protocols ensuring inclusivity and consultation",
      "Monitoring and evaluation for progress tracking and accountability",
    ],
  },
  {
    category: "Structures",
    items: [
      "Well-defined organizational structure with clear reporting lines",
      "Advisory councils composed of experts and community representatives",
      "Platforms for regular community dialogue and engagement",
    ],
  },
  {
    category: "Strategies",
    items: [
      "Comprehensive resource mobilisation from diverse sources",
      "Communication strategy for stakeholder engagement and transparency",
      "Capacity building programmes for staff development",
    ],
  },
  {
    category: "Services",
    items: [
      "Advocacy and representation at local, regional, and national levels",
      "Conflict resolution and promotion of social cohesion",
      "Facilitation and coordination of development projects",
    ],
  },
];

const policyInstruments = [
  { icon: FileText, title: "Executive Resolutions", desc: "Binding resolutions from the Okuapehene and Traditional Council guiding specific development actions" },
  { icon: Scale, title: "Government Agreements", desc: "Joint agreements with the national government defining collaborative frameworks for development" },
  { icon: BookOpen, title: "Memoranda of Understanding", desc: "MOUs with stakeholders outlining shared objectives, commitments, and cooperation modalities" },
  { icon: Shield, title: "Partnership Charter", desc: "A charter guiding equitable negotiation, partnership establishment, and mutual benefit" },
];

const majorIssues = [
  "Governance and Leadership",
  "Finance and Administration",
  "Operations and Coordination",
  "Communications, Media and Public Relations",
  "ICT and Technology Deployment",
  "Human Resource, Human Capital and Capacity Building",
  "Website, Social Media and Strong Digital Presence",
];

export default function ChieftaincyPage() {
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
            Institution &amp; Governance
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            The <span className="text-gold">Chieftaincy</span>
          </h1>
          <p className="text-white/60 text-base max-w-3xl mx-auto">
            The institutional framework, governance structures, and transformation
            agenda of the Office of the Okuapehene under the Operational Policy
            and Work Programme 2025–2030.
          </p>
        </div>
      </section>

      <div className="kente-border" />

      {/* Four Pillars of Transformation */}
      <section className="py-20 bg-white">
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
                  className="relative bg-cream rounded-sm p-7 card-hover"
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

      {/* Systems, Structures, Strategies & Services */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Operational Framework
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 gold-underline-center">
              Systems, Structures, Strategies &amp; Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {systems.map((s) => (
              <div key={s.category} className="bg-white rounded-sm p-6">
                <h3 className="font-serif text-lg font-bold text-navy mb-4 pb-3 border-b border-gold/20">
                  {s.category}
                </h3>
                <ul className="space-y-2.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span className="text-xs text-charcoal-light/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Instruments */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-14">
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
                <div key={inst.title} className="bg-cream rounded-sm p-6 card-hover group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-navy mb-2">{inst.title}</h3>
                  <p className="text-xs text-charcoal-light/60 leading-relaxed">{inst.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Major Issues for Consideration */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Annual Programmes
            </span>
            <h2 className="font-serif text-3xl font-bold text-navy mt-3 gold-underline-center">
              Major Issues for Consideration
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {majorIssues.map((issue, i) => (
              <div key={issue} className="flex items-center gap-3 bg-white rounded-sm px-5 py-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-gold text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm text-navy font-medium">{issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-navy text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <blockquote className="font-serif text-2xl text-white/90 leading-relaxed mb-6 italic">
            &ldquo;The Office will be empowered to function at the highest level
            of excellence, comparable to the world&apos;s leading traditional
            institutions — as a dynamic, transformative body driving significant
            socio-economic progress.&rdquo;
          </blockquote>
          <p className="text-gold uppercase tracking-widest text-sm">
            — Operational Policy, Office of the Okuapehene
          </p>
        </div>
      </section>
    </>
  );
}
