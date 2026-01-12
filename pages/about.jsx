import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Business Traveler Essentials</title>
        <meta name="description" content="Learn about Business Traveler Essentials and our mission to help business professionals travel smarter with curated product recommendations." />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navigation />

        <main className="flex-grow">
          {/* Hero */}
          <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Business Traveler Essentials</h1>
              <p className="text-xl text-blue-100">
                Helping business professionals travel smarter since 2024
              </p>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Business Traveler Essentials was born from a simple frustration: finding quality travel 
                  gear shouldn't require hours of research and countless Amazon tabs open on your browser.
                </p>
                <p>
                  As frequent business travelers ourselves, we've spent years testing products in real-world 
                  conditions—from cramped economy seats to five-star hotel rooms, from rushed airport security 
                  lines to important client meetings.
                </p>
                <p>
                  We created this site to share what we've learned. Every product recommendation comes from 
                  actual experience and extensive research. We only recommend items we'd pack in our own carry-on.
                </p>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality Over Quantity</h3>
                  <p className="text-gray-600">
                    We curate, not catalog. Every product must meet our high standards for quality, 
                    durability, and functionality before making our list.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Real-World Testing</h3>
                  <p className="text-gray-600">
                    Our recommendations come from actual travel experience, not just spec sheets. 
                    We test products in airports, hotels, and on the road.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="text-4xl mb-4">💎</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Honest Reviews</h3>
                  <p className="text-gray-600">
                    We're transparent about our affiliate relationships and only recommend products 
                    we genuinely believe will improve your travel experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Standards */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Selection Standards</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">Minimum 4.5-Star Rating</h3>
                    <p className="text-gray-600">
                      Every product must have at least a 4.5-star average rating from verified customers 
                      with hundreds or thousands of reviews.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">Travel-Specific Benefits</h3>
                    <p className="text-gray-600">
                      Products must offer clear advantages for business travelers—whether that's portability, 
                      durability, professional appearance, or time-saving features.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">Value for Money</h3>
                    <p className="text-gray-600">
                      We recommend products across various price points, but every item must deliver 
                      exceptional value relative to its cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Affiliate Disclosure */}
          <section className="py-16 bg-blue-50 border-t border-blue-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Affiliate Disclosure</h2>
              <p className="text-gray-700 leading-relaxed">
                Business Traveler Essentials is a participant in the Amazon Services LLC Associates Program, 
                an affiliate advertising program designed to provide a means for sites to earn advertising 
                fees by advertising and linking to Amazon.com. When you purchase through our links, we may 
                earn a commission at no additional cost to you. This helps us continue providing free, 
                high-quality content to business travelers. Our recommendations are based solely on product 
                quality and suitability for business travel, not commission rates.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
