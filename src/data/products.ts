export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  material: string;
  finish: string;
  price: string;
  image: string;
  images: string[];
  dimensions: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
}

const baseProducts: Product[] = [
  {
    id: 'sofa-1',
    name: 'Cloud Modular Sofa',
    slug: 'cloud-modular-sofa',
    category: 'sofas',
    description: 'Experience the ultimate in comfort with our Cloud Modular Sofa. Designed for modern living, it features deep seating and plush cushions.',
    material: 'Premium Velvet',
    finish: 'Charcoal Grey',
    price: '$2,999',
    image: '/images/cat-sofa.png',
    images: ['/images/cat-sofa.png', '/images/hero.png', '/images/cat-dining.png'],
    dimensions: 'L 280 x W 100 x H 85 cm',
  },
  {
    id: 'sofa-2',
    name: 'Tuscan Leather Sofa',
    slug: 'tuscan-leather-sofa',
    category: 'sofas',
    description: 'Handcrafted from Italian leather, the Tuscan Sofa brings a touch of rustic elegance to your living room.',
    material: 'Full Grain Leather',
    finish: 'Tan',
    price: '$4,500',
    image: '/images/hero.png',
    images: ['/images/hero.png', '/images/cat-sofa.png'],
    dimensions: 'L 240 x W 95 x H 80 cm',
  },
  {
    id: 'dining-1',
    name: 'Marble Oval Dining Table',
    slug: 'marble-oval-dining-table',
    category: 'dining',
    description: 'A statement piece for your dining room. Solid marble top with a sleek metal base.',
    material: 'Carrara Marble',
    finish: 'Polished White',
    price: '$3,200',
    image: '/images/cat-dining.png',
    images: ['/images/cat-dining.png', '/images/hero.png'],
    dimensions: 'L 220 x W 110 x H 75 cm',
  },
  {
    id: 'wardrobe-1',
    name: 'Minimalist Oak Wardrobe',
    slug: 'minimalist-oak-wardrobe',
    category: 'wardrobes',
    description: 'Clean lines and ample storage. This oak wardrobe is perfect for the modern bedroom.',
    material: 'Solid Oak',
    finish: 'Matte Natural',
    price: '$1,800',
    image: '/images/cat-sofa.png', // Placeholder
    images: ['/images/cat-sofa.png'],
    dimensions: 'W 180 x D 60 x H 220 cm',
  },
  {
    id: 'office-1',
    name: 'Executive Walnut Desk',
    slug: 'executive-walnut-desk',
    category: 'office-tables',
    description: 'Command attention with this executive desk. Features built-in cable management and leather inlay.',
    material: 'Walnut Wood',
    finish: 'Dark Walnut',
    price: '$2,400',
    image: '/images/cat-dining.png', // Placeholder
    images: ['/images/cat-dining.png'],
    dimensions: 'L 180 x W 80 x H 76 cm',
  },
  {
    id: 'bed-1',
    name: 'Royale Upholstered Bed',
    slug: 'royale-upholstered-bed',
    category: 'beds',
    description: 'Sleep in luxury with the Royale bed. Features a tall, tufted headboard and velvet upholstery.',
    material: 'Velvet & Solid Wood',
    finish: 'Navy Blue',
    price: '$3,500',
    image: '/images/hero.png', // Placeholder
    images: ['/images/hero.png'],
    dimensions: 'W 200 x L 220 x H 140 cm',
  },
  {
    id: 'popular-1',
    name: 'Signature Lounge Chair',
    slug: 'signature-lounge-chair',
    category: 'popular',
    description: 'Our best-selling lounge chair. Perfect for reading corners and living spaces.',
    material: 'Bouclé Fabric',
    finish: 'Cream',
    price: '$1,200',
    image: '/images/hero.png', // Placeholder
    images: ['/images/hero.png'],
    dimensions: 'W 80 x D 85 x H 90 cm',
  }
];

const baseCategories: Category[] = [
  { slug: 'sofas', name: 'Sofas', description: 'Comfort meets elegance in our curated sofa collection.', image: '/images/cat-sofa.png' },
  { slug: 'beds', name: 'Beds', description: 'Transform your bedroom into a sanctuary of rest.', image: '/images/hero.png' },
  { slug: 'dining', name: 'Dining', description: 'Create memorable moments with our exquisite dining tables.', image: '/images/cat-dining.png' },
  { slug: 'wardrobes', name: 'Wardrobes', description: 'Organize in style with our spacious and sleek wardrobes.', image: '/images/hero.png' },
  { slug: 'office-tables', name: 'Office Tables', description: 'Elevate your workspace with our premium office desks.', image: '/images/cat-dining.png' },
  { slug: 'popular', name: 'Popular Collections', description: 'Discover our most loved and sought-after pieces.', image: '/images/hero.png' },
];

// Helper to generate more data
const generateMoreData = () => {
  const extraCategories: Category[] = [];
  const extraProducts: Product[] = [];
  const categoryNames = ['Lighting', 'Rugs', 'Decor', 'Outdoor', 'Kitchen', 'Bath', 'Kids', 'Storage', 'Art', 'Mirrors'];

  // Add 10 more categories
  categoryNames.forEach((name, idx) => {
    const slug = name.toLowerCase();
    extraCategories.push({
      slug,
      name,
      description: `Premium ${name} collection.`,
      image: idx % 2 === 0 ? '/images/cat-sofa.png' : '/images/cat-dining.png',
    });

    // Add 10 products per new category (total 100 extra products)
    for (let i = 1; i <= 10; i++) {
      extraProducts.push({
        id: `${slug}-${i}`,
        name: `${name} Item ${i}`,
        slug: `${slug}-item-${i}`,
        category: slug,
        description: `This is a premium item in the ${name} collection.`,
        material: 'Premium Material',
        finish: 'Matte Finish',
        price: `$${(i * 100 + 500)}`,
        image: idx % 2 === 0 ? '/images/cat-sofa.png' : '/images/cat-dining.png',
        images: ['/images/cat-sofa.png'],
        dimensions: 'Standard Size',
      });
    }
  });

  return { extraCategories, extraProducts };
};

const { extraCategories, extraProducts } = generateMoreData();

export const categories = [...baseCategories, ...extraCategories];
export const products = [...baseProducts, ...extraProducts];
