import { Heart, Users, Award, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://mocha-cdn.com/019ac9b7-cb6c-7b19-9533-2e037ab9c4f6/full-meals.png"
                alt="About Sri Aksshaya Foods"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">100%</p>
                    <p className="text-gray-600">Pure Vegetarian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
              About Sri Aksshaya Foods
            </h2>
            
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Welcome to Sri Aksshaya Foods, your trusted pure vegetarian cloud kitchen bringing the authentic taste of South Indian homemade meals right to your doorstep.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded with a passion for traditional cooking and commitment to quality, we specialize in preparing fresh, healthy, and delicious vegetarian meals using time-honored recipes and the finest ingredients. Every dish is prepared with love, just like your grandmother would make.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Made with Love</h3>
                  <p className="text-gray-600">
                    Every meal is prepared with care and attention to detail, ensuring authentic flavors in every bite.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Community Focused</h3>
                  <p className="text-gray-600">
                    Serving thousands of happy customers who trust us for their daily pure vegetarian meal needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Assured</h3>
                  <p className="text-gray-600">
                    From sourcing ingredients to final delivery, we maintain the highest standards of hygiene and quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
                Order Your First Meal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
