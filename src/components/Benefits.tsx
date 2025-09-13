import React from 'react';
import { TrendingDown, Leaf, Zap, Home } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <TrendingDown className="w-12 h-12" />,
      title: 'Reduce Energy Costs',
      description: 'Lower your monthly electricity bills by up to 90% with clean, renewable solar energy.',
      percentage: '90%',
      label: 'Bill Reduction'
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Environmental Impact',
      description: 'Reduce your carbon footprint and help create a more sustainable future for generations.',
      percentage: '4 tons',
      label: 'CO₂ Saved Annually'
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Increase Property Value',
      description: 'Solar installations typically increase home value by 3-4% according to recent studies.',
      percentage: '4%',
      label: 'Home Value Increase'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Energy Independence',
      description: 'Generate your own clean electricity and reduce dependence on the grid.',
      percentage: '100%',
      label: 'Energy Freedom'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-emerald-50 to-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Solar Energy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solar energy offers numerous benefits that extend far beyond just saving money. 
            Discover how switching to solar can transform your lifestyle and impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  {benefit.icon}
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {benefit.description}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-emerald-500">
                      {benefit.percentage}
                    </div>
                    <div className="ml-3 text-sm text-gray-500">
                      {benefit.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-sky-500 mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">25MW</div>
              <div className="text-gray-600">Solar Installed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">$5M+</div>
              <div className="text-gray-600">Customer Savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;