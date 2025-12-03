import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShoppingCart,
  CheckCircle,
  Leaf,
  Clock,
  AlertTriangle,
  Package,
  Users,
  XCircle
} from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Full Meals (Pure Veg)',
    description: 'Complete traditional South Indian thali with rice, sambar, rasam, curries, and more',
    price: '₹120',
    image: 'https://mocha-cdn.com/019ac9b7-cb6c-7b19-9533-2e037ab9c4f6/full-meals.png',
    category: 'Meals'
  },
  {
    name: 'Mini Meals',
    description: 'Quick and satisfying meal with rice, sambar, curry, and papad',
    price: '₹80',
    image: 'https://mocha-cdn.com/019ac9b7-cb6c-7b19-9533-2e037ab9c4f6/full-meals.png',
    category: 'Meals'
  },
  {
    name: 'Breakfast Items',
    description: 'Idli, Dosa, Vada, Pongal with chutney and sambar',
    price: '₹60',
    image: 'https://mocha-cdn.com/019ac9b7-cb6c-7b19-9533-2e037ab9c4f6/breakfast.png',
    category: 'Breakfast'
  },
  {
    name: 'Pickles (Pure Veg)',
    description: 'Authentic homemade mango, lemon, and mixed vegetable pickles',
    price: '₹150/jar',
    image: 'https://mocha-cdn.com/019ac9b7-cb6c-7b19-9533-2e037ab9c4f6/pickles.png',
    category: 'Condiments'
  },
  {
    name: 'Karam Podi Varieties',
    description: 'Traditional spicy powder blends - idli podi, gunpowder, curry leaf podi',
    price: '₹100/pack',
    image: 'https://mocha-cdn.com/019ac9b7-cb6c-7b19-9533-2e037ab9c4f6/karam-podi.png',
    category: 'Condiments'
  },
  {
    name: 'Snacks',
    description: 'Murukku, chakli, mixture, and other crispy South Indian snacks',
    price: '₹80/pack',
    image: 'https://mocha-cdn.com/019ac9b7-cb6c-7b19-9533-2e037ab9c4f6/snacks.png',
    category: 'Snacks'
  }
];

export default function Menu() {

  const navigate = useNavigate();

  // 🚀 ADD TO CART → DIRECT CART PAGE
  const addToCart = (item: MenuItem) => {
    navigate('/cart', { state: { cart: [item] } });
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600">Our Menu</h2>
          <p className="text-xl text-gray-600">Fresh, authentic South Indian vegetarian delicacies</p>
        </div>

        {/* NOTES */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="flex items-start space-x-4">
            <Leaf className="w-6 h-6 text-green-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Completely Pure Veg</h4>
              <p className="text-gray-600">Home Cooked Food</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <XCircle className="w-6 h-6 text-red-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Regular Menu</h4>
              <p className="text-gray-600 font-bold">No Garlic</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <CheckCircle className="w-6 h-6 text-orange-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Masala Curries</h4>
              <p className="text-gray-600 font-bold">Garlic Used</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Pre-Order Only</h4>
              <p className="text-gray-600">Selected timings available</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-6 h-6 text-yellow-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Not Restaurant Style</h4>
              <p className="text-gray-600">Pure homely taste</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Package className="w-6 h-6 text-purple-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Packing Charges</h4>
              <p className="text-gray-600">Silver Free | Disposable ₹30 | Eco ₹50</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Users className="w-6 h-6 text-pink-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Customizable Menu</h4>
              <p className="text-gray-600">Minimum 10 People</p>
            </div>
          </div>
        </div>

        {/* MENU CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative h-64">
                <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 duration-500" />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">Pure Veg</div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600">{item.name}</h3>
                  <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                </div>

                <p className="text-gray-600 mb-4">{item.description}</p>

                {/* ADD TO CART → DIRECT TO CART PAGE */}
                <button
                  onClick={() => addToCart(item)}
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
