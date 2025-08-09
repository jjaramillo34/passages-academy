'use client'

import { BookOpen, Users, Phone } from 'lucide-react'

interface StudentResourcesProps {
  askLibrarianUrl?: string
}

export default function StudentResources({ askLibrarianUrl }: StudentResourcesProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Student Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access our digital library resources and support services
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 ml-4">Sora Reading App</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Access thousands of e-books through our digital reading platform
            </p>
            <a href="/library" className="text-primary-600 font-medium hover:text-primary-700">
              Learn More →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 ml-4">myON Reader</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Enhanced digital titles for pre-K&ndash;12 students in English and Spanish
            </p>
            <a href="/library" className="text-secondary-600 font-medium hover:text-secondary-700">
              Explore Resources →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 ml-4">Ask a Librarian</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Get help with digital platforms and research questions
            </p>
            <a 
              href={askLibrarianUrl || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 font-medium hover:text-primary-700"
            >
              Contact Support →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
