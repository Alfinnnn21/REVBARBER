"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Scissors, Clock, MapPin, Phone, Instagram, Facebook, ArrowRight, Star, Quote, Zap, Wind } from "lucide-react";
import { useRef, useState } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const services = [
    { title: "SIGNATURE WASH & CUT", icon: <Scissors className="w-8 h-8" />, desc: "Premium washing + master cutting with razor finish.", price: "Rp 180.000", id: "sig_cut" },
    { title: "CLASSIC HAIRCUT", icon: <Scissors className="w-8 h-8 rotate-45" />, desc: "Traditional cutting followed by a professional finish.", price: "Rp 150.000", id: "classic_cut" },
    { title: "ROYAL SHAVING", icon: <Wind className="w-8 h-8" />, desc: "Hot towel treatment with double edge razor shave.", price: "Rp 120.000", id: "royal_shave" },
    { title: "BEARD SCULPTING", icon: <Zap className="w-8 h-8" />, desc: "Precise beard trimming and shaping.", price: "Rp 90.000", id: "beard_sculpt" },
    { title: "HEAD TREATMENT", icon: <Scissors className="w-8 h-8" />, desc: "Exfoliating wash with relaxing head massage.", price: "Rp 130.000", id: "head_treat" },
    { title: "GROOMING & STYLING", icon: <Wind className="w-8 h-8" />, desc: "Quick wash and professional hair styling.", price: "Rp 80.000", id: "styling" },
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
    <main ref={containerRef} className="bg-white text-foreground selection:bg-gold selection:text-white overflow-x-hidden pb-safe">

      {/* Dynamic Navigation */}
      <nav className="fixed top-0 z-[100] w-full mix-blend-difference py-6 px-4 md:py-8 md:px-12 flex justify-between items-center text-white">
        <div className="flex items-center gap-2 md:gap-3">
          <Scissors className="w-4 h-4 md:w-5 md:h-5 text-gold" />
          <span className="text-sm md:text-xl font-serif font-bold tracking-[0.2em] md:tracking-[0.3em]">RAVBARBER</span>
        </div>
        <div className="hidden lg:flex gap-12 text-prestige">
          <a href="#about" className="hover:text-gold transition-colors">Experience</a>
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#barbers" className="hover:text-gold transition-colors">Masters</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
        <button
          onClick={() => handleBooking()}
          className="border-b border-white/30 pb-1 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold hover:border-white transition-all"
        >
          Reservations
        </button>
      </nav>

      {/* Hero: Editorial Style */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ravbarber_hero_1772360063178.png"
            alt="Hero"
            fill
            className="object-cover opacity-90 brightness-[0.8] md:brightness-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
        </div>

        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:block">
          <span className="text-sideways text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">
            Est. 2024 — Premium Grooming Lounge
          </span>
        </div>

        <div className="relative z-10 text-center container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
          >
            <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold mb-4 md:mb-6 text-white opacity-80">Redefining Classics</h2>
            <h1 className="text-5xl md:text-8xl font-serif leading-tight md:leading-none mb-8 md:mb-10 tracking-tighter text-white">
              Crafting <br /> <span className="italic pl-6 md:pl-24">Confidence</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <button onClick={() => handleBooking()} className="btn-luxury w-full md:w-auto text-white">Explore Collection</button>
            </div>
          </motion.div>
        </div>

        <div className="absolute right-12 bottom-24 text-right hidden lg:block">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 leading-loose">
            Luxury Standard<br />Exquisite Detail<br />Timeless Style
          </p>
        </div>
      </section>

      {/* Brand Experience: Editorial Asymmetric */}
      <section id="about" className="section-padding container-custom grid md:grid-cols-12 gap-8 md:gap-16 items-center overflow-hidden">
        <div className="md:col-span-12 lg:col-span-5 relative order-2 lg:order-1">
          <div className="absolute -top-16 md:-top-20 -left-10 md:-left-16 text-8xl md:text-[12rem] font-serif text-outline select-none z-0 opacity-40">RAV</div>
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.5, ease: "circOut" }}
            viewport={{ once: true }}
            className="relative z-10 aspect-[4/5] md:aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-[0_50px_100px_rgba(0,0,0,0.1)]"
          >
            <Image src="/images/haircut_service_1772360078172.png" alt="Detail" fill className="object-cover scale-110" />
          </motion.div>
        </div>
        <div className="lg:col-span-1 hidden lg:block" />
        <div className="md:col-span-12 lg:col-span-6 space-y-8 md:space-y-12 order-1 lg:order-2">
          <h3 className="text-prestige text-gold">The Philosophy</h3>
          <h2 className="text-5xl md:text-[5.5rem] font-serif leading-[0.9] md:leading-none">The art of <br /><span className="italic pl-12 md:pl-24">Precision.</span></h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-light max-w-lg">
            We don't just cut hair; we curate style. RAVBARBER is the destination where heritage meets contemporary aesthetics.
            A sanctuary for those who value the language of excellence.
          </p>
          <div className="pt-4 md:pt-8">
            <a href="#services" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] group text-gold">
              Our Services <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Unified Menu: Editorial Price List */}
      <section id="services" className="bg-luxury py-24 md:py-40 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Scissors className="w-full h-full rotate-12 -mr-32" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <h3 className="text-prestige text-gold mb-6">The Menu</h3>
              <h2 className="text-5xl md:text-8xl font-serif">Price List</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-16">
              {services.map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleBooking(s.id)}
                  className="group flex flex-col items-start gap-3 w-full text-left"
                >
                  <div className="flex justify-between items-end w-full border-b border-white/10 pb-4 group-hover:border-gold/50 transition-colors duration-500">
                    <h4 className="text-lg md:text-xl font-serif tracking-wide group-hover:text-gold transition-colors">{s.title}</h4>
                    <span className="text-gold font-bold text-sm tracking-widest">{s.price}</span>
                  </div>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 leading-relaxed font-light">
                    {s.desc}
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-20 md:mt-32 text-center">
              <p className="text-prestige text-white/30 mb-8 italic">Custom packages available upon request</p>
              <button
                onClick={() => handleBooking()}
                className="btn-luxury border-white/10 text-white hover:border-gold"
              >
                Inquire Full Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32 bg-foreground text-white flex items-center justify-center overflow-hidden relative">
        <Quote className="absolute -top-10 -left-10 w-48 h-48 md:w-96 md:h-96 opacity-5 rotate-12" />
        <div className="max-w-4xl px-6 text-center space-y-8 md:space-y-12 relative z-10">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-gold text-gold" />)}
          </div>
          <h2 className="text-2xl md:text-5xl font-serif leading-snug italic font-light">
            "The atmosphere is pure luxury. It's not just about the haircut,
            it's the way they treat you. A true gentlemen's sanctuary."
          </h2>
          <div className="space-y-2">
            <div className="w-8 md:w-12 h-[1px] bg-gold mx-auto" />
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-bold text-gold">Johnathan Miller</p>
          </div>
        </div>
      </section>

      {/* Masters: Balanced Grid */}
      <section id="barbers" className="section-padding container-custom">
        <div className="text-center mb-24 md:mb-32">
          <h3 className="text-prestige text-gold mb-6">The Hands</h3>
          <h2 className="text-5xl md:text-8xl font-serif leading-none">Meet the <br /><span className="italic">Masters</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {barbers.map((b, i) => (
            <div key={i} className="group relative overflow-hidden luxury-card">
              <div className="aspect-[3/4] md:aspect-[4/5] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                <Image src={b.image} alt={b.name} fill className="object-cover scale-110 group-hover:scale-100 transition-all duration-1000" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-luxury via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
                <p className="text-prestige mb-3 text-white/60">{b.role}</p>
                <h4 className="text-3xl md:text-5xl font-serif leading-none">{b.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer: Balanced & Ergonomic */}
      <footer id="contact" className="section-padding bg-white container-custom border-t border-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-8 md:space-y-12">
            <div className="flex items-center gap-3">
              <Scissors className="w-6 h-6 text-gold" />
              <span className="text-xl md:text-2xl font-serif font-bold tracking-[0.2em]">RAVBARBER</span>
            </div>
            <p className="text-base md:text-lg leading-relaxed font-light opacity-60">
              Visit our lounge for a session that will redefine your standard of grooming.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-8 text-[9px] md:text-[10px] tracking-widest uppercase font-medium">
              <div className="flex flex-col gap-2">
                <span className="opacity-40">Visit Us</span>
                <span>123 Gentlemen Street</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="opacity-40">Hours</span>
                <span>10:00 — 21:00 Daily</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-8">
              <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">Contact</h5>
              <div className="flex flex-col gap-3 text-sm font-light opacity-60">
                <p>+62 812-3456-7890</p>
                <p>hello@ravbarber.com</p>
              </div>
            </div>
            <div className="space-y-6 md:space-y-8">
              <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">Action</h5>
              <button onClick={() => handleBooking()} className="btn-luxury w-full py-5">Fast Booking</button>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between gap-6 text-[9px] uppercase tracking-[0.2em] opacity-30 text-center md:text-left">
          <span>&copy; 2024 RAVBARBER. INC.</span>
          <div className="flex justify-center md:justify-end gap-6 md:gap-8">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <a href="https://wa.me/6281234567890" target="_blank" className="float-wa hidden md:flex items-center gap-3">
        <Phone className="w-4 h-4" />
        RESERVATION
      </a>

      {/* Mobile Sticky Bar - More Ergonomic */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-[150] md:hidden glass-dark pb-safe">
        <button
          onClick={() => handleBooking()}
          className="w-full bg-gold text-white py-4 md:py-5 font-bold uppercase tracking-[0.3em] text-[10px] shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
        >
          <Zap className="w-4 h-4" />
          Book Appointment
        </button>
      </div>

      {/* Booking Modal: Enhanced for Mobile */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[200] flex items-end md:items-center justify-center p-0 md:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white text-foreground p-6 md:p-12 shadow-2xl rounded-t-3xl md:rounded-none overflow-y-auto max-h-[92vh] md:max-h-[90vh] pb-safe"
            >
              {/* Mobile Handle */}
              <div className="w-12 h-1 bg-black/10 rounded-full mx-auto mb-8 md:hidden" />

              <button
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-6 right-6 md:top-8 md:right-8 text-black/20 hover:text-black hover:rotate-90 transition-all duration-300 p-2"
              >
                <Zap className="w-6 h-6 md:w-8 md:h-8 rotate-45" />
              </button>

              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <span className="h-[1px] w-6 md:w-8 bg-gold" />
                  <h3 className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-bold text-gold">Step 0{bookingStep} / 04</h3>
                </div>
                <h2 className="text-2xl md:text-4xl font-serif">
                  {bookingStep === 1 && "Select Service"}
                  {bookingStep === 2 && "Choose Master"}
                  {bookingStep === 3 && "Pick Schedule"}
                  {bookingStep === 4 && "Finalize Detail"}
                </h2>
              </div>

              <div className="min-h-[300px] md:min-h-[350px]">
                {/* Step 1: Services (Compact) */}
                {bookingStep === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                      {services.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => toggleService(s.id)}
                          className={`p-3 md:p-5 text-left border transition-all duration-300 relative group active:scale-98 ${selectedServices.includes(s.id) ? 'border-gold bg-soft shadow-inner' : 'border-black/5 hover:border-gold/30'}`}
                        >
                          <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start">
                              <p className="text-[8px] md:text-[9px] uppercase tracking-widest font-bold text-gold">{s.price}</p>
                              {selectedServices.includes(s.id) && (
                                <Zap className="w-2.5 h-2.5 text-gold fill-gold" />
                              )}
                            </div>
                            <h4 className="text-sm md:text-lg font-serif">{s.title}</h4>
                          </div>
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setBookingStep(2)}
                      disabled={selectedServices.length === 0}
                      className="btn-luxury w-full disabled:opacity-30 flex items-center justify-center gap-4 py-3 md:py-5 mt-2"
                    >
                      Confirm ({selectedServices.length}) <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Step 2: Barber */}
                {bookingStep === 2 && (
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {barbers.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => { setSelectedBarber(b.id); setBookingStep(3); }}
                        className={`p-4 md:p-6 text-left border transition-all duration-300 overflow-hidden relative ${selectedBarber === b.id ? 'border-gold bg-soft' : 'border-black/5'}`}
                      >
                        <div className="relative z-10">
                          <h4 className="text-sm md:text-lg font-serif">{b.name}</h4>
                        </div>
                      </button>
                    ))}
                    <button
                      onClick={() => { setSelectedBarber(null); setBookingStep(3); }}
                      className={`p-4 md:p-6 text-left border transition-all duration-300 relative ${selectedBarber === null ? 'border-gold bg-soft' : 'border-black/5'}`}
                    >
                      <h4 className="text-sm md:text-lg font-serif">Any Master</h4>
                    </button>
                  </div>
                )}

                {/* Step 3: Time */}
                {bookingStep === 3 && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-3">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => { setSelectedTime(t); setBookingStep(4); }}
                        className={`py-5 px-2 text-center text-[10px] font-bold tracking-widest border transition-all duration-300 ${selectedTime === t ? 'border-gold bg-gold text-white' : 'border-black/5'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 4: Info */}
                {bookingStep === 4 && (
                  <div className="space-y-6 md:space-y-8">
                    {/* Booking Summary */}
                    <div className="bg-soft/50 p-6 md:p-8 space-y-4 md:space-y-6 border border-black/[0.03]">
                      <div className="space-y-1">
                        <p className="text-prestige text-gold">Services Selected</p>
                        <p className="text-sm md:text-base font-serif">
                          {services
                            .filter(s => selectedServices.includes(s.id))
                            .map(s => s.title)
                            .join(", ")}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <p className="text-prestige text-gold">Master</p>
                          <p className="text-sm md:text-base font-serif">
                            {barbers.find(b => b.id === selectedBarber)?.name || "Any Master"}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-prestige text-gold">Schedule</p>
                          <p className="text-sm md:text-base font-serif">{selectedTime}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:gap-6">
                      <div className="space-y-1">
                        <label className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold opacity-30">Full Name</label>
                        <input
                          type="text"
                          value={bookingInfo.name}
                          onChange={(e) => setBookingInfo({ ...bookingInfo, name: e.target.value })}
                          placeholder="Your identity"
                          className="w-full border-b border-black/10 py-2 md:py-3 focus:border-gold outline-none transition-colors font-serif text-base md:text-lg"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold opacity-30">WhatsApp Number</label>
                        <input
                          type="tel"
                          value={bookingInfo.phone}
                          onChange={(e) => setBookingInfo({ ...bookingInfo, phone: e.target.value })}
                          placeholder="ex. 0812..."
                          className="w-full border-b border-black/10 py-2 md:py-3 focus:border-gold outline-none transition-colors font-serif text-base md:text-lg"
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleWhatsApp}
                      disabled={!bookingInfo.name || !bookingInfo.phone}
                      className="btn-luxury w-full flex items-center justify-center gap-4 py-5"
                    >
                      Confirm Order <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>

              {bookingStep > 1 && (
                <button
                  onClick={() => setBookingStep(prev => prev - 1)}
                  className="mt-8 md:mt-12 text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-bold opacity-30 p-2"
                >
                  ← Previous
                </button>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
