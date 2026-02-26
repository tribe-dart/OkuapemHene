import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

const news = [
  {
    date: "February 2026",
    category: "Policy",
    title:
      "Ofori Kuma Trust Launches 2025–2030 Operational Policy and Work Programme",
    excerpt:
      "His Royal Majesty unveils a comprehensive framework to transform the Office into a world-class institution driving development across the Akuapem Traditional Area.",
    color: "bg-kente-red",
    image: "/Images/hene.png",
  },
  {
    date: "January 2026",
    category: "Development",
    title: "Innovation Hub Planned to Foster Technology-Driven Solutions",
    excerpt:
      "Plans announced for an innovation hub to support digital literacy, tech entrepreneurship, and locally-driven solutions to community challenges.",
    color: "bg-kente-green",
    image: "/Images/group.png",
  },
  {
    date: "January 2026",
    category: "Culture",
    title: "Cultural Heritage Center to Preserve Akuapem Traditions",
    excerpt:
      "A new cultural heritage center will document, preserve, and promote Akuapem customs, artifacts, and history for future generations.",
    color: "bg-gold-dark",
    image: "/Images/News.png",
  },
  {
    date: "December 2025",
    category: "Governance",
    title: "Office Restructuring Begins Under New Governance Framework",
    excerpt:
      "Comprehensive reforms introduce modern financial management, streamlined administration, and clear organizational structures.",
    color: "bg-navy",
    image: "/Images/Discussion.png",
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
              Latest News &amp; Announcements
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
              <div className="relative h-40 flex items-end p-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
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
