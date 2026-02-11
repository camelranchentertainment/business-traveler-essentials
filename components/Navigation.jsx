import Link from 'next/link';
import { useState } from 'react';
import { categories } from '../data/products';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">✈️</span>
            <span className="font-bold text-xl text-gray-900">
              Business Traveler Essentials
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            
            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Categories ▾
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                {Object.values(categories).map((category) => (
                  <Link
                    key={category.slug}
                    href={`/category/${category.slug}`}
                    className="block px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center space-x-3">
                      <img src={category.icon} alt={category.name} className="w-8 h-8" />
                      <div>
                        <div className="font-medium text-gray-900">{category.name}</div>
                        <div className="text-xs text-gray-600">{category.description.substring(0, 40)}...</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            
            <Link href="/travel-tips" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Travel Tips
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            
            <div className="border-t border-gray-200 pt-3">
              <div className="text-sm font-semibold text-gray-500 mb-2">Categories</div>
              {Object.values(categories).map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="flex items-center space-x-2 py-2 pl-4 text-gray-700 hover:text-blue-600"
                >
                  <img src={category.icon} alt={category.name} className="w-6 h-6" />
                  <span>{category.name}</span>
                </Link>
              ))}
            </div>

            <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600 font-medium border-t border-gray-200 pt-3">
              About
            </Link>
            
            <Link href="/travel-tips" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
              Travel Tips
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
