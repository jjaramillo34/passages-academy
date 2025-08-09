'use client'

import Image from 'next/image'
import { Users, Heart, Target, GraduationCap } from 'lucide-react'

export default function AboutUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 lg:h-[500px]">
            <Image
              src="/images/modern_education_academy_building_exterior_dusk.jpg"
              alt="Passages Academy building"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Passages Academy is a New York City Department of Education (DOE) school operated by District 79. 
                Passages Academy operates in collaboration with the New York City Administration of Children Services (ACS), 
                Division of Youth and Family Justice (DYFJ), and Office of Youth and Family Development (OYFD) to provide 
                exceptional educational services to New York City students entrusted to their care and custody.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We also collaborate with the Office of Children and Family Services to provide academic instruction 
                to students of New York City, ensuring comprehensive support and educational opportunities for all 
                students in our care.
              </p>
              
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">NYC DOE District 79</h3>
                    <p className="text-gray-600 text-sm">Department of Education partnership</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">ACS & DYFJ</h3>
                    <p className="text-gray-600 text-sm">Children Services collaboration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">OYFD Partnership</h3>
                    <p className="text-gray-600 text-sm">Youth and Family Development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <GraduationCap className="w-4 h-4 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">OCFS Collaboration</h3>
                    <p className="text-gray-600 text-sm">Children and Family Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
