import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Palace Location",
    details: ["Okuapemhene's Palace", "Akropong-Akuapem", "Eastern Region, Ghana"],
  },
  {
    icon: Phone,
    title: "Telephone",
    details: ["+233 XX XXX XXXX", "+233 YY YYY YYYY"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@okuapemhene.gov.gh", "palace@okuapemhene.gov.gh"],
  },
  {
    icon: Clock,
    title: "Palace Hours",
    details: ["Monday – Friday: 8:00 AM – 4:00 PM", "Saturday: By Appointment", "Sunday: Closed"],
  },
];

export default function ContactPage() {
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
            Reach Out
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mt-3 mb-6">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Get in touch with the Office of the Okuapemhene. We welcome inquiries,
            requests for audience, and partnership opportunities.
          </p>
        </div>
      </section>

      <div className="kente-border" />

      {/* Contact content */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                Get in Touch
              </span>
              <h2 className="font-serif text-4xl font-bold text-navy mt-3 mb-6 gold-underline">
                Palace Contact Information
              </h2>
              <p className="text-charcoal-light/80 leading-relaxed mb-10">
                The Office of the Okuapemhene welcomes respectful communication
                from citizens, organisations, and visitors. For formal requests
                or requests for audience with the Okuapemhene, please write to us
                or visit during palace hours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="bg-cream rounded-sm p-6"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-navy mb-2">
                        {item.title}
                      </h3>
                      {item.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-sm text-charcoal-light/60"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-cream rounded-sm p-8 sm:p-10">
              <h3 className="font-serif text-2xl font-bold text-navy mb-6">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-navy mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full h-12 px-4 rounded-sm border border-navy/10 bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-navy mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full h-12 px-4 rounded-sm border border-navy/10 bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full h-12 px-4 rounded-sm border border-navy/10 bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full h-12 px-4 rounded-sm border border-navy/10 bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="audience">Request for Audience</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="media">Media / Press Inquiry</option>
                    <option value="development">Development Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-sm border border-navy/10 bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors resize-none"
                    placeholder="Please describe your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-14 bg-gold text-white font-medium rounded-sm tracking-wider uppercase text-sm hover:bg-gold-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="rounded-sm overflow-hidden bg-navy/5 h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gold/40 mx-auto mb-4" />
              <p className="font-serif text-xl text-navy/60">
                Akropong-Akuapem, Eastern Region
              </p>
              <p className="text-sm text-charcoal-light/40 mt-2">
                Interactive map coming soon
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
