"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scissors, Clock, MapPin, Phone, Instagram, Facebook, ArrowRight, Star, Quote, Zap, Wind } from "lucide-react";
import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const services = [
    { title: "HAIRCUT", icon: <Scissors className="w-8 h-8" />, desc: "Any cut to your taste followed by a professional finish.", price: "Rp 150.000", id: "haircut" },
    { title: "SHAVING", icon: <Scissors className="w-8 h-8 rotate-45" />, desc: "Commonly traditional shaving with a premium finish.", price: "Rp 100.000", id: "shaving" },
    { title: "STYLING", icon: <Wind className="w-8 h-8" />, desc: "Keep looking your best with our professional stylists.", price: "Rp 75.000", id: "styling" },
    { title: "TRIMMING", icon: <Zap className="w-8 h-8" />, desc: "Looking to try something new with your facial hair.", price: "Rp 85.000", id: "trimming" },
  ];

  const barbers = [
    { name: "Marco V.", role: "Fade Specialist", image: "/images/ravbarber_hero_1772360063178.png", id: "marco" },
    { name: "Andra K.", role: "Classic Scissoring", image: "/images/haircut_service_1772360078172.png", id: "andra" },
  ];

  const timeSlots = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingInfo, setBookingInfo] = useState({ name: "", phone: "" });

  const handleBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServices([serviceId]);
    } else {
      setSelectedServices([]);
    }
    setIsBookingOpen(true);
    setBookingStep(1);
  };

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleWhatsApp = () => {
    const selectedTitles = services
      .filter(s => selectedServices.includes(s.id))
      .map(s => s.title)
      .join(", ");

    const barber = barbers.find(b => b.id === selectedBarber)?.name || "Any Barber";
    const text = `Halo RAVBARBER, saya ingin booking layanan:
Layanan: ${selectedTitles}
Barber: ${barber}
Waktu: ${selectedTime}
Nama: ${bookingInfo.name}
Telepon: ${bookingInfo.phone}

Terima kasih!`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/6281234567890?text=${encodedText}`, "_blank");
    setIsBookingOpen(false);
  };

  return (
    <main ref={containerRef} className="bg-white text-foreground selection:bg-gold selection:text-white overflow-x-hidden">

      {/* Dynamic Navigation */}
      <nav className="fixed top-0 z-[100] w-full mix-blend-difference py-8 px-6 md:px-12 flex justify-between items-center text-white">
        <div className="flex items-center gap-3">
          <Scissors className="w-5 h-5" />
          <span className="text-xl font-serif font-bold tracking-[0.3em]">RAVBARBER</span>
        </div>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold">
          <a href="#about" className="hover:text-gold transition-colors">Experience</a>
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#barbers" className="hover:text-gold transition-colors">Masters</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
        <button
          onClick={() => handleBooking()}
          className="border-b border-white/30 pb-1 text-[10px] uppercase tracking-[0.3em] font-bold hover:border-white transition-all"
        >
          Reservations
        </button>
      </nav>

      {/* Hero: Editorial Style */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0 scale-110">
          <Image
            src="/images/ravbarber_hero_1772360063178.png"
            alt="Hero"
            fill
            className="object-cover opacity-90 brightness-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden lg:block">
          <span className="text-sideways text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">
            Est. 2024 — Premium Grooming Lounge
          </span>
        </div>

        <div className="relative z-10 text-center container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.8em] font-bold mb-6 opacity-60">Redefining Classics</h2>
            <h1 className="text-6xl md:text-8xl font-serif leading-none mb-10 tracking-tighter">
              Crafting <br /> <span className="italic pl-12 md:pl-24">Confidence</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
              <button onClick={() => handleBooking()} className="btn-luxury">Explore Collection</button>
            </div>
          </motion.div>
        </div>

        <div className="absolute right-12 bottom-24 text-right hidden lg:block">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 leading-loose">
            Luxury Standard<br />Exquisite Detail<br />Timeless Style
          </p>
        </div>
      </section>

      {/* Brand Experience: Asymmetric */}
      <section id="about" className="section-padding grid md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-5 relative">
          <div className="absolute -top-20 -left-10 text-9xl font-serif text-outline select-none z-0">BARBER</div>
          <motion.div
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 1.5 }}
            className="relative z-10 aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
          >
            <Image src="/images/haircut_service_1772360078172.png" alt="Detail" fill className="object-cover" />
          </motion.div>
        </div>
        <div className="md:col-span-1" />
        <div className="md:col-span-6 space-y-12">
          <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold">The Philosophy</h3>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight">More than a haircut—an <span className="italic">identity</span>.</h2>
          <p className="text-lg text-foreground/60 leading-relaxed font-light">
            We believe that every man has a story. At RAVBARBER, we translate that story into a visual statement.
            Our masters combine century-old techniques with modern vision to deliver an experience that goes
            beyond the chair.
          </p>
          <div className="pt-8">
            <a href="#services" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] group">
              Our Services <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Services: Minimalist List */}
      <section id="services" className="bg-soft section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold mb-4">The Menu</h3>
              <h2 className="text-5xl md:text-7xl font-serif">Tailored Services</h2>
            </div>
            <p className="md:max-w-xs text-xs uppercase tracking-widest leading-loose opacity-60">
              curated grooming services designed to meet the highest expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-[#111] p-10 text-center flex flex-col items-center group transition-all"
              >
                <div className="text-gold/60 mb-8 group-hover:text-gold transition-colors">
                  {(s as any).icon}
                </div>
                <h4 className="text-white text-xl font-serif tracking-[0.2em] mb-4">{s.title}</h4>
                <p className="text-gold text-sm font-bold tracking-[0.2em] mb-6">{s.price}</p>
                <p className="text-white/40 text-[11px] leading-relaxed mb-8 uppercase tracking-widest h-12">
                  {s.desc}
                </p>
                <button
                  onClick={() => handleBooking(s.id)}
                  className="text-[10px] text-gold/80 font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:text-gold transition-colors"
                >
                  Book Now <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Masters Section */}
      <section id="barbers" className="section-padding">
        <div className="text-center mb-16">
          <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold mb-4">The Hands</h3>
          <h2 className="text-5xl md:text-7xl font-serif">Meet the Masters</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {barbers.map((b, i) => (
            <div key={i} className="group relative overflow-hidden">
              <div className="aspect-[4/5] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                <Image src={b.image} alt={b.name} fill className="object-cover scale-110 group-hover:scale-100 transition-all duration-1000" />
              </div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-[10px] uppercase tracking-widest mb-2 opacity-80">{b.role}</p>
                <h4 className="text-3xl font-serif">{b.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial: Atmospheric */}
      <section className="py-32 bg-foreground text-white flex items-center justify-center overflow-hidden relative">
        <Quote className="absolute -top-10 -left-10 w-96 h-96 opacity-5 rotate-12" />
        <div className="max-w-4xl px-6 text-center space-y-12 relative z-10">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif leading-snug italic font-light">
            "The atmosphere is pure luxury. It's not just about the haircut,
            it's the way they treat you. A true gentlemen's sanctuary."
          </h2>
          <div className="space-y-2">
            <div className="w-12 h-[1px] bg-gold mx-auto" />
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold">Johnathan Miller</p>
            <p className="text-[10px] opacity-40">Loyal Client since 2024</p>
          </div>
        </div>
      </section>

      {/* Contact & Footer: Minimal & Clean */}
      <footer id="contact" className="section-padding bg-white">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5 space-y-12">
            <div className="flex items-center gap-3">
              <Scissors className="w-6 h-6 text-gold" />
              <span className="text-2xl font-serif font-bold tracking-[0.2em]">RAVBARBER</span>
            </div>
            <p className="text-lg leading-relaxed font-light opacity-60">
              Visit our lounge for a session that will redefine your standard of grooming.
            </p>
            <div className="space-y-6 pt-4 text-sm tracking-widest font-medium uppercase text-[10px]">
              <div className="flex flex-col gap-2">
                <span className="opacity-40">Visit Us</span>
                <span>123 Gentlemen Street, City 45678</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="opacity-40">Call Us</span>
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="opacity-40">Hours</span>
                <span>10:00 — 21:00 Daily</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-8">
            <div className="space-y-8">
              <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">Socials</h5>
              <div className="flex flex-col gap-4 text-sm font-light">
                <a href="#" className="hover:text-gold transition-colors">Instagram</a>
                <a href="#" className="hover:text-gold transition-colors">Facebook</a>
                <a href="#" className="hover:text-gold transition-colors">Twitter</a>
              </div>
            </div>
            <div className="space-y-8">
              <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">Booking</h5>
              <button
                onClick={() => handleBooking()}
                className="btn-luxury w-full"
              >
                Claim your spot
              </button>
              <p className="text-[8px] uppercase tracking-widest opacity-40 text-center">Appointments recommended</p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase tracking-[0.2em] opacity-30">
          <span>&copy; 2024 RAVBARBER. All Rights Reserved.</span>
          <div className="flex gap-8">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>


      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6281234567890?text=Halo%20RAVBARBER%2C%20saya%20ingin%20booking%20layanan..."
        target="_blank"
        className="float-wa hidden md:flex"
      >
        <Phone className="w-4 h-4" />
        Booking Now
      </a>

      {/* Mobile Floating Button */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-[150] md:hidden">
        <button
          onClick={() => handleBooking()}
          className="w-full bg-gold text-white p-4 font-bold uppercase tracking-[0.3em] text-[10px] shadow-2xl rounded-none"
        >
          Instant Booking
        </button>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-2xl bg-white text-foreground p-8 md:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-black/5"
            >
              <button
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-8 right-8 text-black/20 hover:text-black hover:rotate-90 transition-all duration-300"
              >
                <Zap className="w-8 h-8 rotate-45" />
              </button>

              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-[1px] w-8 bg-gold" />
                  <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold">Step 0{bookingStep} / 04</h3>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif">
                  {bookingStep === 1 && "Select Service"}
                  {bookingStep === 2 && "Choose Master"}
                  {bookingStep === 3 && "Pick Schedule"}
                  {bookingStep === 4 && "Finalize Appointment"}
                </h2>
              </div>

              <div className="min-h-[350px]">
                {/* Step 1: Service (Multi-select) */}
                {bookingStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => toggleService(s.id)}
                          className={`p-6 text-left border transition-all duration-500 overflow-hidden relative group ${selectedServices.includes(s.id) ? 'border-gold bg-soft shadow-inner' : 'border-black/5 hover:border-gold/30'}`}
                        >
                          <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-2">
                              <p className="text-[10px] uppercase tracking-widest font-bold text-gold">{s.price}</p>
                              {selectedServices.includes(s.id) && (
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-gold text-white p-1 rounded-full">
                                  <Zap className="w-3 h-3 fill-white" />
                                </motion.div>
                              )}
                            </div>
                            <h4 className="text-xl font-serif mb-4">{s.title}</h4>
                            <p className="text-[10px] uppercase tracking-widest opacity-40 leading-relaxed">{s.desc}</p>
                          </div>
                          <div className={`absolute bottom-0 left-0 h-1 bg-gold transition-all duration-700 ${selectedServices.includes(s.id) ? 'w-full' : 'w-0 group-hover:w-1/2'}`} />
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setBookingStep(2)}
                      disabled={selectedServices.length === 0}
                      className="btn-luxury w-full disabled:opacity-30 disabled:cursor-not-allowed group flex items-center justify-center gap-4 py-4"
                    >
                      Continue with {selectedServices.length} Selected <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                )}

                {/* Step 2: Barber */}
                {bookingStep === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {barbers.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => { setSelectedBarber(b.id); setBookingStep(3); }}
                        className={`group p-6 text-left border transition-all duration-500 overflow-hidden relative ${selectedBarber === b.id ? 'border-gold bg-soft' : 'border-black/5 hover:border-gold/30'}`}
                      >
                        <div className="relative z-10">
                          <p className="text-[10px] uppercase tracking-widest font-bold mb-2 opacity-40 group-hover:opacity-100 transition-opacity">{b.role}</p>
                          <h4 className="text-xl font-serif">{b.name}</h4>
                        </div>
                        <div className={`absolute bottom-0 left-0 h-1 bg-gold transition-all duration-700 ${selectedBarber === b.id ? 'w-full' : 'w-0 group-hover:w-1/2'}`} />
                      </button>
                    ))}
                    <button
                      onClick={() => { setSelectedBarber(null); setBookingStep(3); }}
                      className={`p-6 text-left border transition-all duration-500 relative group ${selectedBarber === null ? 'border-gold bg-soft' : 'border-black/5 hover:border-gold/30'}`}
                    >
                      <div className="relative z-10">
                        <p className="text-[10px] uppercase tracking-widest font-bold mb-2">Available Master</p>
                        <h4 className="text-xl font-serif text-black/60">No Preference</h4>
                      </div>
                      <div className={`absolute bottom-0 left-0 h-1 bg-gold transition-all duration-700 ${selectedBarber === null ? 'w-full' : 'w-0 group-hover:w-1/2'}`} />
                    </button>
                  </div>
                )}

                {/* Step 3: Time */}
                {bookingStep === 3 && (
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => { setSelectedTime(t); setBookingStep(4); }}
                        className={`py-6 px-4 text-center text-[10px] font-bold tracking-widest border transition-all duration-300 relative group ${selectedTime === t ? 'border-gold bg-gold text-white' : 'border-black/5 hover:border-gold/30'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 4: Info */}
                {bookingStep === 4 && (
                  <div className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Your full Name</label>
                        <input
                          type="text"
                          value={bookingInfo.name}
                          onChange={(e) => setBookingInfo({ ...bookingInfo, name: e.target.value })}
                          placeholder="required"
                          className="w-full border-b border-black/10 py-4 focus:border-gold outline-none transition-colors font-serif text-xl placeholder:opacity-20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Mobile phone</label>
                        <input
                          type="tel"
                          value={bookingInfo.phone}
                          onChange={(e) => setBookingInfo({ ...bookingInfo, phone: e.target.value })}
                          placeholder="ex. 0812..."
                          className="w-full border-b border-black/10 py-4 focus:border-gold outline-none transition-colors font-serif text-xl placeholder:opacity-20"
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleWhatsApp}
                      disabled={!bookingInfo.name || !bookingInfo.phone}
                      className="btn-luxury w-full disabled:opacity-30 disabled:cursor-not-allowed group flex items-center justify-center gap-6 py-6"
                    >
                      Confirm via WhatsApp <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-all" />
                    </button>
                  </div>
                )}
              </div>

              {bookingStep > 1 && (
                <button
                  onClick={() => setBookingStep(prev => prev - 1)}
                  className="mt-12 text-[10px] uppercase tracking-[0.5em] font-bold opacity-30 hover:opacity-100 transition-opacity flex items-center gap-2"
                >
                  <span className="scale-x-[-1] inline-block">→</span> Previous Step
                </button>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
