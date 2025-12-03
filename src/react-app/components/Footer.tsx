import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">SA</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Sri Aksshaya Foods</h3>
              <p className="text-white/90 text-sm">Pure Veg Cloud Kitchen</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-lg mb-4">
            <span>Made with</span>
            <Heart className="w-5 h-5 fill-white" />
            <span>for pure veg food lovers</span>
          </div>

          <p className="text-white/90 text-lg mb-6">
            Serving authentic South Indian vegetarian meals with homemade taste
          </p>

          <div className="border-t border-white/20 pt-6">
            <p className="text-white/80">
              © 2025 Sri Aksshaya Foods — Pure Veg Cloud Kitchen
            </p>
            <p className="text-white/60 text-sm mt-2">
              All Rights Reserved | Follow us on Instagram @sri_aksshaya_foods
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
