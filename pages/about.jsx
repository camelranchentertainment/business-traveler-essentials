import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Business Traveler Essentials</title>
        <meta name="description" content="Learn more about Business Traveler Essentials" />
      </Head>

      <div className="min-h-screen flex flex-col bg-black">
        <Navigation />

        <main className="flex-grow">
          {/* Coming Soon Hero */}
          <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-32 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="mb-8">
                <span className="inline-block bg-blue-500/20 text-blue-200 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  Coming Soon
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                We're working on our story. Check back soon!
              </p>
              <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
                In the meantime, explore our curated collection of premium travel gear 
                designed specifically for business travelers who demand the best.
              </p>
              
              <Link href="/">
                <button className="bg-white text-blue-900 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                  Browse Our Products
                </button>
              </Link>
            </div>
          </section>

          {/* Quick Links */}
          <section className="py-16 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Explore Our Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <Link href="/category/luggage">
                  <div className="bg-gray-800 hover:bg-blue-600 p-6 rounded-lg text-center cursor-pointer transition-all">
                    <span className="text-4xl mb-2 block">🧳</span>
                    <span className="text-white font-medium">Luggage</span>
                  </div>
                </Link>
                <Link href="/category/backpacks">
                  <div className="bg-gray-800 hover:bg-blue-600 p-6 rounded-lg text-center cursor-pointer transition-all">
                    <span className="text-4xl mb-2 block">🎒</span>
                    <span className="text-white font-medium">Backpacks</span>
                  </div>
                </Link>
                <Link href="/category/tech-organizers">
                  <div className="bg-gray-800 hover:bg-blue-600 p-6 rounded-lg text-center cursor-pointer transition-all">
                    <span className="text-4xl mb-2 block">💼</span>
                    <span className="text-white font-medium">Tech Organizers</span>
                  </div>
                </Link>
                <Link href="/category/portable-power">
                  <div className="bg-gray-800 hover:bg-blue-600 p-6 rounded-lg text-center cursor-pointer transition-all">
                    <span className="text-4xl mb-2 block">🔋</span>
                    <span className="text-white font-medium">Portable Power</span>
                  </div>
                </Link>
                <Link href="/category/headphones">
                  <div className="bg-gray-800 hover:bg-blue-600 p-6 rounded-lg text-center cursor-pointer transition-all">
                    <span className="text-4xl mb-2 block">🎧</span>
                    <span className="text-white font-medium">Headphones</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
