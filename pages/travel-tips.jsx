import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const travelTips = [
  {
    id: 1,
    title: "The Ultimate Business Travel Packing List",
    excerpt: "Never forget an essential again with our comprehensive packing checklist tailored for business travelers.",
    category: "Packing",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "10 Airport Productivity Hacks",
    excerpt: "Turn downtime into productive time with these proven strategies for working efficiently in airports.",
    category: "Productivity",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "How to Sleep Better on Long Flights",
    excerpt: "Science-backed tips and product recommendations to help you arrive refreshed and ready for business.",
    category: "Wellness",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Maximizing Carry-On Space Like a Pro",
    excerpt: "Expert packing techniques to fit everything you need in a single carry-on bag.",
    category: "Packing",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Staying Healthy While Traveling for Business",
    excerpt: "Maintain your wellness routine on the road with these practical health tips for frequent travelers.",
    category: "Wellness",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "Essential Apps Every Business Traveler Needs",
    excerpt: "The must-have mobile apps that will make your business travel smoother and more efficient.",
    category: "Technology",
    readTime: "5 min read"
  },
  {
    id: 7,
    title: "Navigating TSA Security Like a Frequent Flyer",
    excerpt: "Speed through security checkpoints with these insider tips from seasoned business travelers.",
    category: "Airport Tips",
    readTime: "4 min read"
  },
  {
    id: 8,
    title: "Hotel Room Productivity Setup",
    excerpt: "Transform any hotel room into an efficient workspace with the right tools and techniques.",
    category: "Productivity",
    readTime: "7 min read"
  },
  {
    id: 9,
    title: "Dealing with Jet Lag: A Scientific Approach",
    excerpt: "Use proven scientific methods to minimize jet lag and stay sharp for important meetings.",
    category: "Wellness",
    readTime: "9 min read"
  }
];

export default function TravelTips() {
  return (
    <>
      <Head>
        <title>Travel Tips & Guides - Business Traveler Essentials</title>
        <meta name="description" content="Expert travel tips, guides, and strategies for business professionals. Learn how to travel smarter and more efficiently." />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navigation />

        <main className="flex-grow">
          {/* Hero */}
          <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Travel Tips & Guides</h1>
              <p className="text-xl text-blue-100">
                Expert advice to help you travel smarter and more efficiently
              </p>
            </div>
          </section>

          {/* Quick Tips Section */}
          <section className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Quick Travel Tips</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">✈️</div>
                  <h3 className="font-semibold mb-2 text-gray-900">Pack Smart</h3>
                  <p className="text-gray-700 text-sm">
                    Stick to carry-on only when possible. It saves time at baggage claim and eliminates 
                    the risk of lost luggage before important meetings.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">⏰</div>
                  <h3 className="font-semibold mb-2 text-gray-900">Arrive Early</h3>
                  <p className="text-gray-700 text-sm">
                    Give yourself extra time for unexpected delays. The stress relief is worth more 
                    than the extra hour at the airport.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">🔋</div>
                  <h3 className="font-semibold mb-2 text-gray-900">Stay Charged</h3>
                  <p className="text-gray-700 text-sm">
                    Always carry a high-capacity power bank. Your devices are your lifeline on the 
                    road—keep them powered up.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">💧</div>
                  <h3 className="font-semibold mb-2 text-gray-900">Hydrate</h3>
                  <p className="text-gray-700 text-sm">
                    Airplane cabins are extremely dry. Drink water before, during, and after flights 
                    to arrive feeling your best.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">📱</div>
                  <h3 className="font-semibold mb-2 text-gray-900">Go Digital</h3>
                  <p className="text-gray-700 text-sm">
                    Use mobile boarding passes and hotel apps. Less paper means less to keep track of 
                    and less to lose.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">🧘</div>
                  <h3 className="font-semibold mb-2 text-gray-900">Maintain Routine</h3>
                  <p className="text-gray-700 text-sm">
                    Keep your sleep schedule and exercise routine as consistent as possible, even 
                    while traveling.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Articles */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Featured Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {travelTips.map((tip) => (
                  <article key={tip.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {tip.category}
                        </span>
                        <span className="text-xs text-gray-500">{tip.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                        {tip.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        {tip.excerpt}
                      </p>
                      <div className="text-blue-600 font-medium text-sm hover:text-blue-700 cursor-pointer">
                        Read more →
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Packing Checklist CTA */}
          <section className="py-16 bg-blue-600 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Download Our Free Packing Checklist</h2>
              <p className="text-xl mb-8 text-blue-100">
                Never forget an essential item again with our comprehensive business travel packing list
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Your Free Checklist
              </button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
