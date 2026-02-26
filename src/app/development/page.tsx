import { Heart, GraduationCap, Building2, Leaf, Wifi, Droplets } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    icon: GraduationCap,
    title: "Education & Scholarships",
    description:
      "The Okuapemhene Scholarship Fund provides financial support to hundreds of students pursuing tertiary education. The Palace also partners with schools across the traditional area to improve educational infrastructure and teacher training.",
    stats: "500+ scholarships awarded",
    status: "Ongoing",
  },
  {
    icon: Heart,
    title: "Healthcare Initiatives",
    description:
      "Community health centers and mobile clinics have been established across the Okuapeman area. The Palace partners with health organizations to provide free medical screenings, maternal health services, and health education programs.",
    stats: "3 health centers built",
    status: "Active",
  },
  {
    icon: Building2,
    title: "Infrastructure Development",
    description:
      "Road construction, market renovations, and public facility upgrades across the traditional area. Key projects include the rehabilitation of access roads connecting rural communities to major towns along the Ridge.",
    stats: "15+ km of roads improved",
    status: "In Progress",
  },
  {
    icon: Droplets,
    title: "Water & Sanitation",
    description:
      "Clean water boreholes and sanitation facilities have been constructed in underserved communities. The Palace advocates for improved water infrastructure and partners with NGOs on WASH programs.",
    stats: "8 boreholes constructed",
    status: "Active",
  },
  {
    icon: Leaf,
    title: "Environmental Conservation",
    description:
      "Tree planting initiatives, protection of sacred groves, and environmental education programs. The Okuapemhene has championed the preservation of the Akuapem Ridge's unique biodiversity and natural beauty.",
    stats: "10,000+ trees planted",
    status: "Ongoing",
  },
  {
    icon: Wifi,
    title: "Digital Empowerment",
    description:
      "ICT training centers, digital literacy programs, and youth tech hubs are being developed to prepare the next generation for the digital economy. The Palace supports coding bootcamps and tech entrepreneurship.",
    stats: "200+ youth trained",
    status: "Growing",
  },
];

export default function DevelopmentPage() {
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
            For The People
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mt-3 mb-6">
            Community <span className="text-gold">Development</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            The Okuapemhene&apos;s commitment to improving lives and building a
            prosperous future for the people of Okuapeman.
          </p>
        </div>
      </section>

      <div className="kente-border" />

      {/* Projects grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Initiatives
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy mt-3 gold-underline-center">
              Key Development Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="bg-cream rounded-sm p-8 card-hover group relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs uppercase tracking-wider rounded-sm font-medium">
                      {project.status}
                    </span>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-navy mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-charcoal-light/70 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-gold/10">
                    <p className="text-gold font-semibold text-sm">
                      {project.stats}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Support <span className="text-gold">Development</span>
          </h2>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            The work of development requires the collective effort of all
            Okuapeman citizens, diaspora communities, and partners. Your support
            can make a meaningful difference.
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
