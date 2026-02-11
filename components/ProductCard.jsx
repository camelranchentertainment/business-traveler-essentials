export default function ProductCard({ product }) {
  return (
    <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700 hover:border-blue-500">
      <a 
        href={product.asin 
          ? `https://www.amazon.com/dp/${product.asin}?tag=businesst02d1-20`
          : '#'
        }
        target={product.asin ? "_blank" : "_self"}
        rel={product.asin ? "noopener noreferrer nofollow" : ""}
      >
        <div className="relative h-80 bg-white overflow-hidden flex items-center justify-center">
          {/* Product Image - Direct from Amazon */}
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Bestseller badge if rating > 4.7 */}
          {product.rating >= 4.7 && (
            <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
              Bestseller
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < Math.floor(product.rating) ? '★' : 
                   i < product.rating ? '★' : '☆'}
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-400">
              {product.rating} ({product.reviewCount.toLocaleString()})
            </span>
          </div>
          
          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
            <div className="text-2xl font-bold text-white">
              ${product.price}
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
              {product.asin ? 'View on Amazon →' : 'Coming Soon'}
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}
