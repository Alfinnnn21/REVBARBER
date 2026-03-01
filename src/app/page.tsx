"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scissors, Clock, MapPin, Phone, Instagram, Facebook, ArrowRight, Star, Quote, Zap, Wind } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const services = [
    { title: "HAIRCUT", icon: <Scissors className="w-8 h-8" />, desc: "Any cut to your taste followed by a professional finish." },
    { title: "SHAVING", icon: <Scissors className="w-8 h-8 rotate-45" />, desc: "For premium result, at our barbershop, we combine traditional." },
    { title: "STYLING", icon: <Wind className="w-8 h-8" />, desc: "Keep looking your best with our professional stylists." },
    { title: "TRIMMING", icon: <Zap className="w-8 h-8" />, desc: "Looking to try something new with your facial hair." },
  ];

  const barbers = [
    { name: "Marco V.", role: "Fade Specialist", image: "/images/ravbarber_hero_1772360063178.png" },
    { name: "Andra K.", role: "Classic Scissoring", image: "/images/haircut_service_1772360078172.png" },
  ];

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
        <button className="border-b border-white/30 pb-1 text-[10px] uppercase tracking-[0.3em] font-bold hover:border-white transition-all">
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
              <button className="btn-luxury">Explore Collection</button>
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
            <a href="#" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] group">
              Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
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
                <h4 className="text-white text-xl font-serif tracking-[0.2em] mb-6">{s.title}</h4>
                <p className="text-white/40 text-[11px] leading-relaxed mb-8 uppercase tracking-widest h-12">
                  {s.desc}
                </p>
                <button className="text-[10px] text-gold/80 font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:text-gold transition-colors">
                  Read More <ArrowRight className="w-3 h-3" />
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
              <button className="btn-luxury w-full">Claim your spot</button>
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

    </main>
  );
}
