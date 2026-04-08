/*
 * DESIGN: Celestial Luxury Footer
 * Dark warm background, gold accents, social links, quick nav
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0700] text-[#FFF8EE]">
      {/* Top CTA Strip */}
      <div className="bg-gradient-to-r from-[#FF6B00] to-[#FFB800] py-4">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-display text-xl text-[#1A0F00] font-semibold">
            Ready to Transform Your Life?
          </p>
          <a
            href="https://wa.me/5926804996"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A0F00] text-[#FFB800] font-body font-semibold px-6 py-2 rounded text-sm hover:bg-[#2D1500] transition-colors"
          >
            WhatsApp Us Now
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FFB800] flex items-center justify-center text-[#1A0F00] font-cinzel font-bold">
                ॐ
              </div>
              <div>
                <div className="font-cinzel text-[#FFB800] font-bold text-base">Guru Bhairav</div>
                <div className="font-body text-[#FFF8EE]/50 text-xs tracking-widest uppercase">Astrologer & Psychic</div>
              </div>
            </div>
            <p className="font-body text-[#FFF8EE]/60 text-sm leading-relaxed mb-4">
              Trusted spiritual guide serving Guyana with over 25 years of experience in astrology, psychic readings, and spiritual healing.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800]/70 hover:text-[#FFB800] hover:border-[#FFB800] transition-colors">
                <Facebook size={14} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800]/70 hover:text-[#FFB800] hover:border-[#FFB800] transition-colors">
                <Instagram size={14} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800]/70 hover:text-[#FFB800] hover:border-[#FFB800] transition-colors">
                <Youtube size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-[#FFB800] font-semibold text-sm tracking-widest uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { id: "home", label: "Home", href: "/" },
                { id: "about", label: "About Guru Bhairav", href: "/about" },
                { id: "services", label: "Our Services", href: "/services" },
                { id: "contact", label: "Contact Us", href: "/contact" },
                { id: "book", label: "Book Consultation", href: "/contact" },
              ].map((link) => (
                <li key={link.id}>
                  <Link href={link.href}>
                    <span className="font-body text-[#FFF8EE]/60 hover:text-[#FFB800] text-sm transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-cinzel text-[#FFB800] font-semibold text-sm tracking-widest uppercase mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Palm Reading",
                "Psychic Reading",
                "Love Problem Solution",
                "Marriage Problem Solution",
                "Black Magic Removal",
                "Negative Energy Removal",
                "Family Problem Solution",
                "Job & Business Solution",
              ].map((service) => (
                <li key={service}>
                  <Link href="/services">
                    <span className="font-body text-[#FFF8EE]/60 hover:text-[#FFB800] text-sm transition-colors">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-[#FFB800] font-semibold text-sm tracking-widest uppercase mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-[#FFB800] mt-1 shrink-0" />
                <div>
                  <a href="tel:+5926804996" className="font-body text-[#FFF8EE]/80 hover:text-[#FFB800] text-sm transition-colors block">
                    +592 680 4996
                  </a>
                  <span className="text-[#FFF8EE]/40 text-xs">Available 24/7</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-[#FFB800] mt-1 shrink-0" />
                <a href="mailto:gurubhairav@gmail.com" className="font-body text-[#FFF8EE]/80 hover:text-[#FFB800] text-sm transition-colors">
                  gurubhairav@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#FFB800] mt-1 shrink-0" />
                <span className="font-body text-[#FFF8EE]/60 text-sm">
                  Georgetown, Guyana
                </span>
              </li>
            </ul>
            <div className="mt-4 p-3 border border-[#FFB800]/20 rounded">
              <p className="font-body text-[#FFB800] text-xs font-semibold mb-1">Consultation Hours</p>
              <p className="font-body text-[#FFF8EE]/60 text-xs">Mon – Sun: 8:00 AM – 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FFB800]/10">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-[#FFF8EE]/40 text-xs">
            © {currentYear} Astrologer Guru Bhairav. All rights reserved.
          </p>
          <p className="font-body text-[#FFF8EE]/30 text-xs">
            Serving Guyana with Spiritual Guidance
          </p>
        </div>
      </div>
    </footer>
  );
}
