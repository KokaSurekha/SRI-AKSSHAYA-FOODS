import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Basic Plan',
    subtitle: 'Weekly Meals',
    price: '₹800',
    period: '/week',
    features: [
      '7 Full Meals per week',
      'Choice of breakfast or lunch',
      'Free delivery',
      'Freshly cooked daily',
      'Basic customization',
    ],
    color: 'from-green-500 to-green-600',
    popular: false,
  },
  {
    name: 'Standard Plan',
    subtitle: '15 Meals Package',
    price: '₹1,500',
    period: '/15 meals',
    features: [
      '15 Full Meals',
      'Mix of breakfast and lunch',
      'Free delivery',
      'Priority cooking',
      'Full customization',
      'Free pickle jar',
    ],
    color: 'from-orange-500 to-red-500',
    popular: true,
  },
  {
    name: 'Premium Plan',
    subtitle: 'Monthly Unlimited',
    price: '₹3,500',
    period: '/month',
    features: [
      'Unlimited Full Meals',
      'All-day meal options',
      'Free express delivery',
      'Highest priority',
      'Full customization',
      'Free snacks & condiments',
      'Special festival meals',
      '24/7 support',
    ],
    color: 'from-purple-500 to-pink-600',
    popular: false,
  },
];

export default function Plans() {
  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            Subscription Plans
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your pure veg meal needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 ${
                plan.popular ? 'ring-4 ring-orange-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-bl-2xl font-semibold flex items-center space-x-1 shadow-lg">
                  <Star className="w-4 h-4" fill="white" />
                  <span>Most Popular</span>
                </div>
              )}

              <div className={`bg-gradient-to-br ${plan.color} p-8 text-white`}>
                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <p className="text-white/90 mb-6">{plan.subtitle}</p>
                <div className="flex items-end mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-xl ml-2 mb-1">{plan.period}</span>
                </div>
              </div>

              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-6 h-6 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center mt-0.5`}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-yellow-50 rounded-2xl border-2 border-yellow-200">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Special Offer:</span> Get 10% off on your first subscription! Use code{' '}
            <span className="font-mono bg-yellow-200 px-3 py-1 rounded font-bold">FIRST10</span>
          </p>
        </div>
      </div>
    </section>
  );
}
