"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Star, MapPin, Calendar } from "lucide-react"

const DoctorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const doctors = [
    {
      id: 1,
      name: "Dr. Ishtiaq Ahmad",
      specialty: "Neuromedicine & Interventional Neurology",
      position: "Senior Consultant",
      experience: "15+ Years",
      rating: 4.9,
      reviews: 127,
      location: "Neurology Department",
      image: "https://images.unsplash.com/photo-1612276529731-4b21494e6d71?height=400&width=500",
      availability: "Available Today",
    },
    {
      id: 2,
      name: "Prof. Dr. Moeen Uddin",
      specialty: "Clinical & Interventional Cardiology",
      position: "Senior Consultant",
      experience: "20+ Years",
      rating: 4.8,
      reviews: 203,
      location: "Cardiology Department",
      image: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?height=400&width=500",
      availability: "Available Tomorrow",
    },
    {
      id: 3,
      name: "Dr. Lt Colonel (Retd) Md. Rahman",
      specialty: "Family Medicine",
      position: "Senior Consultant",
      experience: "18+ Years",
      rating: 4.9,
      reviews: 156,
      location: "Family Medicine",
      image: "https://plus.unsplash.com/premium_photo-1661630723145-eeb48f1bde8b?height=400&width=500",
      availability: "Available Today",
    },
    {
      id: 4,
      name: "Dr. Fatema Yasmin",
      specialty: "Obstetrics & Gynaecology",
      position: "Senior Consultant",
      experience: "12+ Years",
      rating: 4.7,
      reviews: 89,
      location: "Women's Health",
      image: "/placeholder.svg?height=300&width=300",
      availability: "Available Today",
    },
    {
      id: 5,
      name: "Dr. Sanjida Rahman",
      specialty: "Obstetrics & Gynaecology",
      position: "Senior Consultant",
      experience: "14+ Years",
      rating: 4.8,
      reviews: 112,
      location: "Women's Health",
      image: "/placeholder.svg?height=300&width=300",
      availability: "Available Tomorrow",
    },
    {
      id: 6,
      name: "Dr. Tunoggina Afrin Khan",
      specialty: "Clinical & Interventional Cardiology",
      position: "Consultant",
      experience: "10+ Years",
      rating: 4.6,
      reviews: 67,
      location: "Cardiology Department",
      image: "/placeholder.svg?height=300&width=300",
      availability: "Available Today",
    },
  ]

  // Calculate slides for different screen sizes
  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1 // Mobile
      if (window.innerWidth < 1024) return 2 // Tablet
      return 3 // Desktop
    }
    return 3
  }

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView())
  const totalSlides = Math.max(0, doctors.length - cardsPerView + 1)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // Calculate the transform percentage
  const transformPercent = -(currentIndex * (100 / cardsPerView))

  return (
    <div className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center lg:text-left lg:flex lg:justify-between lg:items-end mb-12 lg:mb-16">
          <div className="lg:max-w-2xl mb-8 lg:mb-0">
            <div className="mb-4 lg:mb-6">
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full">
                Our Medical Team
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight">
              Meet the experts who care for you
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Our doctors understand that healthcare is personal, and they take the time to get to know each patient,
              listen to their concerns, and involve them in every step of their care journey.
            </p>
          </div>

          {/* Navigation Controls - Desktop */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex >= totalSlides - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-blue-700 transition-all duration-300 hover:shadow-lg font-semibold ml-4">
              All Doctors
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden justify-center items-center gap-4 mb-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 disabled:opacity-50"
            disabled={currentIndex >= totalSlides - 1}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Doctors Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${transformPercent}%)`,
            }}
          >
            {doctors.map((doctor) => (
              <div key={doctor.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3 lg:px-4">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group h-full">
                  {/* Doctor Image */}
                  <div className="relative h-64 sm:h-72 lg:h-80 bg-gradient-to-br from-blue-50 to-slate-50 overflow-hidden">
                    <img
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                    {/* Availability Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          doctor.availability.includes("Today")
                            ? "bg-green-100 text-green-700 border border-green-200"
                            : "bg-yellow-100 text-yellow-700 border border-yellow-200"
                        }`}
                      >
                        {doctor.availability}
                      </span>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold text-gray-800">{doctor.rating}</span>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-4 sm:p-5 lg:p-6">
                    {/* Specialty Badge */}
                    <div className="mb-3">
                      <span className="text-blue-700 text-xs font-semibold bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        {doctor.specialty}
                      </span>
                    </div>

                    {/* Name and Position */}
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-700 transition-colors leading-tight">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium mb-3">{doctor.position}</p>

                    {/* Experience and Reviews */}
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{doctor.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{doctor.reviews} reviews</span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{doctor.location}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg text-sm">
                        Book Appointment
                      </button>
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile All Doctors Button */}
        <div className="flex lg:hidden justify-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl flex items-center gap-2 hover:bg-blue-700 transition-all duration-300 hover:shadow-lg font-semibold">
            All Doctors
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop Slide Indicators */}
        <div className="hidden lg:flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-blue-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DoctorsSection
