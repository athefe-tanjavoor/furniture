import Image from 'next/image';

export const metadata = {
  title: 'About Us | Anjum Furnitures',
  description: 'Learn about our heritage, craftsmanship, and commitment to luxury furniture.',
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-neutral-900 text-white overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="About Anjum Furnitures"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
           <span className="text-xs font-medium tracking-[0.3em] uppercase mb-4 block text-neutral-300">Our Story</span>
           <h1 className="text-4xl md:text-7xl font-serif font-medium mb-6">Crafting Legacy</h1>
           <p className="text-lg font-light text-neutral-200">Where timeless design meets exceptional artistry.</p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-square bg-neutral-100">
             <Image
               src="/images/cat-sofa.png"
               alt="Craftsmanship"
               fill
               className="object-cover"
             />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-neutral-900">A Tradition of Excellence</h2>
            <div className="w-12 h-0.5 bg-neutral-900"></div>
            <p className="text-neutral-600 leading-relaxed text-lg">
              Founded on the principles of quality and authenticity, Anjum Furnitures has been redefining luxury living for over two decades. We believe that furniture is not just functional; it is an expression of art that shapes the way we live.
            </p>
            <p className="text-neutral-600 leading-relaxed text-lg">
              Our journey began with a simple vision: to bridge the gap between traditional craftsmanship and modern aesthetics. Today, we collaborate with master artisans who bring generations of skill to every piece they create.
            </p>
          </div>
        </div>
      </section>

      {/* Values / Why Choose Us */}
      <section className="bg-neutral-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-neutral-900">The Anjum Furnitures Difference</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-medium">Uncompromising Quality</h3>
              <p className="text-neutral-600">We source only the finest materials, from premium Italian leathers to sustainable solid woods.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-medium">Bespoke Design</h3>
              <p className="text-neutral-600">Every space is unique. Our customization options ensure your furniture fits your lifestyle perfectly.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-medium">Lifetime Durability</h3>
              <p className="text-neutral-600">Built to last, our pieces are heirlooms designed to be cherished for generations.</p>
            </div>
          </div>
        </div>
      </section>
      
       {/* Image Strip */}
       <section className="grid grid-cols-2 md:grid-cols-4 h-64 md:h-96">
         {['/images/cat-sofa.png', '/images/cat-dining.png', '/images/hero.png', '/images/cat-sofa.png'].map((src, idx) => (
           <div key={idx} className="relative h-full w-full">
             <Image src={src} alt="Lifestyle" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
           </div>
         ))}
       </section>
    </main>
  );
}
