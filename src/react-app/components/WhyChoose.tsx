import { Leaf, Home, Clock, DollarSign, Truck, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: '100% Pure Veg',
    description: 'Completely vegetarian kitchen with no cross-contamination',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Home,
    title: 'Homemade Taste',
    description: 'Authentic recipes passed down through generations',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Clock,
    title: 'Freshly Cooked Daily',
    description: 'Made fresh every day with the finest ingredients',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: DollarSign,
    title: 'Affordable Prices',
    description: 'Quality meals without breaking the bank',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Hot meals delivered right to your doorstep',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: ShieldCheck,
    title: 'Hygiene Guaranteed',
    description: 'Prepared in a certified clean and safe environment',
    color: 'from-purple-500 to-purple-600',
  },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            Experience the best in pure vegetarian home-cooked meals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
