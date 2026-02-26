import { Calendar } from "lucide-react";

const allNews = [
  {
    date: "February 2026",
    category: "Policy",
    title: "Office of the Okuapehene Launches 2025–2030 Operational Policy",
    excerpt:
      "His Royal Majesty Oseadeeyo Kwasi Akuffo III unveils a comprehensive Operational Policy and Work Programme to transform the Office into a world-class institution. The framework outlines strategies for institutional strengthening, socio-economic development, cultural preservation, and innovation.",
    color: "bg-kente-red",
    featured: true,
  },
  {
    date: "January 2026",
    category: "Innovation",
    title: "Innovation Hub Planned to Drive Technology Solutions in Akuapem",
    excerpt:
      "The Office announces plans to establish an innovation hub to foster creativity, support digital literacy, and develop technology-driven solutions to local challenges. The hub will partner with research institutions and universities.",
    color: "bg-kente-green",
    featured: true,
  },
  {
    date: "January 2026",
    category: "Culture",
    title: "Cultural Heritage Center to Document Akuapem Traditions",
    excerpt:
      "A new cultural heritage center will be established to document, preserve, and promote Akuapem customs, artifacts, and historical records. The center will also support research and educational programmes.",
    color: "bg-gold-dark",
    featured: false,
  },
  {
    date: "December 2025",
    category: "Governance",
    title: "Office Restructuring Begins Under New Governance Framework",
    excerpt:
      "Comprehensive governance reforms begin with the implementation of modern financial management systems, clear organizational structures, and enhanced communication channels across the Office.",
    color: "bg-navy",
    featured: false,
  },
  {
    date: "December 2025",
    category: "Development",
    title: "Strategic Partnerships Sought for Akuapem Development Projects",
    excerpt:
      "The Office of the Okuapehene initiates conversations with government agencies, NGOs, and private sector organisations to establish Memoranda of Understanding for priority development projects.",
    color: "bg-kente-green",
    featured: false,
  },
  {
    date: "November 2025",
    category: "Education",
    title: "Capacity Building Programmes Launched for Office Staff",
    excerpt:
      "The Office invests in training and development for staff, focusing on modern governance practices, project management, communication skills, and technology deployment.",
    color: "bg-gold-dark",
    featured: false,
  },
  {
    date: "November 2025",
    category: "Community",
    title: "Community Engagement Forums Held Across Akuapem Towns",
    excerpt:
      "A series of community forums are held in towns along the Akuapem Ridge to gather input from citizens on development priorities and ensure the Work Programme reflects the needs of the people.",
    color: "bg-kente-red",
    featured: false,
  },
  {
    date: "October 2025",
    category: "Policy",
    title: "Comparative Study of Global Traditional Institutions Completed",
    excerpt:
      "Research examining successful models from the offices of the Ruler of Dubai, the Emir of Qatar, and the King of Saudi Arabia is completed to benchmark best practices for the Office's transformation.",
    color: "bg-navy",
    featured: false,
  },
];

export default function NewsPage() {
  const featured = allNews.filter((n) => n.featured);
  const regular = allNews.filter((n) => !n.featured);

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
            Stay Updated
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            News &amp; <span className="text-gold">Announcements</span>
          </h1>
          <p className="text-white/60 text-base max-w-2xl mx-auto">
            The latest news, policy updates, and announcements from the Office of
            the Okuapehene and the Akuapem Traditional Area.
          </p>
        </div>
      </section>

      <div className="kente-border" />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-bold text-navy mb-8 gold-underline">
            Featured Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {featured.map((item) => (
              <article
                key={item.title}
                className="group bg-cream rounded-sm overflow-hidden card-hover"
              >
                <div className="h-48 bg-gradient-to-br from-navy to-charcoal relative flex items-end p-7">
                  <div className="news-overlay absolute inset-0" />
                  <div className="relative z-10">
                    <span
                      className={`inline-block px-3 py-1 ${item.color} text-white text-xs uppercase tracking-wider rounded-sm mb-3`}
                    >
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 text-xs text-charcoal-light/50 mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </div>
                  <p className="text-sm text-charcoal-light/70 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <h2 className="font-serif text-2xl font-bold text-navy mb-8 gold-underline">
            All News
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {regular.map((item) => (
              <article
                key={item.title}
                className="group bg-cream rounded-sm overflow-hidden card-hover"
              >
                <div className="h-36 bg-gradient-to-br from-navy to-charcoal relative flex items-end p-4">
                  <div className="news-overlay absolute inset-0" />
                  <div className="relative z-10">
                    <span
                      className={`inline-block px-2 py-0.5 ${item.color} text-white text-[10px] uppercase tracking-wider rounded-sm`}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-[11px] text-charcoal-light/50 mb-2">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </div>
                  <h3 className="font-serif text-sm font-bold text-navy mb-1.5 leading-snug group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-light/60 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
