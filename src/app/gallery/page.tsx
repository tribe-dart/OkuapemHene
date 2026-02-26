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
      "Enstoolment, durbars, and sacred ceremonies of the Okuapehene",
    count: "24 items",
    gradient: "from-gold-dark to-gold",
  },
  {
    icon: Sparkles,
    title: "Odwira Festival",
    description:
      "Annual celebration of purification, harvest, and thanksgiving",
    count: "36 items",
    gradient: "from-kente-red to-kente-red/80",
  },
  {
    icon: Landmark,
    title: "The Palace & Akropong",
    description:
      "Historic sites, architecture, and landmarks of the royal capital",
    count: "18 items",
    gradient: "from-navy to-navy-light",
  },
  {
    icon: Users,
    title: "Community Events",
    description:
      "Community gatherings, development projects, and civic activities",
    count: "30 items",
    gradient: "from-kente-green to-kente-green/80",
  },
  {
    icon: Music,
    title: "Cultural Arts",
    description:
      "Traditional music, dance, kente weaving, and artistic heritage",
    count: "22 items",
    gradient: "from-charcoal to-charcoal-light",
  },
  {
    icon: TreePine,
    title: "The Akuapem Ridge",
    description:
      "Natural beauty and landscapes of the Akuapem Traditional Area",
    count: "15 items",
    gradient: "from-kente-green/90 to-navy",
  },
];

export default function GalleryPage() {
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

      {/* Gallery categories */}
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
                  <div
                    className={`h-64 bg-gradient-to-br ${gallery.gradient} flex items-center justify-center relative`}
                  >
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="h-full w-full"
                        style={{
                          backgroundImage: `repeating-linear-gradient(
                            0deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px
                          ),
                          repeating-linear-gradient(
                            90deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px
                          )`,
                        }}
                      />
                    </div>
                    <Icon className="h-20 w-20 text-white/30 group-hover:scale-110 transition-transform duration-300" />
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

      {/* Placeholder banner */}
      <section className="py-20 bg-cream text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            Full Gallery Coming Soon
          </h2>
          <p className="text-charcoal-light/60 leading-relaxed">
            We are curating a comprehensive visual archive of the Akuapem
            Traditional Area&apos;s rich heritage. High-resolution photographs
            from ceremonies, festivals, and community events will be available
            soon.
          </p>
        </div>
      </section>
    </>
  );
}
