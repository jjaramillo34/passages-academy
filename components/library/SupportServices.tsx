'use client'

import Link from 'next/link'
import { BookOpen, Users, Heart, Mail } from 'lucide-react'

interface SupportServicesProps {
  askLibrarianUrl?: string
  generalSupport?: string
}

export default function SupportServices({ askLibrarianUrl, generalSupport }: SupportServicesProps) {
  return (
    <>
      {/* Library Support Services Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Library Support Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated library team is here to help students, parents, and teachers succeed
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Students</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Digital platform tutorials</li>
                <li>Reading recommendations</li>
                <li>Research assistance</li>
                <li>Technology support</li>
              </ul>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Parents</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Account setup assistance</li>
                <li>Home reading support</li>
                <li>Bilingual resources guidance</li>
                <li>Progress tracking help</li>
              </ul>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Teachers</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Curriculum integration</li>
                <li>Classroom resources</li>
                <li>Student progress reports</li>
                <li>Professional development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-secondary-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Help? We&rsquo;re Here for You
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our library team for personalized assistance with digital resources, 
            account setup, or general research questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={askLibrarianUrl || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-secondary-600 hover:bg-gray-100 px-8 py-4 rounded-md font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Ask a Librarian
            </a>
            <Link 
              href="/"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary-600 px-8 py-4 rounded-md font-semibold transition-colors inline-flex items-center justify-center"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Back to Main Site
            </Link>
          </div>
          
          <div className="mt-12 p-6 bg-secondary-700 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">General Support</h3>
            <p className="text-secondary-100">
              {generalSupport || 
               'Contact your school librarian for login issues and general assistance'}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
