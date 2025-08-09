'use client'

import { BookOpen, Search, Users, Monitor, ChevronRight, Mail, Calendar } from 'lucide-react'

export default function TeachersSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Teachers</h2>
          <h3 className="text-2xl font-semibold text-primary-600 mb-4">How can we collaborate?</h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            The Passages Academy Libraries are excited about partnering with our educator colleagues to provide top-notch information literacy instruction.
          </p>
          <p className="text-xl font-semibold text-gray-900 mt-6">
            We are here to serve you and your students!
          </p>
        </div>

        <div className="mb-12">
          <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ask us to:</h4>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Lesson Planning & Curriculum Support */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h5 className="text-lg font-semibold text-primary-600 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Lesson Planning & Curriculum Support
              </h5>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mt-1 mr-2 text-primary-600 flex-shrink-0" />
                  <span>Collaborate with you in planning a lesson, a unit, or a library program</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mt-1 mr-2 text-primary-600 flex-shrink-0" />
                  <span>Co-teach a co-planned unit with you in our library spaces or visit your classroom</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mt-1 mr-2 text-primary-600 flex-shrink-0" />
                  <span>Plan programs that support curricular themes</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mt-1 mr-2 text-primary-600 flex-shrink-0" />
                  <span>Interpret and apply the Standards for 21st Century Learners in curriculum design</span>
                </li>
              </ul>
            </div>

            {/* Resource Access & Materials */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h5 className="text-lg font-semibold text-primary-600 mb-4 flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Resource Access & Materials
              </h5>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mt-1 mr-2 text-primary-600 flex-shrink-0" />
                  <span>Help you locate and access library resources including print and non-print materials</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mt-1 mr-2 text-primary-600 flex-shrink-0" />
                  <span>Acquire library materials to help you teach your planned curriculum</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mt-1 mr-2 text-primary-600 flex-shrink-0" />
                  <span>Show you how to use our online catalog</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mt-1 mr-2 text-primary-600 flex-shrink-0" />
                  <span>Show you how to use our databases</span>
                </li>
              </ul>
            </div>

            {/* Student Support Services */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h5 className="text-lg font-semibold text-primary-600 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Student Support Services
              </h5>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mt-1 mr-2 text-primary-600 flex-shrink-0" />
                  <span>Assist your students in finding library materials for recreational reading</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mt-1 mr-2 text-primary-600 flex-shrink-0" />
                  <span>Assist your students in locating library materials relating to assignments</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mt-1 mr-2 text-primary-600 flex-shrink-0" />
                  <span>Connect you or your students with our partners in New York's three public library systems</span>
                </li>
              </ul>
            </div>

            {/* Technology & Training */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h5 className="text-lg font-semibold text-primary-600 mb-4 flex items-center">
                <Monitor className="w-5 h-5 mr-2" />
                Technology & Training
              </h5>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mt-1 mr-2 text-primary-600 flex-shrink-0" />
                  <span>Interweave appropriate technology into lesson plans</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mt-1 mr-2 text-primary-600 flex-shrink-0" />
                  <span>Provide one-on-one tutorials in information literacy</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mt-1 mr-2 text-primary-600 flex-shrink-0" />
                  <span>Train you on computer applications like Google Docs, Wikispaces, Dropbox, etc.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mt-1 mr-2 text-primary-600 flex-shrink-0" />
                  <span>Help you plan for success in teaching and collaboration with colleagues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl text-white text-center">
          <h4 className="text-2xl font-bold mb-4">Ready to Collaborate?</h4>
          <p className="text-lg mb-6 opacity-90">
            Let's work together to enhance your curriculum and support your students' learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Contact Library Team
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
