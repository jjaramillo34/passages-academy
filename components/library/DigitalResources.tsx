'use client'

import { BookOpen, ExternalLink, Smartphone, Mail } from 'lucide-react'

interface DigitalResourcesProps {
  askLibrarianUrl?: string
}

export default function DigitalResources({ askLibrarianUrl }: DigitalResourcesProps) {
  return (
    <section id="resources" className="section-padding bg-gray-50">
      <div className="container">
        {/* Sora Platform */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <a href="https://soraapp.com/welcome" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/sora-logo.png" 
                  alt="Sora Reading App" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                />
              </a>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sora Reading App</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Click on the icon to open the Sora ereading app. To log in simply use your 
                Passagesacademy.org account.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                If you need help login in please contact your school librarian.
              </p>
              <div className="mt-6">
                <a 
                  href="https://soraapp.com/welcome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 text-white hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Open Sora App
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="flex-shrink-0 px-4">
            <BookOpen className="w-6 h-6 text-gray-400" />
          </div>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* myON Platform */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">myON Reader</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                myON Reader gives pre-K–12 students access to thousands of enhanced digital titles 
                at a wide range of reading levels, in English and Spanish!
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                For login information please contact your school librarian.
              </p>
              <div className="mt-6">
                <a 
                  href="https://www.myon.com/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-600 text-white hover:bg-secondary-700 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Open myON Reader
                </a>
              </div>
            </div>
            <div className="text-center order-1 lg:order-2">
              <a href="https://www.myon.com/index.html" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/myon-logo.png" 
                  alt="myON Reader" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* General Access Information */}
        <div className="text-center mt-12">
          <div className="bg-primary-50 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-primary-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Access Your Digital Library
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              All digital platforms can be accessed using your Passagesacademy.org account. 
              Our librarians are available to help with login issues, platform navigation, 
              and finding the right resources for your learning needs.
            </p>
            <a 
              href={askLibrarianUrl || "https://docs.google.com/forms/d/e/1FAIpQLSe4I3BLkxSvr2K4uSS_7Lj7at0ybCqI5XIExc8grvAqYw4-aA/viewform"}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-600 text-white hover:bg-primary-700 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Librarian for Help
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
