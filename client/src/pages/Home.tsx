/*
 * DESIGN: Celestial Luxury — Home Page
 * Hero: Full-bleed dark with AI-generated guru image, gold text
 * Sections: Stats, Services preview, About teaser, Testimonials, CTA
 * Colors: #1A0F00 (dark), #FF6B00 (saffron), #FFB800 (gold), #FFF8EE (cream)
 */
import { Link } from "wouter";
import { Star, ChevronRight, Phone, CheckCircle, Users, Award, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Testimonials from "@/components/Testimonials";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663518200634/37Hv2EvD9fWcyUeSg4qhCB/hero-bg-dgzFTcFKNDMugLU2cfcuuB.webp";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663518200634/37Hv2EvD9fWcyUeSg4qhCB/about-image-mvx4aKidPS5iGY7DXb9Xwk.webp";
const PALM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663518200634/37Hv2EvD9fWcyUeSg4qhCB/palm-reading-hsEdWzsodFoBK6BCozY9KS.webp";
const LOVE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663518200634/37Hv2EvD9fWcyUeSg4qhCB/love-solution-dUnNwmPs6VYaRSwsqymtuQ.webp";
const MAGIC_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663518200634/37Hv2EvD9fWcyUeSg4qhCB/black-magic-removal-U45Ft7rtPHPTBrwz8Pxdfb.webp";

const featuredServices = [
  {
    title: "Palm Reading",
    desc: "Discover the secrets written in the lines of your hand. Guru Bhairav reads your past, present, and future through the ancient art of palmistry.",
    img: PALM_IMG,
    icon: "🖐",
  },
  {
    title: "Love & Relationship",
    desc: "Struggling with love or relationship issues? Get powerful spiritual solutions to reunite lost love, resolve conflicts, and attract your soulmate.",
    img: LOVE_IMG,
    icon: "❤️",
  },
  {
    title: "Black Magic Removal",
    desc: "Protect yourself and your family from dark forces. Guru Bhairav specializes in removing black magic, evil spirits, and negative energies.",
    img: MAGIC_IMG,
    icon: "🔥",
  },
];

const stats = [
  { value: "25+", label: "Years Experience", icon: <Award size={20} className="text-[#FFB800]" /> },
  { value: "10,000+", label: "Lives Transformed", icon: <Users size={20} className="text-[#FFB800]" /> },
  { value: "98%", label: "Success Rate", icon: <CheckCircle size={20} className="text-[#FFB800]" /> },
  { value: "24/7", label: "Available", icon: <Clock size={20} className="text-[#FFB800]" /> },
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
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0F00]/90 via-[#1A0F00]/70 to-[#1A0F00]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F00]/60 via-transparent to-transparent" />

        {/* Decorative stars */}
        <div className="absolute top-32 left-8 text-[#FFB800]/30 text-4xl animate-float">✦</div>
        <div className="absolute top-48 right-1/3 text-[#FFB800]/20 text-2xl animate-float" style={{ animationDelay: "1s" }}>★</div>
        <div className="absolute bottom-40 left-1/4 text-[#FFB800]/20 text-3xl animate-float" style={{ animationDelay: "2s" }}>✦</div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFB800]/10 border border-[#FFB800]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#FFB800] text-xs font-cinzel tracking-widest uppercase">Guyana's Most Trusted Astrologer</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-4">
              Get a{" "}
              <span className="text-gradient-gold">Solution</span>
              <br />
              to Your Problems
            </h1>

            <p className="font-body text-[#FFF8EE]/75 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Astrologer Guru Bhairav brings over 25 years of sacred wisdom to guide you through life's challenges — love, career, family, and spiritual healing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://wa.me/5926804996?text=Hello%20Guru%20Bhairav%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book on WhatsApp
              </a>
              <Link href="/services">
                <span className="btn-outline-gold text-base">
                  View All Services <ChevronRight size={16} />
                </span>
              </Link>
            </div>

            {/* Phone */}
            <a href="tel:+5926804996" className="inline-flex items-center gap-2 text-[#FFF8EE]/60 hover:text-[#FFB800] transition-colors font-body text-sm">
              <Phone size={14} />
              Call Now: +592 680 4996
            </a>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 50 960 10 720 30C480 50 240 10 0 20L0 60Z" fill="#FFF8EE" />
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="section-cream py-12">
        <div className="container">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="font-display text-3xl md:text-4xl font-bold text-[#FF6B00] mb-1">{stat.value}</div>
                  <div className="font-body text-[#1A0F00]/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FEATURED SERVICES ── */}
      <section className="section-cream py-16 md:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="star-divider mb-4">
                <span className="font-cinzel text-[#FFB800] text-xs tracking-widest uppercase">What We Offer</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-[#1A0F00] font-bold mb-4">
                Sacred Services for a <span className="text-gradient-gold">Better Life</span>
              </h2>
              <p className="font-body text-[#1A0F00]/60 max-w-xl mx-auto">
                Guru Bhairav combines ancient Vedic wisdom with deep spiritual insight to bring lasting solutions to your most pressing life challenges.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, i) => (
              <AnimatedSection key={service.title}>
                <div className="service-card h-full" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F00]/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-2xl">{service.icon}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-[#1A0F00] font-semibold mb-2">{service.title}</h3>
                    <p className="font-body text-[#1A0F00]/60 text-sm leading-relaxed mb-4">{service.desc}</p>
                    <Link href="/services">
                      <span className="inline-flex items-center gap-1 text-[#FF6B00] font-body font-semibold text-sm hover:gap-2 transition-all">
                        Learn More <ChevronRight size={14} />
                      </span>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center mt-10">
              <Link href="/services">
                <span className="btn-primary inline-flex">
                  View All Services <ChevronRight size={16} />
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="section-dark py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border border-[#FFB800]/20 rounded-lg" />
                <img
                  src={ABOUT_IMG}
                  alt="Astrologer Guru Bhairav"
                  className="w-full rounded-lg object-cover max-h-[500px] relative z-10"
                />
                <div className="absolute bottom-6 right-6 bg-[#FF6B00] text-[#1A0F00] font-body font-bold px-4 py-2 rounded text-sm z-20">
                  25+ Years of Wisdom
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div>
                <div className="star-divider mb-4">
                  <span className="font-cinzel text-[#FFB800] text-xs tracking-widest uppercase">About Guru Bhairav</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-[#FFF8EE] font-bold mb-6">
                  A Lifetime Devoted to <span className="text-gradient-gold">Spiritual Guidance</span>
                </h2>
                <p className="font-body text-[#FFF8EE]/70 leading-relaxed mb-4">
                  Born into a lineage of revered spiritual practitioners, Guru Bhairav has dedicated his life to the sacred sciences of astrology, palmistry, and psychic healing. With over 25 years of practice, he has guided thousands of individuals across Guyana toward peace, prosperity, and purpose.
                </p>
                <p className="font-body text-[#FFF8EE]/70 leading-relaxed mb-8">
                  His approach blends traditional Vedic astrology with compassionate, personalized guidance — offering real solutions to real problems in love, family, career, and spiritual well-being.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {["Vedic Astrology Expert", "Certified Palmist", "Spiritual Healer", "Psychic Reader"].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#FFB800] shrink-0" />
                      <span className="font-body text-[#FFF8EE]/80 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
                <Link href="/about">
                  <span className="btn-outline-gold inline-flex">
                    Read My Story <ChevronRight size={16} />
                  </span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-cream py-16 md:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="star-divider mb-4">
                <span className="font-cinzel text-[#FFB800] text-xs tracking-widest uppercase">Client Stories</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-[#1A0F00] font-bold mb-4">
                Lives <span className="text-gradient-gold">Transformed</span>
              </h2>
              <p className="font-body text-[#1A0F00]/60 max-w-xl mx-auto">
                Thousands of people across Guyana have found peace, love, and prosperity through Guru Bhairav's guidance.
              </p>
            </div>
          </AnimatedSection>

          <Testimonials />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-amber py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-8 left-8 text-[#FFB800] text-8xl font-cinzel">ॐ</div>
          <div className="absolute bottom-8 right-8 text-[#FFB800] text-6xl">✦</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FFB800] text-[200px] font-cinzel opacity-30">☽</div>
        </div>
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <div className="star-divider mb-4">
              <span className="font-cinzel text-[#FFB800] text-xs tracking-widest uppercase">Take the First Step</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#FFF8EE] font-bold mb-4">
              Your Better Life <span className="text-gradient-gold">Begins Today</span>
            </h2>
            <p className="font-body text-[#FFF8EE]/70 max-w-xl mx-auto mb-8 text-lg">
              Don't let problems hold you back any longer. Contact Guru Bhairav now for a confidential consultation and take the first step toward transformation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/5926804996?text=Hello%20Guru%20Bhairav%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book on WhatsApp
              </a>
              <Link href="/contact">
                <span className="btn-outline-gold text-base">
                  Send a Message <ChevronRight size={16} />
                </span>
              </Link>
            </div>
            <p className="font-body text-[#FFF8EE]/40 text-sm mt-6">
              Free first consultation · Confidential · Available 24/7
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
