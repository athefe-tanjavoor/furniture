import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  image: string;
  material?: string;
  finish?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group block">
      <Link href={`/products/${product.category}/${product.slug}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Quick Actions Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col gap-2">
            <button className="w-full bg-white text-neutral-900 py-3 text-xs font-medium uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-colors shadow-lg">
              View Details
            </button>
            <Link href="/contact" className="block w-full">
              <button className="w-full bg-neutral-900 text-white py-3 text-xs font-medium uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-lg">
                Enquire Now
              </button>
            </Link>
          </div>
        </div>
      </Link>
      <div className="text-center">
        <h3 className="text-base font-serif font-medium text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors">
          <Link href={`/products/${product.category}/${product.slug}`}>
            {product.name}
          </Link>
        </h3>
        {(product.material || product.finish) && (
          <p className="text-sm font-light text-neutral-500">
            {[product.material, product.finish].filter(Boolean).join(' / ')}
          </p>
        )}
      </div>
    </div>
  );
}
