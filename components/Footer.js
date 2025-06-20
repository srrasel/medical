"use client";
import React, { useState } from 'react';
import { ChevronDown, MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Youtube, User, Building2, Package } from 'lucide-react';

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState('navigate');

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? '' : section);
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative shadow/gradient at top */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-slate-200/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Desktop Footer */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-8 mb-12">
            {/* Navigate Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Navigate</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/news-events" className="text-gray-300 hover:text-white transition-colors">News & Events</a></li>
                <li><a href="/career" className="text-gray-300 hover:text-white transition-colors">Career</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* For Patients Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">For Patients</h4>
              <ul className="space-y-3">
                <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Our Services</a></li>
                <li><a href="/department" className="text-gray-300 hover:text-white transition-colors">Our Departments</a></li>
                <li><a href="/doctors" className="text-gray-300 hover:text-white transition-colors">Our Doctors</a></li>
                <li><a href="/packages" className="text-gray-300 hover:text-white transition-colors">Our Packages</a></li>
              </ul>
            </div>

            {/* Visit Us Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Visit Us</h4>
              <div className="mb-6">
                <a href="https://www.google.com/maps" className="text-gray-300 hover:text-white transition-colors flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>
                    Unico Hospitals PLC.<br />
                    23 Bir Uttam K. M. Shafiullah Sarak (Green Road)<br />
                    Dhaka-1205, Bangladesh
                  </span>
                </a>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
                <div className="space-y-2">
                  <a href="mailto:info@unicohospitals.com" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    info@unicohospitals.com
                  </a>
                  <a href="mailto:career@unicohospitals.com" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    career@unicohospitals.com
                  </a>
                  <a href="tel:09677667766" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    096 77 66 77 66
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons & Social Column */}
            <div>
              <div className="space-y-4 mb-8">
                <a href="/doctors" className="group flex items-center justify-between bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-4 py-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5" />
                    <span className="font-medium">Find a Doctor</span>
                  </div>
                  <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a href="/department" className="group flex items-center justify-between bg-green-600 hover:bg-green-700 transition-all duration-300 px-4 py-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5" />
                    <span className="font-medium">Explore Departments</span>
                  </div>
                  <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a href="/packages" className="group flex items-center justify-between bg-purple-600 hover:bg-purple-700 transition-all duration-300 px-4 py-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5" />
                    <span className="font-medium">Curated Packages</span>
                  </div>
                  <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/unicohospitals" className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/unicohospitalsplc" className="p-2 bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/90650076" className="p-2 bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@UnicoHospitals" className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden mb-8">
          {/* Navigate Accordion */}
          <div className="border-b border-gray-700">
            <button 
              onClick={() => toggleAccordion('navigate')}
              className="w-full py-4 px-0 flex items-center justify-between text-left"
            >
              <span className="text-lg font-semibold">Navigate</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${openAccordion === 'navigate' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'navigate' && (
              <div className="pb-4">
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                  <li><a href="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/news-events" className="text-gray-300 hover:text-white transition-colors">News & Events</a></li>
                  <li><a href="/career" className="text-gray-300 hover:text-white transition-colors">Career</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* For Patients Accordion */}
          <div className="border-b border-gray-700">
            <button 
              onClick={() => toggleAccordion('patients')}
              className="w-full py-4 px-0 flex items-center justify-between text-left"
            >
              <span className="text-lg font-semibold">For Patients</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${openAccordion === 'patients' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'patients' && (
              <div className="pb-4">
                <ul className="space-y-2">
                  <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Our Services</a></li>
                  <li><a href="/department" className="text-gray-300 hover:text-white transition-colors">Our Departments</a></li>
                  <li><a href="/doctors" className="text-gray-300 hover:text-white transition-colors">Our Doctors</a></li>
                  <li><a href="/packages" className="text-gray-300 hover:text-white transition-colors">Our Packages</a></li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className="text-2xl font-bold text-white">
                UNICO
                <span className="block text-sm font-normal text-gray-400">HOSPITALS</span>
              </div>
            </div>

            {/* Description */}
            <div className="text-center lg:text-left order-3 lg:order-2">
              <p className="text-gray-300 text-sm">
                Unico Hospitals PLC, established in June 2008 as a Public Limited Company, 
                aims to create a state-of-the-art, 250-bed multi-speciality hospital offering 
                comprehensive healthcare services.
              </p>
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right order-2 lg:order-3">
              <p className="text-gray-400 text-sm mb-2">©2025 Unico Hospitals. All Rights Reserved</p>
              <a 
                href="https://dcastalia.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
              >
                Designed & Developed by Dcastalia
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;