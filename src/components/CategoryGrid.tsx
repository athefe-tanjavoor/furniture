"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { categories } from '@/data/products';

export default function CategoryGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
         <span className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-2 block">Collections</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900">Curated Categories</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="relative group overflow-hidden h-[400px]"
          >
            <Link href={`/products/${cat.slug}`} className="block h-full w-full">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={75}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-3xl font-serif font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {cat.name}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
