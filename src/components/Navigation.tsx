
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-soft-pink/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b027a4b5-c62c-4eb6-b095-4835ab5d785f.png" 
              alt="NOMNOM CASE - The case that has your back and your snack"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-soft-pink transition-colors">Home</a>
            <a href="#products" className="text-gray-700 hover:text-soft-pink transition-colors">Products</a>
            <a href="#about" className="text-gray-700 hover:text-soft-pink transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-soft-pink transition-colors">Contact</a>
            <button className="bg-soft-pink hover:bg-pink-300 text-gray-800 px-4 py-2 rounded-full flex items-center space-x-2 transition-colors">
              <ShoppingCart size={18} />
              <span>Cart (0)</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-soft-pink transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-soft-pink/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-soft-pink transition-colors">Home</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-soft-pink transition-colors">Products</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-soft-pink transition-colors">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-soft-pink transition-colors">Contact</a>
              <button className="w-full mt-4 bg-soft-pink hover:bg-pink-300 text-gray-800 px-4 py-2 rounded-full flex items-center justify-center space-x-2 transition-colors">
                <ShoppingCart size={18} />
                <span>Cart (0)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
