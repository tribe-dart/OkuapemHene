import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const news = [
  {
    date: "February 15, 2026",
    category: "Royal Event",
    title: "Okuapemhene Hosts Annual Odwira Festival Planning Committee",
    excerpt:
      "Traditional council convenes to plan the upcoming Odwira festival celebrations, bringing together chiefs and community leaders.",
    color: "bg-kente-red",
  },
  {
    date: "February 8, 2026",
    category: "Development",
    title: "New Community Health Center Inaugurated in Akropong",
    excerpt:
      "The Okuapemhene inaugurates a state-of-the-art health facility, improving healthcare access for thousands of residents.",
    color: "bg-kente-green",
  },
  {
    date: "January 28, 2026",
    category: "Education",
    title: "Okuapemhene Scholarship Fund Awards 50 Students",
    excerpt:
      "Fifty outstanding students from the Okuapeman Traditional Area receive scholarships for tertiary education.",
    color: "bg-gold-dark",
  },
  {
    date: "January 15, 2026",
    category: "Culture",
    title: "Cultural Heritage Museum Project Receives Government Support",
    excerpt:
      "Plans for a cultural heritage museum in Akropong gain momentum with support from the Ministry of Tourism and Culture.",
    color: "bg-navy",
  },
];

export default function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
          <div>
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Stay Informed
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 gold-underline">
              Latest News &amp; Events
            </h2>
          </div>
          <Link
            href="/news"
            className="mt-6 sm:mt-0 inline-flex items-center gap-2 text-gold font-medium uppercase text-sm tracking-wider hover:gap-3 transition-all"
          >
            View All News
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {news.map((item) => (
            <article
              key={item.title}
              className="group rounded-sm overflow-hidden bg-cream card-hover"
            >
              <div className="relative h-40 bg-gradient-to-br from-navy to-charcoal flex items-end p-4">
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
  );
}
