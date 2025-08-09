'use client'

import { GraduationCap, Heart, Users, Target } from 'lucide-react'

export default function PrincipalsMessage() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Principal's Message
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 lg:p-12 rounded-2xl shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed text-center mb-8 italic">
              "Passages Academy isn't your traditional school but that's ok, that's really ok. We love the fact that this isn't traditional, we now have the opportunity to customize student needs, talk through what works best for them and create a plan for their success. Our school counselors, teachers, administrators and ACS team partner together to make this academic experience meaningful. Students show up every day not only to learn Math, Science, English and Social Studies but to learn about themselves. Learning about who you are, what you think, and why you think is the necessary process one must take to grow and develop into the person you are destined to be."
            </blockquote>
            
            <div className="text-center">
              <div className="inline-block bg-white rounded-lg px-6 py-4 shadow-md">
                <p className="text-gray-900 font-semibold text-lg mb-1">
                  Passages Academy Principals
                </p>
                <p className="text-primary-600 font-medium">
                  Mr. Rashid & Mr. Carter
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Personalized Learning</h3>
              <p className="text-gray-600 text-sm">Customized education plans that meet each student's unique needs</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Collaborative Support</h3>
              <p className="text-gray-600 text-sm">Counselors, teachers, and administrators working together</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Self-Discovery</h3>
              <p className="text-gray-600 text-sm">Helping students understand themselves and their potential</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
