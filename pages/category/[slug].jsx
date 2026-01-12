import { useRouter } from 'next/router';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { getProductsByCategory, categories } from '../../data/products';

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return null;
  }

  const category = categories[slug];
  const products = getProductsByCategory(slug);

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

      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navigation />

        <main className="flex-grow">
          {/* Category Header */}
          <section className="relative bg-gray-900 text-white py-16 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=2000&q=80"
                alt="Travel background"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-6xl">{category.icon}</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">{category.name}</h1>
                  <p className="text-xl text-blue-100">{category.description}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center space-x-2 text-blue-100">
                <span>{products.length} products</span>
                <span>•</span>
                <span>All 4.5+ star rated</span>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {products.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">No products found in this category.</p>
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

          {/* Why These Products */}
          <section className="py-16 bg-white border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Why We Recommend These {category.name}</h2>
              <div className="prose prose-blue max-w-none text-gray-600">
                <p>
                  As frequent business travelers ourselves, we understand the importance of having reliable, 
                  high-quality gear. Every product in our {category.name.toLowerCase()} collection has been:
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Tested by real business travelers in real-world conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Rated 4.5 stars or higher with thousands of verified reviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Chosen for durability, functionality, and professional appearance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
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
