import React from 'react';
import { ArrowRight, FileText, AlertTriangle, Heart, Droplets } from 'lucide-react';
import Image from 'next/image';
const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Chemotherapy",
      description: "Advanced cancer treatment in a supportive setting.",
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      bgColor: "bg-gray-100",
      textColor: "text-gray-800"
    },
    {
      id: 2,
      title: "Critical Care",
      description: "Tailored healthcare solutions for businesses.",
      icon: <AlertTriangle className="w-8 h-8 text-white" />,
      bgColor: "bg-blue-600",
      textColor: "text-white"
    },
  
    
  ];

  return (
    <div className="bg-white py-20 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1  gap-12 mb-16">
          <div>
            <div className="mb-4">
              <span className="text-blue-500 text-sm font-medium tracking-wider uppercase">
                Services
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What we do
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our state-of-the-art facility is equipped with the latest medical technology, and our 
              team of experienced professionals is committed to delivering personalized, compassionate care.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service Cards */}
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${service.bgColor} ${service.textColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group ${
                index === 3 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                service.textColor === 'text-white' ? 'text-gray-200' : 'text-gray-600'
              }`}>
                {service.description}
              </p>
            </div>
          ))}

          {/* Large Feature Card */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden relative group hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
            <Image 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Healthcare professional with patient"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative z-20 p-8 h-full flex flex-col justify-end min-h-[300px]">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                Experience healthcare<br />
                redefined with excellence<br />
                and care.
              </h3>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 transition-all duration-300 hover:gap-3 w-fit group">
                All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Services Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="bg-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <div className="mb-6">
              <Heart className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Emergency Care
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              24/7 emergency medical services with rapid response teams.
            </p>
          </div>

          <div className="bg-blue-500 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <div className="mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Laboratory Services
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Comprehensive diagnostic testing with accurate results.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <div className="mb-6">
              <Droplets className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Radiology
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Advanced imaging technology for precise diagnostics.
            </p>
          </div>

          <div className="bg-slate-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <div className="mb-6">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Surgery
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              State-of-the-art surgical procedures with expert care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;