'use client'

import { Users, BookOpen, MessageCircle, Calendar, Phone, ChevronRight } from 'lucide-react'

export default function ParentServices() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Parent Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We believe parent and guardian involvement is essential to student success. 
            Discover the many ways you can engage with your child's education at Passages Academy.
          </p>
        </div>

        {/* Parent Services Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Curriculum Night</h3>
            <p className="text-gray-600 mb-4">
              Learn about our curriculum, meet teachers, and ask questions about your child's education.
            </p>
            <div className="text-sm text-gray-500">
              Held annually in the fall
            </div>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-lg">
            <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Parent-Teacher Conferences</h3>
            <p className="text-gray-600 mb-4">
              One-on-one discussions about your child's progress, goals, and support strategies.
            </p>
            <div className="text-sm text-gray-500">
              Twice yearly - Fall & Spring
            </div>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Parent Coordinator</h3>
            <p className="text-gray-600 mb-4">
              Direct support from dedicated coordinators and access to family engagement resources.
            </p>
            <div className="text-sm text-gray-500">
              Multiple site coordinators available
            </div>
          </div>
        </div>

        {/* Benefits Highlight */}
        <div className="bg-gray-50 p-8 rounded-2xl mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Parent Engagement Matters
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-primary-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Academic Success</h4>
              <p className="text-gray-600 text-sm">
                Students with engaged parents show improved academic performance and higher graduation rates.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-secondary-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Stronger Relationships</h4>
              <p className="text-gray-600 text-sm">
                Build meaningful connections with teachers and support your child's social development.
              </p>
            </div>
            <div className="text-center">
              <MessageCircle className="w-12 h-12 text-primary-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Open Communication</h4>
              <p className="text-gray-600 text-sm">
                Establish clear communication channels for ongoing support and collaboration.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Get Involved in Your Child's Education</h3>
            <p className="text-lg mb-6 opacity-90">
              Discover all the ways you can support your child's success at Passages Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/parent-services"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                Explore All Parent Services
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Contact Parent Coordinator
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
