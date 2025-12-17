export const products = [
  {
    id: 'sofa-cloud-beige',
    name: 'Cloud Modular Sofa',
    category: 'sofas',
    price: '$4,200',
    description: 'Experience the sensation of floating with our Cloud Modular Sofa. Upholstered in premium Italian linen, its deep seating and plush down-filled cushions offer unparalleled comfort. The modular design allows you to customize the layout to fit your space perfectly.',
    dimensions: '120"W x 40"D x 32"H',
    materials: 'Italian Linen, Down Feathers, Kiln-Dried Hardwood',
    images: ['/images/cat-sofa.png', '/images/hero.png'],
  },
  {
    id: 'dining-marble-oval',
    name: 'Carrara Oval Dining Table',
    category: 'dining',
    price: '$3,800',
    description: 'A masterpiece of minimalism, this oval dining table features a solid Carrara marble top with subtle grey veining. Supported by a sculptural pedestal base, it seats up to eight guests comfortably and serves as a stunning focal point for any dining room.',
    dimensions: '96"L x 48"W x 30"H',
    materials: 'Solid Carrara Marble, Brushed Brass Base',
    images: ['/images/cat-dining.png', '/images/hero.png'],
  },
  {
    id: 'bed-minimal-frame',
    name: 'Serene Platform Bed',
    category: 'beds',
    price: '$2,900',
    description: 'Sleep in serenity with our minimal platform bed. The low-profile silhouette and clean lines create a calming atmosphere. Crafted from solid white oak with a matte natural finish.',
    dimensions: 'King: 80"W x 84"L x 35"H',
    materials: 'Solid White Oak, Birch Slats',
    images: ['/images/hero.png'],
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};
