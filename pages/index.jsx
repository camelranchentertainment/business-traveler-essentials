import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts, categories } from '../data/products';

export default function Home() {
  const featuredProducts = getFeaturedProducts(6);

  return (
    <>
      <Head>
        <title>Business Traveler Essentials - Premium Travel Gear for Professionals</title>
        <meta name="description" content="Discover curated travel essentials for business professionals. From tech gear to luggage, find everything you need for productive business travel." />
        <meta name="keywords" content="business travel, travel essentials, business luggage, travel tech, professional travel gear" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navigation />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative bg-gray-900 text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80"
                alt="Travel background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-indigo-900/90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Travel Smarter, Work Better
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  Curated essentials for the modern business traveler. From boardroom to airport, we've got you covered.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="#featured-products" 
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center shadow-lg"
                  >
                    Shop Featured Products
                  </Link>
                  <Link 
                    href="/travel-tips" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                  >
                    Travel Tips & Guides
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Value Propositions */}
          <section className="py-12 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="font-semibold text-lg mb-2">Expertly Curated</h3>
                  <p className="text-gray-600">Every product tested and recommended by experienced business travelers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⭐</div>
                  <h3 className="font-semibold text-lg mb-2">Top-Rated Products</h3>
                  <p className="text-gray-600">Only products with 4.5+ star ratings and thousands of reviews</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-semibold text-lg mb-2">Time-Saving</h3>
                  <p className="text-gray-600">Skip the research - we've done the work for you</p>
                </div>
              </div>
            </div>
          </section>

          {/* Categories Grid */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(categories).map((category) => (
                  <Link
                    key={category.slug}
                    href={`/category/${category.slug}`}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                  >
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform inline-block">
                      Browse products →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Products */}
          <section id="featured-products" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our top-rated essentials trusted by business travelers worldwide
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <div className="text-center mt-12">
                <Link 
                  href="/category/luggage" 
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View All Products
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
