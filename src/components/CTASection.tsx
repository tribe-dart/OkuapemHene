import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-charcoal overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold/5 translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
          Get Involved
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
          Be Part of <span className="text-gold">Akuapem&apos;s Transformation</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you are a citizen of the Akuapem Traditional Area, a member
          of the diaspora, or an organisation looking to partner — there are
          many ways to connect with and support the Office of the Okuapehene in
          its mission to drive sustainable development.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-14 px-10 bg-gold text-white font-medium rounded-sm tracking-wider uppercase text-sm hover:bg-gold-dark transition-colors"
          >
            Contact the Office
          </Link>
          <Link
            href="/development"
            className="inline-flex items-center justify-center h-14 px-10 border border-white/20 text-white font-medium rounded-sm tracking-wider uppercase text-sm hover:bg-white/10 transition-colors"
          >
            View Work Programme
          </Link>
        </div>
      </div>
    </section>
  );
}
