'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, ShoppingBag } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Products', 
    href: '/products',
    dropdown: [
      { name: 'Sofas', href: '/products/sofas' },
      { name: 'Beds', href: '/products/beds' },
      { name: 'Dining', href: '/products/dining' },
      { name: 'Wardrobes', href: '/products/wardrobes' },
      { name: 'Office Tables', href: '/products/office-tables' },
      { name: 'Popular Collections', href: '/products/popular' },
    ]
  },
  { name: 'Custom Orders', href: '/custom-orders' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-neutral-200 py-4 shadow-sm'
            : 'bg-transparent border-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-neutral-900">
            LUXE.
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setHoveredDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setHoveredDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={clsx(
                    'text-sm font-medium transition-colors flex items-center gap-1',
                    pathname === link.href || (link.dropdown && pathname.startsWith(link.href)) 
                      ? 'text-neutral-900 font-semibold'
                      : 'text-neutral-600 hover:text-neutral-900'
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {hoveredDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-56 bg-white border border-neutral-100 shadow-lg mt-2 rounded-sm overflow-hidden"
                      >
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Icons & Mobile Toggle */}
          <div className="flex items-center space-x-6">
            <button className="text-neutral-600 hover:text-neutral-900 transition-colors hidden sm:block">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/contact" className="hidden sm:block">
               <button className="px-5 py-2 bg-neutral-900 text-white text-xs font-medium tracking-wider uppercase hover:bg-neutral-800 transition-all">
                  Enquire
               </button>
            </Link>
            <button
              className="md:hidden text-neutral-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl flex flex-col justify-center items-center md:hidden"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col items-center">
                  <Link
                    href={link.href}
                    onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif text-neutral-900 hover:text-neutral-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="mt-4 flex flex-col items-center space-y-3">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-lg text-neutral-500 hover:text-neutral-900"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
