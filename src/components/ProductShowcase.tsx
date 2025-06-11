import { ShoppingCart } from 'lucide-react';
const ProductShowcase = () => {
  const products = [{
    id: 1,
    name: '[Product Name]',
    price: '$0.00'
  }, {
    id: 2,
    name: '[Product Name]',
    price: '$0.00'
  }, {
    id: 3,
    name: '[Product Name]',
    price: '$0.00'
  }, {
    id: 4,
    name: '[Product Name]',
    price: '$0.00'
  }, {
    id: 5,
    name: '[Product Name]',
    price: '$0.00'
  }, {
    id: 6,
    name: '[Product Name]',
    price: '$0.00'
  }];
  return <section id="products" className="py-20 bg-gradient-to-b from-white to-lavender/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Snack-tastic Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our delicious collection of phone cases inspired by your favorite treats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => <div key={product.id} className="bg-white rounded-3xl p-6 shadow-lg animate-scale-hover animate-fade-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {/* Product Image Placeholder */}
              <div className="aspect-square bg-soft-pink/20 rounded-2xl border-2 border-soft-pink/40 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-soft-pink/40 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <span className="text-gray-500 text-sm"></span>
                </div>
              </div>

              {/* Product Details */}
              <div className="text-center">
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-soft-pink mb-4">
                  {product.price}
                </p>
                <button className="w-full bg-soft-pink hover:bg-pink-300 text-gray-800 font-semibold py-3 px-6 rounded-full flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105">
                  <ShoppingCart size={18} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProductShowcase;