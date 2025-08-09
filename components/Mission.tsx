'use client'

import Image from 'next/image'
import { Target, Heart, Users, GraduationCap, Star, BookOpen } from 'lucide-react'

export default function Mission() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            
            {/* Mission Statement */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                Passages Academy Mission Statement
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Passages Academy we believe all students should be valued, loved and supported to meet the 
                social emotional and academic needs of each student so they can become successful members of 
                their communities. Starting day one, this will be accomplished by working with our multiple 
                partners to find the strengths and weaknesses of each student so we can develop a system of 
                supports while they are at Passages Academy such as developing a blue print and student profile 
                which will include supports while at Passages and community resources upon reentry into the community.
              </p>
            </div>

            {/* Vision Statement */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
                Our School Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Passages Academy will be the instructional model for student centered academic excellence. 
                Our goal is to provide our students with a balanced education, instill positive social growth 
                and develop the necessary tools to succeed in the 21st century.
              </p>
            </div>

            {/* Key Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Valued & Loved</h4>
                  <p className="text-gray-600 text-sm">Every student is valued and supported</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-secondary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Community Success</h4>
                  <p className="text-gray-600 text-sm">Preparing students for community integration</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Student-Centered</h4>
                  <p className="text-gray-600 text-sm">Individualized support and blueprints</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="w-6 h-6 text-secondary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">21st Century Ready</h4>
                  <p className="text-gray-600 text-sm">Tools for modern success</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BookOpen className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Academic Excellence</h4>
                  <p className="text-gray-600 text-sm">Balanced educational approach</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <GraduationCap className="w-6 h-6 text-secondary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Social Growth</h4>
                  <p className="text-gray-600 text-sm">Positive social development focus</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 lg:h-[600px]">
            <Image
              src="/images/diverse_students_learning_library.jpg"
              alt="Students learning together"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
