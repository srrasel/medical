"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Phone, MapPin, Users, Calendar, Heart } from "lucide-react"

const HospitalHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Exceptional doctors dedicated to your care",
      subtitle:
        "Whether you need routine care or specialized treatment, we are here to provide you with the highest level of medical excellence.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    },
    {
      title: "Get the right answers the first time",
      subtitle:
        "Effective treatment depends on getting the right diagnosis. Our experts diagnose and treat the toughest medical challenges.",
      image:
        "https://images.unsplash.com/photo-1745420052490-285dbfa1cf4d?q=80&w=1161&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Compassionate Care for a Healthier Tomorrow",
      subtitle:
        "Compassionate Care for a Healthier Tomorrow reflects Unico Hospital's dedication to providing patient-centered healthcare with empathy and excellence.",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
  ]

  const quickActions = [
    {
      title: "Find a Doctor",
      description: "Unparalleled care from compassionate doctors",
      icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
      href: "doctors",
    },
    {
      title: "Locate Us",
      description: "Easily find our hospital location and directions",
      icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />,
      href: "contact",
    },
    {
      title: "Career with Unico",
      description: "Comprehensive services tailored to your unique needs",
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      href: "career",
    },
    {
      title: "Book an Appointment",
      description: "Custom health packages designed just for you",
      icon: <Calendar className="w-5 h-5 md:w-6 md:h-6" />,
      href: "contact",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Hero Slider - Different heights for mobile and desktop */}
      <div className="relative h-[70vh] sm:h-[80vh] lg:h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img src={slide.image || "/placeholder.svg"} alt="Hospital" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/60"></div>
            </div>

            {/* Content - Mobile Centered, Desktop Left Aligned */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile Layout - Centered and Compact */}
                <div className="block lg:hidden text-center">
                  <div className="max-w-sm sm:max-w-md mx-auto">
                    <div className="overflow-hidden">
                      <h1
                        className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight transform transition-all duration-1000 delay-300 ${
                          index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                      >
                        {slide.title}
                      </h1>
                    </div>
                    <div className="overflow-hidden">
                      <p
                        className={`text-sm sm:text-base text-slate-200 mb-4 sm:mb-6 leading-relaxed transform transition-all duration-1000 delay-500 ${
                          index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                      >
                        {slide.subtitle}
                      </p>
                    </div>
                    <div className="overflow-hidden">
                      <button
                        className={`group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto ${
                          index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        } transition-all duration-1000 delay-700`}
                      >
                        <span>Find Consultant</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - Left Aligned */}
                <div className="hidden lg:block max-w-4xl">
                  <div className="overflow-hidden">
                    <h1
                      className={`text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-300 ${
                        index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                      }`}
                    >
                      {slide.title}
                    </h1>
                  </div>
                  <div className="overflow-hidden">
                    <p
                      className={`text-xl lg:text-2xl text-slate-200 mb-8 max-w-3xl leading-relaxed transform transition-all duration-1000 delay-500 ${
                        index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                      }`}
                    >
                      {slide.subtitle}
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <button
                      className={`group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 ${
                        index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                      } transition-all duration-1000 delay-700`}
                    >
                      <span>Find Consultant</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows - Hidden on mobile */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 lg:p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 lg:p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>

        {/* Slide Indicators - Better positioned for mobile */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions Section - Now separate from hero */}
      <div className="bg-white border-t border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout - Clean and Professional */}
          <div className="block lg:hidden py-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {quickActions.map((action, index) => (
                <div
                  key={index}
                  className="group cursor-pointer bg-gray-50 hover:bg-blue-50 p-4 rounded-2xl transition-all duration-300 hover:shadow-md border border-gray-100 hover:border-blue-200"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-blue-600 text-white rounded-xl group-hover:bg-blue-700 transition-colors duration-300 group-hover:scale-105 transform">
                      {action.icon}
                    </div>
                    <h3 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {action.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Emergency Hotline - Professional Design */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Emergency Hotline</h3>
                    <p className="text-xs text-red-100">24/7 Support Available</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">096 77 66 77 66</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Unchanged */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6 py-8">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="group cursor-pointer hover:bg-blue-50 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-600 text-white rounded-lg group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300">
                    {action.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center">
                      {action.title}
                      <ChevronRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{action.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Desktop Emergency Hotline */}
            <div className="group cursor-pointer bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-2">
                  <Phone className="w-6 h-6 animate-pulse" />
                  <h3 className="font-semibold text-lg">Emergency Hotline</h3>
                </div>
                <p className="text-2xl font-bold tracking-wider">096 77 66 77 66</p>
                <p className="text-sm text-red-100 mt-2">24/7 Emergency Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Floating Elements - Adjusted for new height */}
      <div className="absolute top-10 right-6 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-blue-400/10 to-slate-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/3 left-6 w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-slate-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </div>
  )
}

export default HospitalHeroSection
