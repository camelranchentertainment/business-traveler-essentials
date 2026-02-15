import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Close mobile menu when route changes (auto-close on selection)
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer group">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">
                Business Traveler Essentials
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className={`text-sm font-medium transition-colors cursor-pointer ${
                router.pathname === '/' 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}>
                Home
              </span>
            </Link>
            <Link href="/about">
              <span className={`text-sm font-medium transition-colors cursor-pointer ${
                router.pathname === '/about' 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}>
                About
              </span>
            </Link>
            <Link href="/travel-tips">
              <span className={`text-sm font-medium transition-colors cursor-pointer ${
                router.pathname === '/travel-tips' 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}>
                Travel Tips
              </span>
            </Link>
            <Link href="/contact">
              <span className={`text-sm font-medium transition-colors cursor-pointer ${
                router.pathname === '/contact' 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}>
                Contact
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-all"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - auto-closes when you select an item */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/">
              <span 
                onClick={handleLinkClick}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                  router.pathname === '/' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Home
              </span>
            </Link>
            <Link href="/about">
              <span 
                onClick={handleLinkClick}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                  router.pathname === '/about' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                About
              </span>
            </Link>
            <Link href="/travel-tips">
              <span 
                onClick={handleLinkClick}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                  router.pathname === '/travel-tips' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Travel Tips
              </span>
            </Link>
            <Link href="/contact">
              <span 
                onClick={handleLinkClick}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                  router.pathname === '/contact' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
