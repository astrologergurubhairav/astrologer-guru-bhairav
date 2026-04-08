/*
 * DESIGN: Celestial Luxury — Services Page
 * Full services grid with images, icons, descriptions
 * Colors: #1A0F00 (dark), #FF6B00 (saffron), #FFB800 (gold), #FFF8EE (cream)
 */
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663518200634/37Hv2EvD9fWcyUeSg4qhCB/hero-bg-dgzFTcFKNDMugLU2cfcuuB.webp";
const PALM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663518200634/37Hv2EvD9fWcyUeSg4qhCB/palm-reading-hsEdWzsodFoBK6BCozY9KS.webp";
const LOVE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663518200634/37Hv2EvD9fWcyUeSg4qhCB/love-solution-dUnNwmPs6VYaRSwsqymtuQ.webp";
const MAGIC_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663518200634/37Hv2EvD9fWcyUeSg4qhCB/black-magic-removal-U45Ft7rtPHPTBrwz8Pxdfb.webp";

// Unsplash images for additional services
const PSYCHIC_IMG = "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80";
const MARRIAGE_IMG = "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&q=80";
const FAMILY_IMG = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80";
const BUSINESS_IMG = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80";
const ENERGY_IMG = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80";
const SPIRIT_IMG = "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80";
const HUSBAND_IMG = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80";
const RELATIONSHIP_IMG = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80";

const services = [
  {
    icon: "🖐",
    title: "Palm Reading",
    subtitle: "Palmistry & Chiromancy",
    desc: "Your hands hold the map of your life. Through the ancient art of palmistry, Guru Bhairav reads the lines, mounts, and shapes of your palms to reveal your past experiences, present circumstances, and future possibilities. Gain clarity on your life path, health, love life, and career prospects.",
    img: PALM_IMG,
    features: ["Life line analysis", "Love & heart line reading", "Career & fate line", "Health indicators"],
  },
  {
    icon: "🔮",
    title: "Psychic Reading",
    subtitle: "Clairvoyance & Intuitive Guidance",
    desc: "Guru Bhairav's extraordinary psychic abilities allow him to perceive information beyond the physical senses. Through deep meditation and spiritual connection, he tunes into your energy field to provide accurate insights about your life, relationships, and future — without you having to share any details.",
    img: PSYCHIC_IMG,
    features: ["Energy field reading", "Past life insights", "Future predictions", "Spirit communication"],
  },
  {
    icon: "❤️",
    title: "Love Problem Solution",
    subtitle: "Reunite & Attract Love",
    desc: "Whether you've lost a loved one, are struggling to attract love, or are facing obstacles in your romantic life, Guru Bhairav has powerful Vedic remedies to help. His love problem solutions have reunited thousands of couples and helped many find their soulmates.",
    img: LOVE_IMG,
    features: ["Lost love return", "Attraction spells removed", "Love compatibility", "Relationship strengthening"],
  },
  {
    icon: "💑",
    title: "Relationship Problem Solution",
    subtitle: "Harmony & Understanding",
    desc: "Relationship conflicts, misunderstandings, and emotional distance can destroy even the strongest bonds. Guru Bhairav identifies the root causes — whether karmic, astrological, or spiritual — and provides targeted remedies to restore harmony, trust, and deep connection.",
    img: RELATIONSHIP_IMG,
    features: ["Conflict resolution", "Trust rebuilding", "Communication healing", "Karmic clearing"],
  },
  {
    icon: "💍",
    title: "Marriage Problem Solution",
    subtitle: "Saving & Strengthening Marriages",
    desc: "Marriage is a sacred union, but it can face severe challenges. From delayed marriages and compatibility issues to divorce threats and infidelity, Guru Bhairav's powerful spiritual interventions have saved countless marriages and brought couples back together in love and respect.",
    img: MARRIAGE_IMG,
    features: ["Delayed marriage solutions", "Compatibility analysis", "Divorce prevention", "Marriage strengthening"],
  },
  {
    icon: "👫",
    title: "Husband & Wife Problem",
    subtitle: "Restoring Marital Harmony",
    desc: "Disagreements, lack of intimacy, outside interference, and communication breakdowns can erode a marriage. Guru Bhairav uses Vedic astrology and spiritual remedies to identify and remove the obstacles causing discord between spouses, restoring love, respect, and harmony.",
    img: HUSBAND_IMG,
    features: ["Marital discord healing", "Intimacy restoration", "Outside interference removal", "Communication improvement"],
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Problem Solution",
    subtitle: "Peace & Unity in the Home",
    desc: "Family conflicts, generational disputes, property issues, and sibling rivalries can tear families apart. Guru Bhairav's family problem solutions address the underlying spiritual and astrological causes, bringing peace, unity, and mutual understanding back to your household.",
    img: FAMILY_IMG,
    features: ["Family conflict resolution", "Parent-child harmony", "Sibling disputes", "Property & inheritance issues"],
  },
  {
    icon: "💼",
    title: "Job & Business Problem Solution",
    subtitle: "Career & Financial Prosperity",
    desc: "Struggling with career stagnation, business losses, or financial difficulties? Guru Bhairav analyzes your birth chart and business horoscope to identify planetary obstacles and provides powerful remedies to remove career blockages, attract opportunities, and ensure business success.",
    img: BUSINESS_IMG,
    features: ["Career advancement", "Business growth remedies", "Financial blockage removal", "Job promotion solutions"],
  },
  {
    icon: "🛡️",
    title: "Black Magic Removal",
    subtitle: "Protection & Cleansing",
    desc: "Black magic and dark spiritual attacks can cause unexplained illness, financial ruin, relationship destruction, and mental anguish. Guru Bhairav is a specialist in identifying and permanently removing all forms of black magic, hexes, and dark spells, restoring your life to its natural positive flow.",
    img: MAGIC_IMG,
    features: ["Black magic detection", "Hex & curse removal", "Permanent protection", "Spiritual cleansing rituals"],
  },
  {
    icon: "✨",
    title: "Negative Energy Removal",
    subtitle: "Aura Cleansing & Protection",
    desc: "Negative energies can accumulate from toxic environments, jealous people, or spiritual attacks, causing persistent bad luck, depression, and obstacles. Guru Bhairav performs powerful aura cleansing and energy protection rituals to clear your energy field and create a protective shield.",
    img: ENERGY_IMG,
    features: ["Aura cleansing", "Energy field purification", "Protective shield creation", "Chakra balancing"],
  },
  {
    icon: "👻",
    title: "Evil Spirits Removal",
    subtitle: "Spiritual Exorcism & Protection",
    desc: "Haunting, possession, and evil spirit attachments are real spiritual phenomena that require expert intervention. Guru Bhairav has decades of experience in safely and permanently removing evil spirits and entities from people, homes, and businesses, restoring peace and safety.",
    img: SPIRIT_IMG,
    features: ["Spirit identification", "Safe entity removal", "Home cleansing", "Ongoing protection"],
  },
  {
    icon: "⭐",
    title: "Vedic Astrology Reading",
    subtitle: "Birth Chart & Life Guidance",
    desc: "A comprehensive Vedic astrology reading analyzes your birth chart (kundali) to reveal your life's blueprint — your strengths, challenges, karmic lessons, and destiny. Guru Bhairav provides detailed insights and practical remedies for all life areas including health, wealth, love, and spirituality.",
    img: HERO_BG,
    features: ["Full birth chart analysis", "Planetary period forecasts", "Gemstone recommendations", "Yantra & mantra remedies"],
  },
];

