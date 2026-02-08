import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
     <a 
  href={product.asin 
    ? `https://www.amazon.com/dp/${product.asin}?tag=businesst02d1-20`
    : '#'
  }
  target={product.asin ? "_blank" : "_self"}
  rel={product.asin ? "noopener noreferrer nofollow" : ""}
>
  <div className="relative h-64 bg-white overflow-hidden flex items-center justify-center">
          {/* Amazon Product Image */}
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              // Fallback to gradient if image fails
              e.target.style.display = 'none';
              e.target.parentElement.classList.add('bg-gradient-to-br', 'from-blue-500', 'to-indigo-600');
              const fallback = document.createElement('div');
              fallback.className = 'text-8xl';
              fallback.textContent = product.category === 'tech-essentials' ? '💻' : 
                                     product.category === 'luggage-bags' ? '🧳' :
                                     product.category === 'comfort-wellness' ? '🧘' :
                                     product.category === 'security-safety' ? '🔒' :
                                     product.category === 'productivity' ? '📊' : '👔';
              e.target.parentElement.appendChild(fallback);
            }}
          />
          
          {/* Bestseller badge if rating > 4.7 */}
          {product.rating >= 4.7 && (
            <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
              Bestseller
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
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
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviewCount.toLocaleString()})
            </span>
          </div>
          
          {/* Features */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {product.features.slice(0, 2).map((feature, idx) => (
                <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                  {feature}
                </span>
              ))}
            </div>
          </div>
          
          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="text-2xl font-bold text-gray-900">
              ${product.price}
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
              View Details →
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
