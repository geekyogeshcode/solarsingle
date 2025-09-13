import React from 'react';
import { Home, Building, Wrench, Battery } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Residential Solar',
      description: 'Custom solar solutions for homeowners looking to reduce energy costs and environmental impact.',
      features: ['Roof assessment', 'Custom design', 'Professional installation', '25-year warranty']
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Commercial Solar',
      description: 'Scalable solar systems for businesses ready to invest in sustainable energy solutions.',
      features: ['Large-scale installations', 'Energy audits', 'Tax incentive guidance', 'Monitoring systems']
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: 'Energy Storage',
      description: 'Advanced battery systems to store excess solar energy for use during peak hours or outages.',
      features: ['Backup power', 'Peak shaving', 'Grid independence', 'Smart monitoring']
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Maintenance & Support',
      description: 'Comprehensive maintenance services to keep your solar system performing at peak efficiency.',
      features: ['Regular inspections', 'Performance monitoring', '24/7 support', 'Warranty service']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Solar Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to ongoing maintenance, we provide comprehensive 
            solar services tailored to your specific needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-sky-100 rounded-xl flex items-center justify-center text-sky-500 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;