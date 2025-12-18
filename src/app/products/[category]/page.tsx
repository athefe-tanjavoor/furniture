import { notFound } from 'next/navigation';
import Image from 'next/image';
import ProductGrid from '@/components/ProductGrid';
import { products, categories } from '@/data/products';

// Define the type for the params prop
type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const category = categories.find((c) => c.slug === resolvedParams.category);
  if (!category) return { title: 'Category Not Found' };
  
  return {
    title: `${category.name} | Anjum Furnitures`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const category = categories.find((c) => c.slug === resolvedParams.category);
  
  if (!category) {
    notFound();
  }

  // Filter products: 
  // If category is 'popular', you might want a specific logic, but for now I'll use the 'popular' category tag or just show all if I wanted.
  // The data has a 'popular' category explicit item, or I can add a boolean 'isPopular'.
  // For now, I'll filter by exact category match, assuming I tagged items with 'popular' if they belong there, OR I can show random items.
  // The sample data has an item with category 'popular'.
  const categoryProducts = products.filter((p) => p.category === resolvedParams.category || (resolvedParams.category === 'popular' && p.category !== 'popular')); 
  // Wait, if I filter p.category === category, it maps 1:1.
  // For popular, I might want to show items from ALL categories that are marked popular.
  // But my data 'popular-1' has category 'popular'. 
  // Let's stick to simple strict filtering first.
  
  const displayProducts = products.filter((p) => p.category === resolvedParams.category);

  return (
    <main className="pt-20">
      {/* Category Hero */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-neutral-900 text-white overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4">{category.name}</h1>
          <p className="text-lg md:text-xl font-light text-neutral-200">{category.description}</p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {displayProducts.length > 0 ? (
          <ProductGrid products={displayProducts} />
        ) : (
           <div className="text-center py-20">
            <p className="text-neutral-500 text-lg">No products found in this category.</p>
           </div>
        )}
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}
