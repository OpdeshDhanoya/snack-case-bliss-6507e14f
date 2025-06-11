
import { useState, useEffect } from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [shipping] = useState(5.99); // Fixed shipping cost

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('nomnom-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('nomnom-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + (cartItems.length > 0 ? shipping : 0);

  const handleCheckout = () => {
    // Placeholder for payment gateway integration
    console.log('Proceeding to checkout with items:', cartItems);
    alert('Checkout functionality will be connected to payment gateway');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-lavender/30">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center py-20">
              <ShoppingBag className="mx-auto mb-6 text-gray-400" size={80} />
              <h1 className="font-heading text-4xl font-bold text-gray-800 mb-4">
                Your Cart
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your cart feels lonely! Shop now →
              </p>
              <Button 
                onClick={() => window.location.href = '/#products'}
                className="bg-soft-pink hover:bg-pink-300 text-gray-800 font-semibold py-6 px-8 rounded-full text-lg"
              >
                Start Shopping
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-lavender/30">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl font-bold text-gray-800 mb-8 text-center">
              Your Cart
            </h1>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="border-2 border-soft-pink/20">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg bg-soft-pink/10"
                        />
                        
                        <div className="flex-1">
                          <h3 className="font-heading text-lg font-semibold text-gray-800">
                            {item.name}
                          </h3>
                          <p className="text-soft-pink font-bold text-lg">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 rounded-full border-soft-pink/30"
                          >
                            <Minus size={14} />
                          </Button>
                          
                          <span className="font-semibold text-gray-800 min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 rounded-full border-soft-pink/30"
                          >
                            <Plus size={14} />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 size={18} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="border-2 border-soft-pink/20 sticky top-24">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-gray-800">
                      Order Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    
                    <hr className="border-soft-pink/20" />
                    
                    <div className="flex justify-between text-lg font-bold text-gray-800">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    
                    <Button 
                      onClick={handleCheckout}
                      className="w-full bg-soft-pink hover:bg-pink-300 text-gray-800 font-semibold py-6 rounded-full text-lg mt-6"
                    >
                      Continue to Checkout
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
