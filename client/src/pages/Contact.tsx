/*
 * DESIGN: Celestial Luxury — Contact Page
 * Booking form, contact info, social media links, WhatsApp CTA
 * Colors: #1A0F00 (dark), #FF6B00 (saffron), #FFB800 (gold), #FFF8EE (cream)
 */
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, CheckCircle, Send } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663518200634/37Hv2EvD9fWcyUeSg4qhCB/hero-bg-dgzFTcFKNDMugLU2cfcuuB.webp";

const services = [
  "Palm Reading",
  "Psychic Reading",
  "Love Problem Solution",
  "Relationship Problem Solution",
  "Marriage Problem Solution",
  "Husband & Wife Problem",
  "Family Problem Solution",
  "Job & Business Problem Solution",
  "Black Magic Removal",
  "Negative Energy Removal",
  "Evil Spirits Removal",
  "Vedic Astrology Reading",
  "Other",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission — redirect to WhatsApp with pre-filled message
    const msg = `Hello Guru Bhairav! My name is ${form.name}. I would like to book a consultation for: ${form.service || "General Consultation"}. ${form.date ? `Preferred date: ${form.date}.` : ""} ${form.message ? `Additional info: ${form.message}` : ""} My contact: ${form.phone || form.email}`;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(`https://wa.me/5926804996?text=${encodeURIComponent(msg)}`, "_blank");
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* ── PAGE HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="absolute inset-0 bg-[#1A0F00]/85" />
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFB800]/10 border border-[#FFB800]/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#FFB800] text-xs font-cinzel tracking-widest uppercase">Get in Touch</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-4">
            Book Your <span className="text-gradient-gold">Consultation</span>
          </h1>
          <p className="font-body text-[#FFF8EE]/70 text-lg max-w-xl mx-auto">
            Take the first step toward transformation. Reach out to Guru Bhairav today for a confidential, personalized consultation.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="section-cream py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-3xl text-[#1A0F00] font-bold mb-2">Contact Information</h2>
              <div className="gold-divider mb-6" />

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-[#FF6B00]" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-[#1A0F00] text-sm mb-0.5">Phone / WhatsApp</p>
                    <a href="tel:+5926804996" className="font-body text-[#FF6B00] hover:text-[#1A0F00] transition-colors font-semibold">
                      +592 680 4996
                    </a>
                    <p className="font-body text-[#1A0F00]/50 text-xs mt-0.5">Available 24 hours, 7 days a week</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-[#FF6B00]" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-[#1A0F00] text-sm mb-0.5">Email</p>
                    <a href="mailto:gurubhairav@gmail.com" className="font-body text-[#FF6B00] hover:text-[#1A0F00] transition-colors">
                      gurubhairav@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[#FF6B00]" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-[#1A0F00] text-sm mb-0.5">Location</p>
                    <p className="font-body text-[#1A0F00]/70 text-sm">Georgetown, Guyana</p>
                    <p className="font-body text-[#1A0F00]/50 text-xs mt-0.5">In-person & remote consultations available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-[#FF6B00]" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-[#1A0F00] text-sm mb-0.5">Consultation Hours</p>
                    <p className="font-body text-[#1A0F00]/70 text-sm">Monday – Sunday</p>
                    <p className="font-body text-[#FF6B00] text-sm font-semibold">8:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="bg-[#1A0F00] rounded-lg p-5 mb-6">
                <p className="font-cinzel text-[#FFB800] text-xs tracking-widest uppercase mb-2">Fastest Response</p>
                <p className="font-body text-[#FFF8EE]/70 text-sm mb-4">
                  For the quickest reply, message Guru Bhairav directly on WhatsApp.
                </p>
                <a
                  href="https://wa.me/5926804996?text=Hello%20Guru%20Bhairav%2C%20I%20would%20like%20to%20book%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white font-body font-semibold px-4 py-2.5 rounded text-sm hover:bg-[#1da851] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Open WhatsApp Chat
                </a>
              </div>

              {/* Social Media */}
              <div>
                <p className="font-cinzel text-[#1A0F00] text-xs tracking-widest uppercase mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1877F2] text-white font-body text-xs font-semibold px-3 py-2 rounded hover:opacity-90 transition-opacity">
                    <Facebook size={14} /> Facebook
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white font-body text-xs font-semibold px-3 py-2 rounded hover:opacity-90 transition-opacity">
                    <Instagram size={14} /> Instagram
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#FF0000] text-white font-body text-xs font-semibold px-3 py-2 rounded hover:opacity-90 transition-opacity">
                    <Youtube size={14} /> YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg border border-[#FFB800]/20 p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-display text-2xl text-[#1A0F00] font-bold mb-2">Booking Request Sent!</h3>
                    <p className="font-body text-[#1A0F00]/60 mb-6">
                      Your consultation request has been sent to Guru Bhairav via WhatsApp. He will respond shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-primary"
                    >
                      Book Another Consultation
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-3xl text-[#1A0F00] font-bold mb-2">Book a Consultation</h2>
                    <div className="gold-divider mb-6" />
                    <p className="font-body text-[#1A0F00]/60 text-sm mb-6">
                      Fill in the form below and your request will be sent directly to Guru Bhairav via WhatsApp for the fastest response.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block font-body text-[#1A0F00] text-sm font-semibold mb-1.5">
                            Full Name <span className="text-[#FF6B00]">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            className="input-field"
                          />
                        </div>
                        <div>
                          <label className="block font-body text-[#1A0F00] text-sm font-semibold mb-1.5">
                            Phone Number <span className="text-[#FF6B00]">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            placeholder="+592 XXX XXXX"
                            className="input-field"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-body text-[#1A0F00] text-sm font-semibold mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="input-field"
                        />
                      </div>

                      <div>
                        <label className="block font-body text-[#1A0F00] text-sm font-semibold mb-1.5">
                          Service Required <span className="text-[#FF6B00]">*</span>
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          required
                          className="input-field"
                        >
                          <option value="">Select a service...</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block font-body text-[#1A0F00] text-sm font-semibold mb-1.5">
                          Preferred Consultation Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split("T")[0]}
                          className="input-field"
                        />
                      </div>

                      <div>
                        <label className="block font-body text-[#1A0F00] text-sm font-semibold mb-1.5">
                          Describe Your Problem / Question
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Briefly describe your situation or what you'd like guidance on. All information is kept strictly confidential."
                          className="input-field resize-none"
                        />
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-[#FFF8EE] rounded border border-[#FFB800]/20">
                        <CheckCircle size={16} className="text-[#FF6B00] mt-0.5 shrink-0" />
                        <p className="font-body text-[#1A0F00]/60 text-xs">
                          Your information is completely confidential. Guru Bhairav will never share your personal details with anyone.
                        </p>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center text-base py-3"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send size={16} />
                            Send Booking Request via WhatsApp
                          </span>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ STRIP ── */}
      <section className="section-dark py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { q: "How quickly will I get a response?", a: "Guru Bhairav typically responds within 1-2 hours via WhatsApp, even on weekends." },
              { q: "Are consultations confidential?", a: "Absolutely. All consultations are 100% private and confidential. Your information is never shared." },
              { q: "Can I consult remotely?", a: "Yes! Consultations are available in-person in Georgetown or remotely via phone/video call anywhere in Guyana and beyond." },
            ].map((faq) => (
              <div key={faq.q} className="p-5 border border-[#FFB800]/20 rounded-lg">
                <p className="font-display text-[#FFB800] font-semibold text-base mb-2">{faq.q}</p>
                <p className="font-body text-[#FFF8EE]/60 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
