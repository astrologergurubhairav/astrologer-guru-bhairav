/*
 * DESIGN: Celestial Luxury — About Page
 * Story, values, credentials, and mission
 * Colors: #1A0F00 (dark), #FF6B00 (saffron), #FFB800 (gold), #FFF8EE (cream)
 */
import { Link } from "wouter";
import { CheckCircle, ChevronRight, Star, Award, Heart, Shield, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663518200634/37Hv2EvD9fWcyUeSg4qhCB/about-image-mvx4aKidPS5iGY7DXb9Xwk.webp";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663518200634/37Hv2EvD9fWcyUeSg4qhCB/hero-bg-dgzFTcFKNDMugLU2cfcuuB.webp";

const values = [
  {
    icon: <Heart size={22} className="text-[#FF6B00]" />,
    title: "Compassion First",
    desc: "Every client is treated with deep empathy and respect. Your struggles are heard without judgment, and guidance is offered with genuine care.",
  },
  {
    icon: <Shield size={22} className="text-[#FF6B00]" />,
    title: "Complete Confidentiality",
    desc: "Your personal matters remain strictly private. Guru Bhairav maintains absolute discretion in every consultation.",
  },
  {
    icon: <Award size={22} className="text-[#FF6B00]" />,
    title: "Authentic Vedic Wisdom",
    desc: "All readings and remedies are rooted in authentic Vedic traditions passed down through generations of spiritual masters.",
  },
  {
    icon: <Sparkles size={22} className="text-[#FF6B00]" />,
    title: "Real Results",
    desc: "With a 98% success rate spanning 25+ years, Guru Bhairav's methods deliver tangible, lasting transformation in your life.",
  },
];

const credentials = [
  "Trained under renowned Vedic astrologers in India",
  "25+ years of active practice in Guyana",
  "Specialist in Jyotish (Vedic Astrology)",
  "Expert palmist with thousands of readings",
  "Certified spiritual healer and energy worker",
  "Trusted by clients across Guyana and the Caribbean",
  "Fluent in Hindi, English, and Creolese",
  "Available for in-person and remote consultations",
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

export default function About() {
  return (
    <div className="min-h-screen">
      {/* ── PAGE HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-[#1A0F00]/85" />
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFB800]/10 border border-[#FFB800]/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#FFB800] text-xs font-cinzel tracking-widest uppercase">About Guru Bhairav</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-4">
            A Life of <span className="text-gradient-gold">Sacred Purpose</span>
          </h1>
          <p className="font-body text-[#FFF8EE]/70 text-lg max-w-xl mx-auto">
            Discover the story, values, and spiritual journey of Guyana's most trusted astrologer and psychic healer.
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="section-cream py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border border-[#FFB800]/20 rounded-lg" />
                <img
                  src={ABOUT_IMG}
                  alt="Astrologer Guru Bhairav"
                  className="w-full rounded-lg object-cover relative z-10 shadow-xl"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-[#1A0F00] text-[#FFF8EE] p-4 rounded-lg shadow-xl z-20 border border-[#FFB800]/30">
                  <div className="font-display text-3xl text-[#FFB800] font-bold">25+</div>
                  <div className="font-body text-[#FFF8EE]/70 text-xs">Years of Practice</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div>
                <div className="star-divider mb-4">
                  <span className="font-cinzel text-[#FFB800] text-xs tracking-widest uppercase">My Story</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-[#1A0F00] font-bold mb-6">
                  Born to Guide, <span className="text-gradient-gold">Destined to Heal</span>
                </h2>
                <div className="space-y-4 font-body text-[#1A0F00]/70 leading-relaxed">
                  <p>
                    Guru Bhairav was born into a family with a centuries-old tradition of Vedic scholarship and spiritual practice. From a young age, he showed a remarkable gift for reading people's energies and understanding the cosmic forces that shape human destiny.
                  </p>
                  <p>
                    Under the mentorship of revered Jyotish masters in India, he spent years mastering the ancient sciences of astrology, palmistry, numerology, and spiritual healing. He returned to Guyana with a sacred mission: to bring these powerful tools of transformation to his community.
                  </p>
                  <p>
                    Over the past 25 years, Guru Bhairav has become Guyana's most trusted spiritual advisor, helping thousands of individuals and families overcome life's most challenging obstacles — from broken relationships and career setbacks to spiritual afflictions and negative energies.
                  </p>
                  <p>
                    His approach is always compassionate, confidential, and results-focused. He believes that every person deserves to live a life of love, abundance, and peace — and he has dedicated his life to making that possible.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/contact">
                    <span className="btn-primary inline-flex">
                      Book a Consultation <ChevronRight size={16} />
                    </span>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section-dark py-16 md:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="star-divider mb-4">
                <span className="font-cinzel text-[#FFB800] text-xs tracking-widest uppercase">Core Values</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-[#FFF8EE] font-bold mb-4">
                Principles That <span className="text-gradient-gold">Guide Every Reading</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title}>
                <div
                  className="p-6 border border-[#FFB800]/20 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center shrink-0">
                      {v.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-[#FFB800] font-semibold mb-2">{v.title}</h3>
                      <p className="font-body text-[#FFF8EE]/60 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section className="section-cream py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <div className="star-divider mb-4">
                  <span className="font-cinzel text-[#FFB800] text-xs tracking-widest uppercase">Credentials & Expertise</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-[#1A0F00] font-bold mb-6">
                  Expertise You Can <span className="text-gradient-gold">Trust</span>
                </h2>
                <p className="font-body text-[#1A0F00]/60 mb-8 leading-relaxed">
                  Guru Bhairav's credentials span decades of dedicated study, practice, and service. His expertise is backed by authentic training and a proven track record of helping thousands of people.
                </p>
                <ul className="space-y-3">
                  {credentials.map((cred) => (
                    <li key={cred} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#FF6B00] mt-0.5 shrink-0" />
                      <span className="font-body text-[#1A0F00]/70 text-sm">{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "25+", label: "Years Experience" },
                  { num: "10K+", label: "Clients Helped" },
                  { num: "98%", label: "Success Rate" },
                  { num: "100%", label: "Confidential" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#1A0F00] text-[#FFF8EE] p-6 rounded-lg text-center border border-[#FFB800]/20"
                  >
                    <div className="font-display text-4xl text-[#FFB800] font-bold mb-1">{stat.num}</div>
                    <div className="font-body text-[#FFF8EE]/60 text-sm">{stat.label}</div>
                  </div>
                ))}
                <div className="col-span-2 bg-gradient-to-r from-[#FF6B00] to-[#FFB800] p-6 rounded-lg text-center">
                  <div className="flex justify-center gap-1 mb-2">
                    {[1,2,3,4,5].map((s) => <Star key={s} size={16} className="text-[#1A0F00] fill-[#1A0F00]" />)}
                  </div>
                  <p className="font-display text-[#1A0F00] font-semibold text-lg">
                    "Guyana's Most Trusted Spiritual Advisor"
                  </p>
                  <p className="font-body text-[#1A0F00]/70 text-sm mt-1">Rated 5 stars by thousands of clients</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-amber py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 font-cinzel text-[#FFB800] text-[300px] flex items-center justify-center">ॐ</div>
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl text-[#FFF8EE] font-bold mb-4">
              Ready to Begin Your <span className="text-gradient-gold">Journey?</span>
            </h2>
            <p className="font-body text-[#FFF8EE]/70 max-w-lg mx-auto mb-8">
              Take the first step toward a better life. Book your personal consultation with Guru Bhairav today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/5926804996?text=Hello%20Guru%20Bhairav%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book on WhatsApp
              </a>
              <Link href="/services">
                <span className="btn-outline-gold">View Services</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
