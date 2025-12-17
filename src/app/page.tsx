import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <div className="relative z-10 bg-white">
        <CategoryGrid />
        
        {/* Handcrafted Section Placeholder */}
        <section className="py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-6">Master Craftsmanship</h2>
             <p className="max-w-2xl mx-auto text-neutral-500 mb-10 leading-relaxed">
               Each piece is meticulously handcrafted by skilled artisans, using only the finest ethically sourced materials to ensure longevity and timeless beauty.
             </p>
             <Link href="/about">
               <button className="border border-neutral-900 text-neutral-900 px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-neutral-900 hover:text-white transition-colors">
                 Read Our Story
               </button>
             </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
