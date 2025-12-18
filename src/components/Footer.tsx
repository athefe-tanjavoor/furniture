import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-50 pt-20 pb-10 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="tex-xl font-serif font-bold">Anjum Furnitures</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Crafting timeless furniture pieces that elevate your living space with elegance and comfort.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Collections</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link href="/categories/living" className="hover:text-neutral-900 transition-colors">Living Room</Link></li>
              <li><Link href="/categories/bedroom" className="hover:text-neutral-900 transition-colors">Bedroom</Link></li>
              <li><Link href="/categories/dining" className="hover:text-neutral-900 transition-colors">Dining</Link></li>
              <li><Link href="/categories/study" className="hover:text-neutral-900 transition-colors">Study</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link href="/about" className="hover:text-neutral-900 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-neutral-900 transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-neutral-900 transition-colors">Careers</Link></li>
              <li><Link href="/terms" className="hover:text-neutral-900 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Newsletter</h4>
            <p className="text-sm text-neutral-500 mb-4">Subscribe for latest design trends.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 bg-white border border-neutral-200 px-4 py-2 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
              />
              <button className="bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200 text-xs text-neutral-400">
          <p>&copy; 2024 Anjum Furnitures. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-neutral-900">Instagram</Link>
            <Link href="#" className="hover:text-neutral-900">Pinterest</Link>
            <Link href="#" className="hover:text-neutral-900">Twitter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
