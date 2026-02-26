import Image from "next/image";
import {
  Crown,
  Landmark,
  Users,
  Music,
  Sparkles,
  TreePine,
} from "lucide-react";

const galleries = [
  {
    icon: Crown,
    title: "Royal Ceremonies",
    description:
      "Enstoolment, durbars, and sacred ceremonies of the Okuapemhene",
    count: "24 items",
    image: "/Images/king.png",
  },
  {
    icon: Sparkles,
    title: "Odwira Festival",
    description:
      "Annual celebration of purification, harvest, and thanksgiving",
    count: "36 items",
    image: "/Images/New Img.png",
  },
  {
    icon: Landmark,
    title: "The Palace & Akropong",
    description:
      "Historic sites, architecture, and landmarks of the royal capital",
    count: "18 items",
    image: "/Images/4444 1.png",
  },
  {
    icon: Users,
    title: "Community Events",
    description:
      "Community gatherings, development projects, and civic activities",
    count: "30 items",
    image: "/Images/group.png",
  },
  {
    icon: Music,
    title: "Cultural Arts",
    description:
      "Traditional music, dance, kente weaving, and artistic heritage",
    count: "22 items",
    image: "/Images/Discussion.png",
  },
  {
    icon: TreePine,
    title: "The Akuapem Ridge",
    description:
      "Natural beauty and landscapes of the Akuapem Traditional Area",
    count: "15 items",
    image: "/Images/People.png",
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <Image
          src="/Images/Heritage.png"
          alt="Akuapem cultural gathering"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/70 to-navy" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 text-center">
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
            Visual Heritage
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            Photo <span className="text-gold">Gallery</span>
          </h1>
          <p className="text-white/60 text-base max-w-2xl mx-auto">
            A visual journey through the rich culture, heritage, and community
            life of the Akuapem Traditional Area.
          </p>
        </div>
      </section>

      <div className="kente-border" />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Collections
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 gold-underline-center">
              Browse by Category
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {galleries.map((gallery) => {
              const Icon = gallery.icon;
              return (
                <div
                  key={gallery.title}
                  className="group relative rounded-sm overflow-hidden card-hover cursor-pointer"
                >
                  <div className="h-64 relative flex items-center justify-center overflow-hidden">
                    <Image
                      src={gallery.image}
                      alt={gallery.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors duration-300" />
                    <Icon className="relative z-10 h-16 w-16 text-white/60 group-hover:text-gold/80 transition-colors duration-300" />
                  </div>

                  <div className="bg-cream p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-xl font-bold text-navy group-hover:text-gold transition-colors">
                        {gallery.title}
                      </h3>
                      <span className="text-xs text-gold font-medium">
                        {gallery.count}
                      </span>
                    </div>
                    <p className="text-sm text-charcoal-light/60">
                      {gallery.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured photos grid */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Highlights
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 gold-underline-center">
              Featured Photos
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                src: "/Images/Hero.png",
                alt: "His Royal Majesty in kente cloth",
                span: "col-span-2 row-span-2",
              },
              {
                src: "/Images/Queen.png",
                alt: "The Queen Mother of Akuapem",
                span: "",
              },
              {
                src: "/Images/News.png",
                alt: "Akuapem Odwira Festival",
                span: "",
              },
              {
                src: "/Images/group.png",
                alt: "Community gathering",
                span: "col-span-2",
              },
              {
                src: "/Images/Heritage.png",
                alt: "Traditional court proceedings",
                span: "col-span-2",
              },
            ].map((photo) => (
              <div
                key={photo.src}
                className={`relative rounded-sm overflow-hidden group ${photo.span} ${
                  photo.span.includes("row-span-2")
                    ? "min-h-[400px]"
                    : "min-h-[200px]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
