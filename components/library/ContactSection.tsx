'use client'

import { BookOpen, Users, MapPin, Monitor, Mail, Phone } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Get in touch with our librarians at each site location. Our team is here to support your educational needs and answer any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Belmont */}
          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary-600">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">BELMONT</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold text-lg">Jessica Fenster-Sparber</p>
                  <p className="text-gray-600">Passages Academy--Belmont</p>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary-600" />
                    <a href="mailto:literacyforteens@outlook.com" className="text-primary-600 hover:text-primary-700 underline">
                      literacyforteens@outlook.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-primary-600" />
                    <a href="tel:718-647-1800" className="text-primary-600 hover:text-primary-700">
                      718-647-1800
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bronx Hope */}
          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-secondary-600">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-secondary-600" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">BRONX HOPE</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold text-lg">Jamila Abdulrashid</p>
                  <p className="text-gray-600">Passages Academy--Bronx Hope</p>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-secondary-600" />
                    <a href="mailto:jabdulrashid@schools.nyc.gov" className="text-secondary-600 hover:text-secondary-700 underline">
                      jabdulrashid@schools.nyc.gov
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-secondary-600" />
                    <a href="tel:718-294-4832" className="text-secondary-600 hover:text-secondary-700">
                      718-294-4832 ext. 2010
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Crossroads */}
          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-green-600">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">CROSSROADS</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold text-lg">Elaine Roberts</p>
                  <p className="text-gray-600">Passages Academy--Crossroads</p>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-green-600" />
                    <a href="mailto:erobert2@schools.nyc.gov" className="text-green-600 hover:text-green-700 underline">
                      erobert2@schools.nyc.gov
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-green-600" />
                    <a href="tel:718-240-3824" className="text-green-600 hover:text-green-700">
                      718-240-3824
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Horizon */}
          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-purple-600">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">HORIZON</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold text-lg">Claudio Leon</p>
                  <p className="text-gray-600">Passages Academy--Horizon</p>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-purple-600" />
                    <a href="mailto:clodious@gmail.com" className="text-purple-600 hover:text-purple-700 underline">
                      clodious@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-purple-600" />
                    <a href="tel:718-401-2411" className="text-purple-600 hover:text-purple-700">
                      718-401-2411
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* General Contact Info */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl text-white">
            <h4 className="text-2xl font-bold mb-4">Need Help Choosing a Location?</h4>
            <p className="text-lg mb-6 opacity-90">
              Not sure which librarian to contact? Reach out to any of our team members and they'll help connect you with the right resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                General Library Inquiry
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Main Office
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
