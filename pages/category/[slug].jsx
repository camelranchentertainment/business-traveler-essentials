import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { getProductsByCategory, categories } from '../../data/products';

export async function getStaticPaths() {
  // Generate paths for all category slugs
  const paths = Object.keys(categories).map((slug) => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const category = categories[slug];
  const products = getProductsByCategory(slug);

  return {
    props: {
      category,
      products
    }
  };
}

export default function CategoryPage({ category, products }) {
  const router = useRouter();
  const { slug } = router.query;
  
  if (!category) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
            <p className="text-gray-600">The category you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{category.name} - Business Traveler Essentials</title>
        <meta name="description" content={category.description} />
      </Head>

      <div className="min-h-screen flex flex-col bg-black">
        <Navigation />

        {/* Horizontal Category Navigation */}
        <section className="bg-gray-900 border-t border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link href="/category/luggage">
                <div className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer group ${slug === 'luggage' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}>
                  <span className="text-2xl">🧳</span>
                  <span className="text-white font-medium group-hover:text-white">Luggage</span>
                </div>
              </Link>
              <Link href="/category/backpacks">
                <div className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer group ${slug === 'backpacks' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}>
                  <span className="text-2xl">🎒</span>
                  <span className="text-white font-medium group-hover:text-white">Backpacks</span>
                </div>
              </Link>
              <Link href="/category/tech-organizers">
                <div className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer group ${slug === 'tech-organizers' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}>
                  <span className="text-2xl">💼</span>
                  <span className="text-white font-medium group-hover:text-white">Tech Organizers</span>
                </div>
              </Link>
              <Link href="/category/charging-cables">
                <div className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer group ${slug === 'charging-cables' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}>
                  <span className="text-2xl">🔌</span>
                  <span className="text-white font-medium group-hover:text-white">Charging Cables</span>
                </div>
              </Link>
              <Link href="/category/power-adapters">
                <div className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer group ${slug === 'power-adapters' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}>
                  <span className="text-2xl">⚡</span>
                  <span className="text-white font-medium group-hover:text-white">Power Adapters</span>
                </div>
              </Link>
              <Link href="/category/portable-power">
                <div className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer group ${slug === 'portable-power' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}>
                  <span className="text-2xl">🔋</span>
                  <span className="text-white font-medium group-hover:text-white">Portable Power</span>
                </div>
              </Link>
              <Link href="/category/neck-pillows">
                <div className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer group ${slug === 'neck-pillows' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}>
                  <span className="text-2xl">💤</span>
                  <span className="text-white font-medium group-hover:text-white">Neck Pillows</span>
                </div>
              </Link>
              <Link href="/category/packing-cubes">
                <div className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer group ${slug === 'packing-cubes' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}>
                  <span className="text-2xl">📦</span>
                  <span className="text-white font-medium group-hover:text-white">Packing Cubes</span>
                </div>
              </Link>
              <Link href="/category/laptop-sleeves">
                <div className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer group ${slug === 'laptop-sleeves' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}>
                  <span className="text-2xl">💻</span>
                  <span className="text-white font-medium group-hover:text-white">Laptop Sleeves</span>
                </div>
              </Link>
              <Link href="/category/headphones">
                <div className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer group ${slug === 'headphones' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}>
                  <span className="text-2xl">🎧</span>
                  <span className="text-white font-medium group-hover:text-white">Headphones</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <main className="flex-grow">
          <section className="relative bg-gray-900 text-white py-16 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=2000&q=80"
                alt="Travel background"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-4 mb-4">
                <img src={category.icon} alt={category.name} className="w-20 h-20" />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">{category.name}</h1>
                  <p className="text-xl text-blue-100">{category.description}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center space-x-2 text-blue-100">
                <span>{products.length} products</span>
                <span>•</span>
                <span>All 4.0+ star rated</span>
              </div>
            </div>
          </section>

          <section className="py-16 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {products.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400">No products found in this category.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </section>

          <section className="py-16 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-6 text-white">Why We Recommend These {category.name}</h2>
              <div className="prose prose-blue max-w-none text-gray-400">
                <p>
                  As frequent business travelers ourselves, we understand the importance of having reliable, 
                  high-quality gear. Every product in our {category.name.toLowerCase()} collection has been:
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>Tested by real business travelers in real-world conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>Rated 4.0 stars or higher with thousands of verified reviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>Chosen for durability, functionality, and professional appearance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>Optimized for frequent travelers who demand the best</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
