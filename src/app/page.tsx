"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Scissors, Clock, MapPin, Phone, Instagram, Facebook, ChevronRight, Star } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: "Gentlemen's Haircut",
      price: "Rp 150k",
      description: "Precision cut tailored to your face shape and style.",
      image: "/images/haircut_service_1772360078172.png"
    },
    {
      title: "Royal Beard Shave",
      price: "Rp 100k",
      description: "Traditional hot towel shave with premium grooming oils.",
      image: "/images/beard_shave_service_1772360164688.png"
    },
    {
      title: "Signature Styling",
      price: "Rp 75k",
      description: "Professional styling using high-end pomades and clays.",
      image: "/images/ravbarber_hero_1772360063178.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full glass py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Scissors className="text-gold w-6 h-6" />
          <span className="text-xl font-serif font-bold tracking-widest text-gold">RAVBARBER</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-foreground/80">
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#pricing" className="hover:text-gold transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
        <button className="gold-bg px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all">
          Book Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ravbarber_hero_1772360063178.png"
            alt="Barbershop Atmosphere"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-4 tracking-tighter text-foreground">
              The Art of <br /> <span className="gold-gradient">Grooming</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 font-light tracking-wide">
              Where classic craftsmanship meets modern style. Experience the pinnacle of gentlemen's grooming.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="gold-bg px-10 py-4 text-sm font-bold uppercase tracking-widest rounded-sm">
                Explore Services
              </button>
              <button className="border border-gold text-gold px-10 py-4 text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-gold/10 transition-all">
                Our Story
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-[1px] h-12 bg-gold"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our <span className="text-gold">Services</span></h2>
            <div className="w-24 h-[2px] bg-gold mx-auto mb-6"></div>
            <p className="text-foreground/60 max-w-xl mx-auto">
              We provide a range of specialized grooming services designed for the modern man.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-sm bg-background border border-gold/10 hover:border-gold/30 transition-all"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold tracking-wide uppercase">{service.title}</h3>
                    <span className="text-gold font-bold">{service.price}</span>
                  </div>
                  <p className="text-foreground/60 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-2 group/btn">
                    Details <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Price <span className="text-gold">List</span></h2>
            <p className="text-foreground/60">Transparency in our quality craftsmanship.</p>
          </motion.div>

          <div className="space-y-6">
            {[
              { label: "Classic Haircut", price: "150k" },
              { label: "Beard Trim & Detail", price: "100k" },
              { label: "Head Shave", price: "120k" },
              { label: "Clean Shave", price: "90k" },
              { label: "Kid's Cut (Under 12)", price: "100k" },
              { label: "Senior's Cut", price: "110k" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between border-b border-gold/10 pb-4 group hover:border-gold/40 transition-colors"
              >
                <span className="text-lg font-medium tracking-wide group-hover:text-gold transition-colors">{item.label}</span>
                <div className="flex-grow mx-4 border-t border-dotted border-gold/20"></div>
                <span className="text-xl font-serif font-bold text-gold">Rp {item.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-serif font-bold mb-6">What They <br /> <span className="text-gold">Say About Us</span></h2>
              <div className="space-y-8">
                {[1, 2].map((_, i) => (
                  <div key={i} className="glass p-8 rounded-sm">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-gold text-gold" />)}
                    </div>
                    <p className="italic text-foreground/80 mb-4 font-light">
                      "The attention to detail at RAVBARBER is world-class. I've never had a better fade. The atmosphere is just the icing on the cake."
                    </p>
                    <div className="font-bold text-sm uppercase tracking-widest">— James Anderson</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="relative h-[500px] rounded-sm overflow-hidden"
            >
              <Image
                src="/images/ravbarber_hero_1772360063178.png"
                alt="Happy Client"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-white py-24 px-6 md:px-12 border-t border-gold/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Scissors className="text-gold w-8 h-8" />
              <span className="text-2xl font-serif font-bold tracking-widest text-gold">RAVBARBER</span>
            </div>
            <p className="text-foreground/50 max-w-sm mb-8 leading-relaxed">
              Experience the best in gentlemen's grooming. Established with a passion for quality and style.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-6">Location</h4>
            <div className="flex items-start gap-3 text-foreground/70">
              <MapPin className="w-5 h-5 text-gold shrink-0" />
              <p className="text-sm">123 Gentlemen Street,<br />Luxury District, City 45678</p>
            </div>
            <div className="flex items-center gap-3 text-foreground/70">
              <Phone className="w-5 h-5 text-gold shrink-0" />
              <p className="text-sm">+62 812-3456-7890</p>
            </div>
            <div className="flex items-center gap-3 text-foreground/70">
              <Clock className="w-5 h-5 text-gold shrink-0" />
              <p className="text-sm">Daily: 10:00 AM — 09:00 PM</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <a href="#about" className="block text-sm text-foreground/60 hover:text-gold transition-colors">About Us</a>
            <a href="#services" className="block text-sm text-foreground/60 hover:text-gold transition-colors">Services</a>
            <a href="#pricing" className="block text-sm text-foreground/60 hover:text-gold transition-colors">Pricing</a>
            <a href="#contact" className="block text-sm text-foreground/60 hover:text-gold transition-colors">Book Appointment</a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gold/5 text-center text-xs text-foreground/30 uppercase tracking-[0.2em]">
          &copy; 2024 RAVBARBER. All Rights Reserved. Crafted with passion.
        </div>
      </footer>
    </div>
  );
}

