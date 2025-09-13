import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality First',
      description: 'We use only premium equipment and certified installers for every project.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority, from consultation to long-term support.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Timely Delivery',
      description: 'We complete installations on time and within budget, every time.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Sustainable Future',
      description: 'We\'re committed to creating a cleaner, more sustainable world.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Leading Solar Innovation for Over a Decade
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Since 2010, SolarTech has been at the forefront of renewable energy solutions, 
              helping thousands of homeowners and businesses transition to clean, cost-effective solar power.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of certified professionals combines cutting-edge technology with 
              unmatched expertise to deliver solar solutions that exceed expectations and 
              provide lasting value.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-500 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500 mb-2">50+</div>
                <div className="text-gray-600">Certified Technicians</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">A+</div>
                <div className="text-gray-600">BBB Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">99%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          <div>
              <img
                src="https://images.unsplash.com/photo-1719559519300-e9d2c2bf6de1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Solar technician installing panels"
                className="rounded-2xl shadow-xl mb-8"
              />

            
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-4 bg-gradient-to-br from-sky-50 to-emerald-50 rounded-xl"
                >
                  <div className="text-sky-500 mb-2">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;