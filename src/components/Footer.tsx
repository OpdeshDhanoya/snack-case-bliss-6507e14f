
import { Instagram } from 'lucide-react';
import { Heart, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo and tagline */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/b027a4b5-c62c-4eb6-b095-4835ab5d785f.png" 
              alt="NOMNOM CASE - The case that has your back and your snack"
              className="mx-auto h-16 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 text-lg">The case that has your back and your snack</p>
          </div>

          {/* Contact information */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Mail className="text-soft-pink w-5 h-5" />
              <a href="mailto:nomnomcase25@gmail.com" className="text-soft-pink hover:text-pink-300 transition-colors">
                nomnomcase25@gmail.com
              </a>
            </div>
          </div>

          {/* Social media icons */}
          <div className="mb-8">
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.instagram.com/nomnom_case/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-soft-pink hover:text-gray-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@nomnom.case" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-soft-pink hover:text-gray-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center space-x-8 text-gray-300">
              <a href="#home" className="hover:text-soft-pink transition-colors">Home</a>
              <a href="#products" className="hover:text-soft-pink transition-colors">Products</a>
              <a href="#about" className="hover:text-soft-pink transition-colors">About</a>
              <a href="#contact" className="hover:text-soft-pink transition-colors">Contact</a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 flex items-center justify-center space-x-1">
              <span>© 2024 NOMNOM CASE. Made with</span>
              <Heart className="text-soft-pink w-4 h-4" />
              <span>and lots of snacks.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
