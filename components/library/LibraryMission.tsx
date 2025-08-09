'use client'

import Image from 'next/image'
import { Heart, Globe, Users } from 'lucide-react'

export default function LibraryMission() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Library Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              The Passages Academy Library is dedicated to creating lifelong learners through 
              access to diverse digital resources and personalized support. We believe that 
              every student deserves access to quality educational materials regardless of 
              their circumstances.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-secondary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Inclusive Learning</h3>
                  <p className="text-gray-600">Supporting students from diverse backgrounds and learning needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Bilingual Resources</h3>
                  <p className="text-gray-600">Extensive collection in both English and Spanish</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-secondary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Personal Support</h3>
                  <p className="text-gray-600">Dedicated librarian assistance for all digital platforms</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-96 lg:h-[500px]">
            <Image
              src="/images/child_digital_learning_tablet_ebook_reading.jpg"
              alt="Student using digital learning resources"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
