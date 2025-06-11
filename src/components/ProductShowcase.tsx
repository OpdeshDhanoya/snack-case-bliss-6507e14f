
import { ShoppingCart, Tag, Package } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';

// Define our product type
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  priceValue: number;
  image: string;
  category: string;
  tags: string[];
}

const ProductShowcase = () => {
  // Define our products with updated data and swapped images
  const products: Product[] = [
    {
      id: 1,
      name: "NomNom Classic",
      description: "Flagship everyday phone case combining durability with playful style. Your daily adventures deserve reliable protection!",
      price: "$24.99",
      priceValue: 24.99,
      image: "/lovable-uploads/e10d21f9-fe98-426d-a908-26f7a6ce6f75.png", // Swapped with Creator Kit image
      category: "Phone Cases",
      tags: ["EverydayEssential", "FlagshipCase", "DropProtection"]
    },
    {
      id: 2,
      name: "NomNom Creator Pro Kit",
      description: "Premium creator bundle featuring detachable grip, card holder & adjustable stand. Perfect for content creation on-the-move!",
      price: "$39.99",
      priceValue: 39.99,
      image: "/lovable-uploads/bcdc024b-f7d9-410b-a60e-f23e3d03e299.png", // New attachment image
      category: "Pro Bundles",
      tags: ["ProCreatorKit", "AllInOneBundle", "ContentCreator"]
    },
    {
      id: 3,
      name: "NomFits",
      description: "Sleek minimalist design. Ultra-slim, lightweight protection that disappears in your pocket.",
      price: "$19.99",
      priceValue: 19.99,
      image: "/lovable-uploads/6954835b-f799-40a3-ab7d-6d8089ae0736.png",
      category: "Phone Cases",
      tags: ["SlimFit", "MinimalistStyle", "BudgetFriendly"]
    },
    {
      id: 4,
      name: "NomBits",
      description: "Bite-sized joy! Mixable charms, stickers & pop sockets to personalize your tech.",
      price: "$14.99",
      priceValue: 14.99,
      image: "/lovable-uploads/5d516048-5c4f-4f96-bc37-35906cb91e80.png",
      category: "Accessories",
      tags: ["TechAccessories", "CustomizeLife", "FunAddons"]
    }
  ];

  const addToCart = (product: Product) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.priceValue,
      image: product.image,
      quantity: 1
    };

    const existingCart = localStorage.getItem('nomnom-cart');
    let cartItems = existingCart ? JSON.parse(existingCart) : [];
    
    const existingItemIndex = cartItems.findIndex((item: any) => item.id === product.id);
    
    if (existingItemIndex > -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push(cartItem);
    }
    
    localStorage.setItem('nomnom-cart', JSON.stringify(cartItems));
    
    // Dispatch custom event to update cart count in navigation
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Show confirmation
    alert(`${product.name} added to cart!`);
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-lavender/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Snack-tastic Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our delicious collection of phone cases inspired by your favorite treats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="bg-white rounded-3xl shadow-lg overflow-hidden animate-scale-hover animate-fade-up border-2 border-soft-pink/20" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                {/* Product Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-soft-pink/10">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 right-4 bg-soft-pink/90 text-white py-1 px-3 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>

                {/* Product Details */}
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-heading text-2xl font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-soft-pink">
                      {product.price}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="text-gray-600 flex-grow">
                  <p className="mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {product.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center text-xs bg-lavender/30 text-gray-700 px-2 py-1 rounded-full"
                      >
                        <Tag size={12} className="mr-1" />
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-4">
                  <Button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-soft-pink hover:bg-pink-300 text-gray-800 font-semibold py-6 rounded-full"
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    <span>Add to Cart</span>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
