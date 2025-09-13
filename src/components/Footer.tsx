import React from 'react';
import { Sun, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sun className="w-8 h-8 text-sky-400" />
              <span className="text-2xl font-bold">SolarTech</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading the solar revolution with cutting-edge technology and 
              exceptional service. Powering a sustainable future, one home at a time.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.Facebook.com/" target='__blank' className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.X.com/" target='__blank' className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.Instagram.com/" target='__blank' className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.Linkedin.com/" target='__blank' className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Residential Solar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Solar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Energy Storage</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maintenance & Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Solar Financing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>(+91) 7350370633</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>info@solartech.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <div>123 Solar Street</div>
                  <div>Nashik, Maharashtra</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 SolarTech. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;