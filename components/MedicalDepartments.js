"use client"
import { useState } from "react"
import { ChevronRight, ArrowRight } from "lucide-react"


const MedicalDepartments = () => {
  const [hoveredDepartment, setHoveredDepartment] = useState(null)

  const departments = [
    {
      id: 1,
      title: "Family Medicine",
      description: "Advanced Family Medicine",
      href: "/department/family-medicine",
    },
    {
      id: 2,
      title: "Gastroenterology & Liver Disease",
      description: "Expert diagnostic and treatment of conditions related to the digestive system and liver.",
      href: "/department/gastroenterology-liver-disease",
    },
    {
      id: 3,
      title: "Internal Medicine",
      description: "Advanced Internal Medicine care.",
      href: "/department/internal-medicine",
    },
    {
      id: 4,
      title: "Laboratory Medicine",
      description: "Advanced Laboratory Medicine care.",
      href: "/department/laboratory-medicine",
    },
    {
      id: 5,
      title: "Obstetrics & Gynaecology",
      description:
        "Comprehensive care for women's reproductive health, including pregnancy, childbirth, and related medical conditions.",
      href: "/department/obstetrics-gynaecology",
    },
    {
      id: 6,
      title: "Orthopedics Joints & Spine Surgery",
      description: "Advanced Orthopedics Joints & Spine Surgery surgical care.",
      href: "/department/orthopedics-joints-spine-surgery",
    },
  ]

  const images = [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1524683745036-b46f52b8505a?w=300&h=250&fit=crop",
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=250&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=280&h=180&fit=crop",
    "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=320&h=240&fit=crop",
  ]

  return (
    <div>
      
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-4 block">Departments</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Expert care across every specialty</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover Unico Hospital's specialized departments, each dedicated to delivering top-tier medical care with
              a focus on your unique needs. From advanced heart treatments to comprehensive pediatric care, our expert
              teams are here to support your health journey every step of the way.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Departments List */}
            <div className="space-y-4">
              {departments.map((dept, index) => (
                <div
                  key={dept.id}
                  className={`group relative rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border ${
                    hoveredDepartment === dept.id
                      ? "bg-blue-700 text-white border-blue-700 shadow-lg"
                      : "bg-white border-gray-100 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                  }`}
                  onMouseEnter={() => setHoveredDepartment(dept.id)}
                  onMouseLeave={() => setHoveredDepartment(null)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div
                        className={`w-3 h-3 rounded-full mt-2 transition-colors ${
                          hoveredDepartment === dept.id ? "bg-white" : "bg-blue-500 group-hover:bg-white"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <h4
                          className={`text-xl font-semibold mb-2 transition-colors ${
                            hoveredDepartment === dept.id ? "text-white" : "text-gray-800 group-hover:text-white"
                          }`}
                        >
                          {dept.title}
                        </h4>
                        <p
                          className={`text-sm leading-relaxed transition-colors ${
                            hoveredDepartment === dept.id ? "text-blue-100" : "text-gray-600 group-hover:text-blue-100"
                          }`}
                        >
                          {dept.description}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`ml-4 p-2 rounded-full transition-all duration-300 ${
                        hoveredDepartment === dept.id
                          ? "bg-white/20 rotate-45"
                          : "bg-gray-100 group-hover:bg-white/20 group-hover:rotate-45"
                      }`}
                    >
                      <ChevronRight
                        className={`w-4 h-4 transition-colors ${
                          hoveredDepartment === dept.id ? "text-white" : "text-gray-600 group-hover:text-white"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}

              {/* All Departments Button */}
              <div className="pt-8">
                <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center space-x-3">
                  <span>All Departments</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Images Gallery */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 h-[600px]">
                {/* First Column */}
                <div className="space-y-4">
                  <div className="h-48 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img
                      src={images[0] || "/placeholder.svg"}
                      alt="Medical facility"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-60 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img
                      src={images[1] || "/placeholder.svg"}
                      alt="Medical equipment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Second Column */}
                <div className="space-y-4 pt-8">
                  <div className="h-72 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img
                      src={images[2] || "/placeholder.svg"}
                      alt="Patient care"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-44 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img
                      src={images[3] || "/placeholder.svg"}
                      alt="Medical consultation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Image */}
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 border-4 border-white">
                <img
                  src={images[4] || "/placeholder.svg"}
                  alt="Medical professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default MedicalDepartments
