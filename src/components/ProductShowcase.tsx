
import { ShoppingCart, Tag, Package } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';

// Define our product type
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  tags: string[];
}

const ProductShowcase = () => {
  // Define our products with actual data
  const products: Product[] = [
    {
      id: 1,
      name: "NomNom Classic",
      description: "Your flagship everyday phone case! Durable, stylish, and designed for daily adventures. Keeps your device safe while adding a touch of personality.",
      price: "$24.99",
      image: "/lovable-uploads/1c7a9959-67da-473e-842d-d71de39bc396.png",
      category: "Phone Cases",
      tags: ["EverydayCase", "Flagship", "DurableDesign", "PhoneProtection"]
    },
    {
      id: 2,
      name: "NomNom Creator Kit",
      description: "Premium bundle for creators! Includes exclusive accessories like a detachable grip, card holder, and stand. Perfect for content creators on the go.",
      price: "$39.99",
      image: "/lovable-uploads/e10d21f9-fe98-426d-a908-26f7a6ce6f75.png",
      category: "Premium Bundles",
      tags: ["CreatorBundle", "PremiumKit", "AllInOne", "ContentCreator"]
    },
    {
      id: 3,
      name: "NomFits",
      description: "Affordable elegance meets sleek design. Slim, lightweight, and perfect for minimalist lovers who want reliable protection without bulk.",
      price: "$19.99",
      image: "/lovable-uploads/6954835b-f799-40a3-ab7d-6d8089ae0736.png",
      category: "Phone Cases",
      tags: ["SlimCase", "AffordableStyle", "Minimalist", "Lightweight"]
    },
    {
      id: 4,
      name: "NomBits",
      description: "Fun bite-sized accessories to express yourself! Mix and match charms, stickers, and pop sockets. Joyful customization for your everyday tech.",
      price: "$14.99",
      image: "/lovable-uploads/5d516048-5c4f-4f96-bc37-35906cb91e80.png",
      category: "Accessories",
      tags: ["FunAccessories", "CustomizeYourTech", "PopSockets", "PlayfulStyle"]
    }
  ];

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
