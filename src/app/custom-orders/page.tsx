import { Ruler, PenTool, Factory, Truck } from 'lucide-react';
import EnquiryForm from '@/components/EnquiryForm';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: 'Share Requirement',
    description: 'Tell us your vision. Share sketches, room photos, or inspiration images.',
    icon: Ruler,
  },
  {
    id: 2,
    title: 'Design Approval',
    description: 'We create a detailed design and quote for your approval.',
    icon: PenTool,
  },
  {
    id: 3,
    title: 'Manufacturing',
    description: 'Our master craftsmen bring your custom piece to life using premium materials.',
    icon: Factory,
  },
  {
    id: 4,
    title: 'Delivery & Install',
    description: 'We deliver and install your furniture with white-glove service.',
    icon: Truck,
  },
];

export const metadata = {
  title: 'Custom Orders | Luxe Furnishings',
  description: 'Bespoke furniture designed for your unique space.',
};

export default function CustomOrdersPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-neutral-900 text-white overflow-hidden">
        <Image
          src="/images/hero.png" // Placeholder or specific custom order image
          alt="Custom Furniture"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">Bespoke Creations</h1>
          <p className="text-lg md:text-xl font-light text-neutral-200">Designed by you, crafted by us.</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-2 block">The Process</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-serif font-medium mb-3">{step.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">Start Your Project</h2>
          <p className="text-neutral-600">Fill out the form below to get started with your custom order.</p>
        </div>
        
        <div className="bg-white p-8 md:p-12 border border-neutral-100 shadow-xl rounded-sm">
          <EnquiryForm type="custom" />
        </div>
      </section>
    </main>
  );
}
