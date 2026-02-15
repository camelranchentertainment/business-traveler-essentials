import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TravelTips() {
  return (
    <>
      <Head>
        <title>Travel Tips - Business Traveler Essentials</title>
        <meta name="description" content="Travel tips and advice for business travelers" />
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Travel Tips</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Expert travel advice is on the way!
              </p>
              <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
                We're curating the best travel tips, packing strategies, and business travel 
                hacks. In the meantime, equip yourself with the right gear.
              </p>
              
              <Link href="/">
                <button className="bg-white text-blue-900 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                  Explore Travel Gear
                </button>
              </Link>
            </div>
          </section>

          {/* Teaser Section */}
          <section className="py-16 bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                What's Coming
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-8 rounded-xl text-center">
                  <div className="text-5xl mb-4">✈️</div>
                  <h3 className="text-xl font-bold text-white mb-3">Packing Guides</h3>
                  <p className="text-gray-400">
                    Master the art of efficient packing for any trip length
                  </p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl text-center">
                  <div className="text-5xl mb-4">🌍</div>
                  <h3 className="text-xl font-bold text-white mb-3">Destination Tips</h3>
                  <p className="text-gray-400">
                    Navigate airports, hotels, and transportation like a pro
                  </p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl text-center">
                  <div className="text-5xl mb-4">💼</div>
                  <h3 className="text-xl font-bold text-white mb-3">Business Travel Hacks</h3>
                  <p className="text-gray-400">
                    Stay productive and comfortable on the road
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Gear Section */}
          <section className="py-16 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white text-center mb-4">
                Start With the Right Gear
              </h2>
              <p className="text-gray-400 text-center mb-12 text-lg max-w-3xl mx-auto">
                While we prepare our travel tips, explore our collection of essentials 
                trusted by business travelers worldwide.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <Link href="/category/luggage">
                  <div className="bg-gray-900 hover:bg-blue-600 p-6 rounded-lg text-center cursor-pointer transition-all">
                    <span className="text-4xl mb-2 block">🧳</span>
                    <span className="text-white font-medium">Luggage</span>
                  </div>
                </Link>
                <Link href="/category/backpacks">
                  <div className="bg-gray-900 hover:bg-blue-600 p-6 rounded-lg text-center cursor-pointer transition-all">
                    <span className="text-4xl mb-2 block">🎒</span>
                    <span className="text-white font-medium">Backpacks</span>
                  </div>
                </Link>
                <Link href="/category/tech-organizers">
                  <div className="bg-gray-900 hover:bg-blue-600 p-6 rounded-lg text-center cursor-pointer transition-all">
                    <span className="text-4xl mb-2 block">💼</span>
                    <span className="text-white font-medium">Tech Organizers</span>
                  </div>
                </Link>
                <Link href="/category/packing-cubes">
                  <div className="bg-gray-900 hover:bg-blue-600 p-6 rounded-lg text-center cursor-pointer transition-all">
                    <span className="text-4xl mb-2 block">📦</span>
                    <span className="text-white font-medium">Packing Cubes</span>
                  </div>
                </Link>
                <Link href="/category/neck-pillows">
                  <div className="bg-gray-900 hover:bg-blue-600 p-6 rounded-lg text-center cursor-pointer transition-all">
                    <span className="text-4xl mb-2 block">💤</span>
                    <span className="text-white font-medium">Neck Pillows</span>
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
