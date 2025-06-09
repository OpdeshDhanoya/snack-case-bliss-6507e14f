
import { Cookie, Smartphone, Heart, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-lavender/30 to-mint-green/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Flavor Story
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Owner photo and decorative elements */}
            <div className="text-center lg:text-left animate-fade-up">
              <div className="relative inline-block">
                {/* Circular photo placeholder */}
                <div className="w-64 h-64 bg-soft-pink/30 rounded-full border-4 border-soft-pink/60 mx-auto lg:mx-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-soft-pink/60 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl">👤</span>
                    </div>
                    <span className="text-gray-500 text-sm">[Owner Photo]</span>
                  </div>
                </div>

                {/* Decorative floating icons */}
                <div className="absolute -top-4 -right-4 bg-mint-green/80 rounded-full p-3 animate-float">
                  <Cookie className="text-white w-6 h-6" />
                </div>
                <div className="absolute bottom-8 -left-8 bg-lavender/80 rounded-full p-3 animate-float" style={{ animationDelay: '1s' }}>
                  <Smartphone className="text-white w-6 h-6" />
                </div>
                <div className="absolute top-20 -left-12 bg-cream/80 rounded-full p-2 animate-float" style={{ animationDelay: '2s' }}>
                  <Heart className="text-gray-600 w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Story text */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-6">
                  We're snack-obsessed techies creating cases that spark joy...
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  [Our story began when we realized our two greatest loves - technology and snacks - could come together in the most delightful way. Every case in our collection is inspired by real treats that bring us comfort and happiness.]
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  [From late-night coding sessions fueled by cookies to brainstorming over bubble tea, we've turned our snack-filled adventures into protective art for your most precious device.]
                </p>
                
                {/* Feature highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-soft-pink/20 rounded-full p-2">
                      <Heart className="text-soft-pink w-5 h-5" />
                    </div>
                    <span className="text-gray-700 font-medium">Handpicked designs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-mint-green/20 rounded-full p-2">
                      <Zap className="text-green-600 w-5 h-5" />
                    </div>
                    <span className="text-gray-700 font-medium">Premium protection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
