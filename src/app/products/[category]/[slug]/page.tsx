import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products, categories } from '@/data/products';
import { ArrowLeft, Check, Phone } from 'lucide-react';

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);
  if (!product) return { title: 'Product Not Found' };
  
  return {
    title: `${product.name} | Luxe Furnishings`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(`Hi, I'm interested in the ${product.name}. Please provide more details.`);
  const whatsappLink = `https://wa.me/1234567890?text=${whatsappMessage}`; // Replace with actual number

  return (
    <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      {/* Breadcrumb / Back */}
      <div className="mb-8">
        <Link href={`/products/${product.category}`} className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {categories.find(c => c.slug === product.category)?.name || 'Products'}
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
             <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Thumbnails (Static for now, but logical) */}
          <div className="grid grid-cols-3 gap-4">
            {product.images && product.images.length > 0 ? product.images.map((img, idx) => (
              <div key={idx} className="relative aspect-square bg-neutral-100 cursor-pointer hover:opacity-80 transition-opacity">
                <Image
                  src={img}
                  alt={`${product.name} view ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            )) : (
              // Fallback if no extra images
              [1, 2].map((i) => (
                 <div key={i} className="relative aspect-square bg-neutral-100 opacity-50"></div>
              ))
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
           <span className="text-sm font-medium tracking-widest uppercase text-neutral-500 mb-2">{categories.find(c => c.slug === product.category)?.name}</span>
           <h1 className="text-4xl font-serif font-medium text-neutral-900 mb-6">{product.name}</h1>
           
           <div className="prose prose-neutral mb-8 text-neutral-600">
             <p>{product.description}</p>
           </div>

           {/* Specs */}
           <div className="border-t border-b border-neutral-200 py-6 mb-8 space-y-4">
             <div className="grid grid-cols-3 gap-4">
               <span className="text-sm font-semibold text-neutral-900">Material</span>
               <span className="col-span-2 text-sm text-neutral-600">{product.material || 'N/A'}</span>
             </div>
             <div className="grid grid-cols-3 gap-4">
               <span className="text-sm font-semibold text-neutral-900">Finish</span>
               <span className="col-span-2 text-sm text-neutral-600">{product.finish || 'N/A'}</span>
             </div>
             <div className="grid grid-cols-3 gap-4">
               <span className="text-sm font-semibold text-neutral-900">Dimensions</span>
               <span className="col-span-2 text-sm text-neutral-600">{product.dimensions || 'N/A'}</span>
             </div>
           </div>

           {/* Delivery Note */}
           <div className="bg-neutral-50 p-4 mb-8 rounded-sm">
             <div className="flex items-start gap-3">
               <Check className="w-5 h-5 text-green-600 mt-0.5" />
               <div>
                 <h4 className="text-sm font-medium text-neutral-900">Made to Order</h4>
                 <p className="text-xs text-neutral-600 mt-1">This piece is handcrafted specifically for you. Estimated delivery: 4-6 weeks.</p>
               </div>
             </div>
           </div>

           {/* Actions */}
           <div className="flex flex-col gap-4 mt-auto">
             <a 
               href={whatsappLink}
               target="_blank"
               rel="noopener noreferrer"
               className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-4 text-sm font-medium uppercase tracking-wider hover:bg-green-700 transition-colors"
             >
               <Phone className="w-4 h-4" />
               Enquire via WhatsApp
             </a>
             <Link href="/contact" className="w-full">
               <button className="w-full bg-neutral-900 text-white py-4 text-sm font-medium uppercase tracking-wider hover:bg-neutral-800 transition-colors">
                 Enquire / Request Quote
               </button>
             </Link>
           </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}
