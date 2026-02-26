import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const allNews = [
  {
    date: "February 15, 2026",
    category: "Royal Event",
    title: "Okuapemhene Hosts Annual Odwira Festival Planning Committee",
    excerpt:
      "The Traditional Council convened under the Okuapemhene to plan the upcoming Odwira festival celebrations, bringing together divisional chiefs and community leaders to coordinate activities that will showcase the rich cultural heritage of Okuapeman.",
    color: "bg-kente-red",
    featured: true,
  },
  {
    date: "February 8, 2026",
    category: "Development",
    title: "New Community Health Center Inaugurated in Akropong",
    excerpt:
      "The Okuapemhene inaugurated a state-of-the-art community health facility in Akropong, significantly improving healthcare access for thousands of residents in the traditional area.",
    color: "bg-kente-green",
    featured: true,
  },
  {
    date: "January 28, 2026",
    category: "Education",
    title: "Okuapemhene Scholarship Fund Awards 50 Students",
    excerpt:
      "Fifty outstanding students from the Okuapeman Traditional Area received scholarships for tertiary education at a ceremony presided over by the Okuapemhene at the Palace.",
    color: "bg-gold-dark",
    featured: false,
  },
  {
    date: "January 15, 2026",
    category: "Culture",
    title: "Cultural Heritage Museum Project Receives Government Support",
    excerpt:
      "Plans for a comprehensive cultural heritage museum in Akropong gained significant momentum with a commitment of support from the Ministry of Tourism, Arts and Culture.",
    color: "bg-navy",
    featured: false,
  },
  {
    date: "January 5, 2026",
    category: "Community",
    title: "Palace Launches Clean Water Initiative for Rural Communities",
    excerpt:
      "The Okuapemhene announced a new initiative to provide clean drinking water to underserved communities across the traditional area through borehole construction.",
    color: "bg-kente-green",
    featured: false,
  },
  {
    date: "December 20, 2025",
    category: "Royal Event",
    title: "End-of-Year Durbar Brings Together Chiefs and Citizens",
    excerpt:
      "The annual end-of-year durbar at the Okuapemhene's palace brought together divisional chiefs, community leaders, and citizens for a celebration of unity and review of the year's achievements.",
    color: "bg-kente-red",
    featured: false,
  },
  {
    date: "December 10, 2025",
    category: "Development",
    title: "Youth ICT Training Hub Opens in Mampong",
    excerpt:
      "A new ICT training center opened in Mampong to equip young people with digital skills, supported by the Okuapemhene's digital empowerment initiative.",
    color: "bg-kente-green",
    featured: false,
  },
  {
    date: "November 28, 2025",
    category: "Education",
    title: "Okuapemhene Commissions Renovated School Block",
    excerpt:
      "The Palace funded the renovation of a primary school block in Amanokrom, providing modern learning facilities for over 300 pupils.",
    color: "bg-gold-dark",
    featured: false,
  },
];

export default function NewsPage() {
  const featured = allNews.filter((n) => n.featured);
  const regular = allNews.filter((n) => !n.featured);

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
            Stay Updated
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mt-3 mb-6">
            News &amp; <span className="text-gold">Events</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            The latest news, events, and announcements from the Okuapemhene&apos;s
            Palace and the Okuapeman Traditional Area.
          </p>
        </div>
      </section>

      <div className="kente-border" />

      {/* Featured news */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy mb-10 gold-underline">
            Featured Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {featured.map((item) => (
              <article
                key={item.title}
                className="group bg-cream rounded-sm overflow-hidden card-hover"
              >
                <div className="h-56 bg-gradient-to-br from-navy to-charcoal relative flex items-end p-8">
                  <div className="news-overlay absolute inset-0" />
                  <div className="relative z-10">
                    <span
                      className={`inline-block px-3 py-1 ${item.color} text-white text-xs uppercase tracking-wider rounded-sm mb-3`}
                    >
                      {item.category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-xs text-charcoal-light/50 mb-4">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </div>
                  <p className="text-charcoal-light/70 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Regular news */}
          <h2 className="font-serif text-3xl font-bold text-navy mb-10 gold-underline">
            All News
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {regular.map((item) => (
              <article
                key={item.title}
                className="group bg-cream rounded-sm overflow-hidden card-hover"
              >
                <div className="h-40 bg-gradient-to-br from-navy to-charcoal relative flex items-end p-5">
                  <div className="news-overlay absolute inset-0" />
                  <div className="relative z-10">
                    <span
                      className={`inline-block px-2.5 py-1 ${item.color} text-white text-xs uppercase tracking-wider rounded-sm`}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-charcoal-light/50 mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy mb-2 leading-snug group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal-light/60 leading-relaxed line-clamp-3">
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