function useIntersectionObserver(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useIntersectionObserver();
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* ── PAGE HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="absolute inset-0 bg-[#1A0F00]/85" />
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFB800]/10 border border-[#FFB800]/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#FFB800] text-xs font-cinzel tracking-widest uppercase">Spiritual Services</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-4">
            Sacred Services for <span className="text-gradient-gold">Every Challenge</span>
          </h1>
          <p className="font-body text-[#FFF8EE]/70 text-lg max-w-2xl mx-auto">
            From love and relationships to career, family, and spiritual protection — Guru Bhairav offers comprehensive spiritual solutions rooted in 25+ years of Vedic wisdom.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="section-cream py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title}>
                <div
                  className="service-card h-full flex flex-col"
                  style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F00]/70 to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#1A0F00]/80 backdrop-blur-sm border border-[#FFB800]/30 rounded px-2 py-1">
                      <span className="font-cinzel text-[#FFB800] text-[10px] tracking-widest uppercase">{service.subtitle}</span>
                    </div>
                    <div className="absolute bottom-3 right-3 text-2xl">{service.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-xl text-[#1A0F00] font-bold mb-2">{service.title}</h3>
                    <p className="font-body text-[#1A0F00]/60 text-sm leading-relaxed mb-4 flex-1">{service.desc}</p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-1.5 mb-5">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] shrink-0" />
                          <span className="font-body text-[#1A0F00]/60 text-xs">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={`https://wa.me/5926804996?text=Hello%20Guru%20Bhairav%2C%20I%20need%20help%20with%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm py-2.5 justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Get Help Now
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 font-cinzel text-[#FFB800] text-[300px] flex items-center justify-center">✦</div>
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl text-[#FFF8EE] font-bold mb-4">
              Don't See Your Problem? <span className="text-gradient-gold">Contact Us</span>
            </h2>
            <p className="font-body text-[#FFF8EE]/70 max-w-xl mx-auto mb-8">
              Guru Bhairav handles all types of spiritual, personal, and life challenges. Reach out and describe your situation for a personalized solution.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/5926804996"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Chat on WhatsApp
              </a>
              <Link href="/contact">
                <span className="btn-outline-gold">Send a Message <ChevronRight size={16} /></span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
