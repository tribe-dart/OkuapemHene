import Image from "next/image";
import { GraduationCap, Heart, Building2, Lightbulb, Wifi, Landmark, Target, TrendingUp, CheckCircle } from "lucide-react";
import Link from "next/link";

const focusAreas = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Improve access to quality education at all levels. Support schools across the traditional area with infrastructure upgrades, teacher training, and scholarship programmes for tertiary education.",
    priority: "Policy Priority",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Enhance healthcare infrastructure and services. Establish community health centers, partner with health organisations for free screenings, and expand maternal health and wellness programmes.",
    priority: "Policy Priority",
  },
  {
    icon: Building2,
    title: "Infrastructure",
    description:
      "Develop and maintain critical infrastructure including roads, water, and sanitation. Renovate public facilities and improve connectivity between communities along the Akuapem Ridge.",
    priority: "Policy Priority",
  },
  {
    icon: Lightbulb,
    title: "Economic Development",
    description:
      "Promote entrepreneurship, skills development, and investment. Collaborate with government agencies, NGOs, and the private sector to create economic opportunities and address unemployment.",
    priority: "Policy Priority",
  },
  {
    icon: Landmark,
    title: "Culture & Tourism",
    description:
      "Establish a cultural heritage center to document and preserve Akuapem traditions. Organise festivals, support research on Akuapem history, and collaborate with tourism agencies to promote the area.",
    priority: "Policy Priority",
  },
  {
    icon: Wifi,
    title: "Innovation & Technology",
    description:
      "Establish an innovation hub for technology-driven solutions. Promote digital literacy, support coding bootcamps, and partner with universities to drive innovation in agriculture and healthcare.",
    priority: "Strategic Focus",
  },
];

const phases = [
  {
    icon: Target,
    phase: "Phase 1",
    title: "Foundation & Setup",
    items: [
      "Establish dedicated implementation team",
      "Develop detailed action plans for each focus area",
      "Build internal capacity and staff training",
      "Secure initial funding and resource mobilisation",
      "Launch communication and public engagement campaign",
    ],
  },
  {
    icon: TrendingUp,
    phase: "Phase 2",
    title: "Pilot & Adaptation",
    items: [
      "Implement pilot projects in priority communities",
      "Monitor progress with KPI-based evaluation",
      "Adapt strategies based on data and lessons learned",
      "Strengthen partnerships with government and NGOs",
      "Begin cultural heritage documentation",
    ],
  },
  {
    icon: CheckCircle,
    phase: "Phase 3",
    title: "Scale & Sustain",
    items: [
      "Scale up successful pilot projects across Akuapem",
      "Deepen strategic partnerships at national and international levels",
      "Ensure financial and operational sustainability",
      "Establish the Office as a globally recognized institution",
      "Create lasting legacy for future generations",
    ],
  },
];

const outcomes = [
  { term: "Short-Term", items: ["Improved governance and transparency", "Increased community trust", "Initial investments secured"] },
  { term: "Medium-Term", items: ["Tangible socio-economic progress", "Cultural revitalization and tourism growth", "Enhanced institutional capacity"] },
  { term: "Long-Term", items: ["Sustainable development and prosperity", "Global recognition as a leading institution", "Lasting legacy of progress for Akuapem"] },
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

const majorIssues = [
  "Governance and Leadership",
  "Finance and Administration",
  "Operations and Coordination",
  "Communications, Media and Public Relations",
  "ICT and Technology Deployment",
  "Human Resource, Human Capital and Capacity Building",
  "Website, Social Media and Strong Digital Presence",
];

export default function DevelopmentPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <Image
          src="/Images/Discussion.png"
          alt="Youth of the Akuapem Traditional Area"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/70 to-navy" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
            Work Programme 2025–2030
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            Development &amp; <span className="text-gold">Transformation</span>
          </h1>
          <p className="text-white/60 text-base max-w-3xl mx-auto">
            The Operational Policy and Work Programme translates His Royal
            Majesty&apos;s vision into actionable strategies and tangible outcomes —
            prioritizing education, healthcare, infrastructure, economic development,
            cultural heritage, and innovation.
          </p>
        </div>
      </section>

      <div className="kente-border" />

      {/* Policy Focus Areas */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Policy Areas &amp; Priorities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 gold-underline-center">
              Key Focus Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="bg-cream rounded-sm p-7 card-hover group relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-2.5 py-1 bg-gold/10 text-gold text-[10px] uppercase tracking-wider rounded-sm font-medium">
                      {area.priority}
                    </span>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold mb-5 group-hover:bg-gold group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-navy mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-charcoal-light/70 leading-relaxed">
                    {area.description}
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

      {/* Implementation Phases */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Roll-Out &amp; Implementation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 gold-underline-center">
              Phased Implementation Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.phase} className="bg-cream rounded-sm p-7 card-hover">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-gold text-xs uppercase tracking-wider font-medium">{p.phase}</p>
                      <h3 className="font-serif text-lg font-bold text-navy">{p.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                        <span className="text-sm text-charcoal-light/70 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-charcoal-light/60 max-w-2xl mx-auto">
              <strong className="text-navy">Key Principles:</strong> Participatory
              approach, data-driven decision making, adaptive management,
              transparency and accountability.
            </p>
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

      {/* Expected Outcomes */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Expected Results
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 gold-underline-center">
              Outcomes &amp; Policy Impacts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((o) => (
              <div key={o.term} className="bg-cream rounded-sm p-7">
                <h3 className="font-serif text-xl font-bold text-navy mb-4 pb-3 border-b border-gold/20">
                  {o.term}
                </h3>
                <ul className="space-y-3">
                  {o.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
                      <span className="text-sm text-charcoal-light/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
            Partner With <span className="text-gold">Akuapem</span>
          </h2>
          <p className="text-white/60 text-base mb-8 leading-relaxed">
            The successful implementation of this Work Programme requires
            collaboration with government agencies, NGOs, the private sector,
            diaspora communities, and international institutions. Your partnership
            can help drive transformation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-14 px-10 bg-gold text-white font-medium rounded-sm tracking-wider uppercase text-sm hover:bg-gold-dark transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
