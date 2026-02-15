import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { categories } from '../data/products';

export default function Home() {

  return (
    <>
      <Head>
        <title>Business Traveler Essentials - Premium Travel Gear for Professionals</title>
        <meta name="description" content="Discover curated travel essentials for business professionals. From tech gear to luggage, find everything you need for productive business travel." />
        <meta name="keywords" content="business travel, travel essentials, business luggage, travel tech, professional travel gear" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />

        <main className="flex-grow">
          {/* Minimal Hero Section */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Premium Travel Gear
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                  Curated essentials for the professional business traveler
                </p>
              </div>
            </div>
          </section>

          {/* Categories Grid */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Shop by Category</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Luggage Category */}
                <Link href="/category/luggage">
                  <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <img 
                      src="https://m.media-amazon.com/images/I/81jytwD8odL._AC_SX679_.jpg"
                      alt="Luggage"
                      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-end p-4 sm:p-6 lg:p-8">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Luggage</h3>
                        <p className="text-gray-200 text-xs sm:text-sm">Premium carry-on and checked luggage</p>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* Backpacks Category */}
                <Link href="/category/backpacks">
                  <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <img 
                      src="https://m.media-amazon.com/images/I/51tujQGaEVL._AC_SL1000_.jpg"
                      alt="Backpacks"
                      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-end p-4 sm:p-6 lg:p-8">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Backpacks</h3>
                        <p className="text-gray-200 text-xs sm:text-sm">Professional travel backpacks</p>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* Tech Organizers Category */}
                <Link href="/category/tech-organizers">
                  <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <img 
                      src="https://m.media-amazon.com/images/I/715h98AKwDL._AC_SX466_.jpg"
                      alt="Tech Organizers"
                      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-end p-4 sm:p-6 lg:p-8">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Tech Organizers</h3>
                        <p className="text-gray-200 text-xs sm:text-sm">Cable bags and tech pouches</p>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* Charging Cables Category */}
                <Link href="/category/charging-cables">
                  <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <img 
                      src="https://m.media-amazon.com/images/I/61H3u4lvD0L._AC_SX466_.jpg"
                      alt="Charging Cables"
                      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-end p-4 sm:p-6 lg:p-8">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Charging Cables</h3>
                        <p className="text-gray-200 text-xs sm:text-sm">USB-C, Lightning, and more</p>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* Power Adapters Category */}
                <Link href="/category/power-adapters">
                  <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <img 
                      src="https://m.media-amazon.com/images/I/5164giE9fFL._AC_SX522_.jpg"
                      alt="Power Adapters"
                      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-end p-4 sm:p-6 lg:p-8">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Power Adapters</h3>
                        <p className="text-gray-200 text-xs sm:text-sm">Wall chargers and USB hubs</p>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* Portable Power Category */}
                <Link href="/category/portable-power">
                  <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <img 
                      src="https://m.media-amazon.com/images/I/71QrhaW+kAL._AC_SL1500_.jpg"
                      alt="Portable Power"
                      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-end p-4 sm:p-6 lg:p-8">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Portable Power</h3>
                        <p className="text-gray-200 text-xs sm:text-sm">Power banks and battery packs</p>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* Neck Pillows Category */}
                <Link href="/category/neck-pillows">
                  <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <img 
                      src="https://m.media-amazon.com/images/I/51193RXQ1SL._AC_SL1080_.jpg"
                      alt="Neck Pillows"
                      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-end p-4 sm:p-6 lg:p-8">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Neck Pillows</h3>
                        <p className="text-gray-200 text-xs sm:text-sm">Travel comfort and support</p>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* Packing Cubes Category */}
                <Link href="/category/packing-cubes">
                  <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <img 
                      src="https://m.media-amazon.com/images/I/91czenj1oWL._AC_SX679_.jpg"
                      alt="Packing Cubes"
                      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-end p-4 sm:p-6 lg:p-8">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Packing Cubes</h3>
                        <p className="text-gray-200 text-xs sm:text-sm">Compression bags and organizers</p>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* Laptop Sleeves Category */}
                <Link href="/category/laptop-sleeves">
                  <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <img 
                      src="https://m.media-amazon.com/images/I/71CRaMOcDvL._AC_SL1500_.jpg"
                      alt="Laptop Sleeves"
                      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-end p-4 sm:p-6 lg:p-8">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Laptop Sleeves</h3>
                        <p className="text-gray-200 text-xs sm:text-sm">Protective laptop cases</p>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* Headphones Category */}
                <Link href="/category/headphones">
                  <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <img 
                      src="https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SL1500_.jpg"
                      alt="Headphones"
                      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-end p-4 sm:p-6 lg:p-8">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Headphones</h3>
                        <p className="text-gray-200 text-xs sm:text-sm">Noise-canceling headphones and earbuds</p>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-16 bg-blue-600 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-8 text-blue-100">
                Get travel tips, product recommendations, and exclusive deals delivered to your inbox
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-blue-200 mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
