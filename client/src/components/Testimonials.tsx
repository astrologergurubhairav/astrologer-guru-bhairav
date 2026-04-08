/*
 * DESIGN: Celestial Luxury — Testimonials Component
 * Carousel with client reviews, star ratings, submission form
 * Colors: #1A0F00 (dark), #FF6B00 (saffron), #FFB800 (gold), #FFF8EE (cream)
 */
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Send } from "lucide-react";

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  text: string;
  stars: number;
  date: string;
}

const initialTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya S.",
    location: "Georgetown, Guyana",
    service: "Love Problem Solution",
    text: "Guru Bhairav helped me when I was at my lowest. His love problem solution worked within days. I am now happily reunited with my husband. Truly blessed!",
    stars: 5,
    date: "2 months ago",
  },
  {
    id: "2",
    name: "Ramesh K.",
    location: "Linden, Guyana",
    service: "Black Magic Removal",
    text: "I was suffering from severe black magic for years. After Guru Bhairav's treatment, my life completely changed. My business is thriving and my family is at peace.",
    stars: 5,
    date: "1 month ago",
  },
  {
    id: "3",
    name: "Anita M.",
    location: "New Amsterdam, Guyana",
    service: "Psychic Reading",
    text: "His psychic reading was incredibly accurate. He told me things no one could have known. I followed his guidance and my career took off. Highly recommended!",
    stars: 5,
    date: "3 weeks ago",
  },
  {
    id: "4",
    name: "David P.",
    location: "Berbice, Guyana",
    service: "Job & Business Problem Solution",
    text: "After years of struggling with my business, Guru Bhairav identified the root cause and provided remedies. Within months, my profits doubled. Thank you!",
    stars: 5,
    date: "1 week ago",
  },
  {
    id: "5",
    name: "Meera L.",
    location: "Georgetown, Guyana",
    service: "Marriage Problem Solution",
    text: "My marriage was on the verge of collapse. Guru Bhairav's guidance brought my husband and me back together. We're now stronger than ever. Forever grateful!",
    stars: 5,
    date: "2 weeks ago",
  },
  {
    id: "6",
    name: "Vikram T.",
    location: "Essequibo, Guyana",
    service: "Palm Reading",
    text: "The palm reading was eye-opening. Guru Bhairav's insights about my life path were spot-on. He helped me make important decisions with confidence.",
    stars: 5,
    date: "3 days ago",
  },
];

interface TestimonialsProps {
  onSubmitTestimonial?: (testimonial: Omit<Testimonial, "id" | "date">) => void;
}

export default function Testimonials({ onSubmitTestimonial }: TestimonialsProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    service: "",
    text: "",
    stars: 5,
  });
  const [submitting, setSubmitting] = useState(false);

  // Auto-rotate carousel
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const handlePrev = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      const newTestimonial: Testimonial = {
        id: String(testimonials.length + 1),
        ...formData,
        stars: Number(formData.stars),
        date: "Just now",
      };
      setTestimonials([newTestimonial, ...testimonials]);
      onSubmitTestimonial?.(newTestimonial);
      setFormData({ name: "", location: "", service: "", text: "", stars: 5 });
      setSubmitting(false);
      setShowForm(false);
    }, 1000);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <div>
      {/* Carousel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {visibleTestimonials.map((testimonial, idx) => (
          <div
            key={testimonial.id}
            className={`transition-all duration-500 ${
              idx === 0 ? "md:scale-105 md:z-10" : "md:opacity-70"
            }`}
          >
            <div className="bg-white border border-[#FFB800]/20 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.stars }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#FFB800] fill-[#FFB800]" />
                ))}
              </div>

              {/* Service Badge */}
              <div className="inline-flex items-center gap-1 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded px-2.5 py-1 mb-3 w-fit">
                <span className="font-body text-[#FF6B00] text-xs font-semibold">{testimonial.service}</span>
              </div>

              {/* Review Text */}
              <p className="font-body text-[#1A0F00]/70 text-sm leading-relaxed mb-4 flex-1 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#FFB800]/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FFB800] flex items-center justify-center text-[#1A0F00] font-cinzel font-bold text-sm shrink-0">
                  {testimonial.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-body font-semibold text-[#1A0F00] text-sm">{testimonial.name}</div>
                  <div className="font-body text-[#1A0F00]/50 text-xs">{testimonial.location}</div>
                </div>
              </div>

              {/* Date */}
              <div className="font-body text-[#1A0F00]/40 text-xs mt-2">{testimonial.date}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-[#FFB800]/30 flex items-center justify-center text-[#FF6B00] hover:bg-[#FF6B00]/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-[#FFB800]/30 flex items-center justify-center text-[#FF6B00] hover:bg-[#FF6B00]/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex gap-1.5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setAutoPlay(false);
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? "bg-[#FF6B00] w-6" : "bg-[#FFB800]/30 w-2"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn-primary text-sm py-2"
        >
          Share Your Story
        </button>
      </div>

      {/* Submission Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 border border-[#FFB800]/20">
            <h3 className="font-display text-2xl text-[#1A0F00] font-bold mb-1">Share Your Experience</h3>
            <p className="font-body text-[#1A0F00]/60 text-sm mb-4">
              Tell us how Guru Bhairav has helped you. Your testimonial will inspire others.
            </p>

            <form onSubmit={handleSubmitForm} className="space-y-4">
              <div>
                <label className="block font-body text-[#1A0F00] text-sm font-semibold mb-1">
                  Your Name <span className="text-[#FF6B00]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  placeholder="Full name"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block font-body text-[#1A0F00] text-sm font-semibold mb-1">
                  Location <span className="text-[#FF6B00]">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleFormChange}
                  required
                  placeholder="City, Guyana"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block font-body text-[#1A0F00] text-sm font-semibold mb-1">
                  Service <span className="text-[#FF6B00]">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleFormChange}
                  required
                  className="input-field"
                >
                  <option value="">Select a service...</option>
                  <option value="Palm Reading">Palm Reading</option>
                  <option value="Psychic Reading">Psychic Reading</option>
                  <option value="Love Problem Solution">Love Problem Solution</option>
                  <option value="Relationship Problem Solution">Relationship Problem Solution</option>
                  <option value="Marriage Problem Solution">Marriage Problem Solution</option>
                  <option value="Husband & Wife Problem">Husband & Wife Problem</option>
                  <option value="Family Problem Solution">Family Problem Solution</option>
                  <option value="Job & Business Problem Solution">Job & Business Problem Solution</option>
                  <option value="Black Magic Removal">Black Magic Removal</option>
                  <option value="Negative Energy Removal">Negative Energy Removal</option>
                  <option value="Evil Spirits Removal">Evil Spirits Removal</option>
                  <option value="Vedic Astrology Reading">Vedic Astrology Reading</option>
                </select>
              </div>

              <div>
                <label className="block font-body text-[#1A0F00] text-sm font-semibold mb-1">
                  Rating <span className="text-[#FF6B00]">*</span>
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, stars: star })}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        size={24}
                        className={`${
                          star <= formData.stars
                            ? "text-[#FFB800] fill-[#FFB800]"
                            : "text-[#FFB800]/30"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-body text-[#1A0F00] text-sm font-semibold mb-1">
                  Your Story <span className="text-[#FF6B00]">*</span>
                </label>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleFormChange}
                  required
                  rows={4}
                  placeholder="Share how Guru Bhairav helped you..."
                  className="input-field resize-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 btn-outline-gold py-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 btn-primary py-2 justify-center"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={14} />
                      Submit
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
