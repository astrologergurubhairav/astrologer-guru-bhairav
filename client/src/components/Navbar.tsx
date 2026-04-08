/*
 * DESIGN: Celestial Luxury Navbar
 * Dark warm background (#1A0F00), gold logo, saffron CTA button
 * Sticky with backdrop blur on scroll
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1A0F00]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[#1A0F00]"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FFB800] flex items-center justify-center text-[#1A0F00] font-cinzel font-bold text-sm shadow-md">
                ॐ
              </div>
              <div>
                <div className="font-cinzel text-[#FFB800] font-bold text-sm md:text-base leading-tight">
                  Guru Bhairav
                </div>
                <div className="font-body text-[#FFF8EE]/60 text-[10px] md:text-xs tracking-widest uppercase">
                  Astrologer & Psychic
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`nav-link text-sm ${
                    location === link.href
                      ? "text-[#FFB800]"
                      : "text-[#FFF8EE]/80 hover:text-[#FFB800]"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+15926804996"
              className="flex items-center gap-2 text-[#FFF8EE]/70 hover:text-[#FFB800] transition-colors text-sm font-body"
            >
              <Phone size={14} />
              +592 680 4996
            </a>
            <a
              href="https://wa.me/5926804996"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-4"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#FFF8EE] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1A0F00] border-t border-[#FFB800]/20">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`block py-2 font-body text-base ${
                    location === link.href
                      ? "text-[#FFB800]"
                      : "text-[#FFF8EE]/80"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <a
              href="tel:+15926804996"
              className="flex items-center gap-2 text-[#FFF8EE]/70 py-2 font-body"
            >
              <Phone size={14} />
              +592 680 4996
            </a>
            <a
              href="https://wa.me/5926804996"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center justify-center"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
