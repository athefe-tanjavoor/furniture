"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
  "/images/hero/hero-4.jpg",
  "/images/hero/hero-5.jpg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
      {/* Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_IMAGES[currentIndex]}
              alt={`Luxury Interior ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority
              quality={80}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="block text-sm font-medium tracking-[0.2em] mb-4 uppercase drop-shadow-md">
            Handcrafted Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8 drop-shadow-lg">
            Timeless Design for <br /> Modern Living.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg leading-relaxed font-light drop-shadow-md">
            Discover our curated collection of premium furniture pieces, designed to bring elegance and comfort to your home.
          </p>
          
          <Link 
            href="/products" 
            className="inline-block bg-white text-neutral-900 px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-neutral-100 transition-colors shadow-lg"
          >
            Shop Collection
          </Link>
        </motion.div>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-4">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-12 h-[2px] transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80"
      >
        <span className="block text-[10px] tracking-widest uppercase mb-2 text-center">Scroll</span>
        <div className="w-[1px] h-12 bg-white/50 mx-auto" />
      </motion.div>
    </section>
  );
}
