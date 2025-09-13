import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: 'residential'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll contact you within 24 hours.');

      setFormData({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: 'residential'
  });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 to-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Solar Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start saving with solar? Contact us today for a free consultation 
            and personalized quote tailored to your energy needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-sky-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">(+91) 7350370633</div>
                    <div className="text-gray-600">Call for immediate assistance</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">info@solartech.com</div>
                    <div className="text-gray-600">Email us your questions</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">123 Solar Street</div>
                    <div className="text-gray-600">Nashik, Maharashtra</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Mon-Fri: 8AM-6PM</div>
                    <div className="text-gray-600">Sat: 9AM-4PM</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-sky-50 to-emerald-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Why Choose SolarTech?</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>✓ Free in-home consultation</li>
                  <li>✓ No upfront costs available</li>
                  <li>✓ 25-year warranty included</li>
                  <li>✓ Certified professional installers</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Request Your Free Quote
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    placeholder="(+91) 7350370633"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                  >
                    <option value="residential">Residential Solar</option>
                    <option value="commercial">Commercial Solar</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                  placeholder="Tell us about your solar energy goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-4 px-6 rounded-lg hover:bg-sky-600 transition-colors font-semibold flex items-center justify-center group"
              >
                Get My Free Quote
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                We respect your privacy. Your information will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;