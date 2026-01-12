import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { getProduct, getProductsByCategory } from '../../data/products';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return null;
  }

  const product = getProduct(id);

  if (!product) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-gray-600">The product you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Get related products from same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <Head>
        <title>{product.name} - Business Traveler Essentials</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navigation />

        <main className="flex-grow">
          {/* Breadcrumb */}
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <nav className="text-sm">
                <Link href="/" className="text-blue-600 hover:text-blue-700">Home</Link>
                <span className="mx-2 text-gray-400">/</span>
                <Link href={`/category/${product.category}`} className="text-blue-600 hover:text-blue-700">
                  {product.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </Link>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-600">{product.name}</span>
              </nav>
            </div>
          </div>

          {/* Product Detail */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Image */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="aspect-square rounded-lg overflow-hidden mb-6 relative bg-white flex items-center justify-center">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to gradient
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('bg-gradient-to-br', 'from-blue-500', 'to-indigo-600');
                        const fallback = document.createElement('div');
                        fallback.className = 'text-9xl filter drop-shadow-2xl';
                        fallback.textContent = product.category === 'tech-essentials' ? '💻' : 
                                               product.category === 'luggage-bags' ? '🧳' :
                                               product.category === 'comfort-wellness' ? '🧘' :
                                               product.category === 'security-safety' ? '🔒' :
                                               product.category === 'productivity' ? '📊' : '👔';
                        e.target.parentElement.appendChild(fallback);
                      }}
                    />
                  </div>
                  
                  {product.rating >= 4.7 && (
                    <div className="inline-block bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      ⭐ Bestseller - {product.rating} stars
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex text-amber-400 text-2xl">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < Math.floor(product.rating) ? '★' : 
                           i < product.rating ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                    <span className="text-lg text-gray-700 font-medium">
                      {product.rating}
                    </span>
                    <span className="text-gray-600">
                      ({product.reviewCount.toLocaleString()} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      ${product.price}
                    </div>
                    <p className="text-green-600 font-medium">✓ In Stock - Ships Fast</p>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3 text-gray-900">Product Description</h2>
                    <p className="text-gray-700 leading-relaxed">{product.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3 text-gray-900">Key Features</h2>
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-600 mr-3 mt-1">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
                  >
                    View on Amazon →
                  </a>

                  <p className="text-sm text-gray-500 mt-4 text-center">
                    As an Amazon Associate, we earn from qualifying purchases.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why We Recommend */}
          <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Why We Recommend This Product</h2>
              <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  As seasoned business travelers, we've tested countless products in airports, hotels, 
                  and meeting rooms around the world. The {product.name} stands out because it delivers 
                  exactly what busy professionals need: reliability, quality, and performance.
                </p>
                <p className="mb-4">
                  With an impressive {product.rating}-star rating from over {product.reviewCount.toLocaleString()} 
                  verified customers, this isn't just our opinion—thousands of business travelers trust 
                  this product for their most important trips.
                </p>
                <p>
                  Whether you're preparing for a critical client meeting, managing a long international 
                  flight, or simply trying to work efficiently on the road, this product has proven itself 
                  time and time again.
                </p>
              </div>
            </div>
          </section>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold mb-8 text-gray-900">You Might Also Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedProducts.map((relatedProduct) => (
                    <ProductCard key={relatedProduct.id} product={relatedProduct} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}
