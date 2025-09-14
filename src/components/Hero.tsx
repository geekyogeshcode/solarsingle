import React from 'react';
import { ArrowRight, Zap, Shield, DollarSign } from 'lucide-react';

const Hero = () => {
   const scrollToContact = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-sky-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Power Your Future with
              <span className="text-sky-500 block">Clean Solar Energy</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your home or business with cutting-edge solar technology. 
              Save money, reduce your carbon footprint, and achieve energy independence 
              with our premium solar solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToContact('contact')}
                className="bg-sky-500 text-white px-8 py-4 rounded-lg hover:bg-sky-600 transition-all duration-300 font-semibold flex items-center justify-center group"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollToContact('services')} className="border-2 border-sky-500 text-sky-500 px-8 py-4 rounded-lg hover:bg-sky-500 hover:text-white transition-all duration-300 font-semibold">
                Learn More
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Save 50-90%</div>
                  <div className="text-gray-600">on electricity bills</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">25+ Years</div>
                  <div className="text-gray-600">warranty included</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Certified</div>
                  <div className="text-gray-600">professional installation</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Solar panels on modern house"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-emerald-500">₹60,000</div>
              <div className="text-gray-600">Average annual savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;