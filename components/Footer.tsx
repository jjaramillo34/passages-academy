'use client'

import Link from 'next/link'
import { BookOpen, MapPin, Phone, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Academy Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold">Passages Academy</div>
                <div className="text-sm text-gray-400">NYC DOE District 79</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Providing academic and social support services for students facing unique challenges.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>&ldquo;Creating lifelong learners, one book at a time&rdquo;</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-gray-400 hover:text-white transition-colors">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/#locations" className="text-gray-400 hover:text-white transition-colors">
                  Campus Locations
                </Link>
              </li>
              <li>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe4I3BLkxSvr2K4uSS_7Lj7at0ybCqI5XIExc8grvAqYw4-aA/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Ask a Librarian</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Digital Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Digital Resources</h3>
            <ul className="space-y-3">
              <li>
                <div className="text-gray-400">
                  <div className="font-medium text-white">Sora Reading App</div>
                  <div className="text-sm">E-book access platform</div>
                </div>
              </li>
              <li>
                <div className="text-gray-400">
                  <div className="font-medium text-white">myON Reader</div>
                  <div className="text-sm">Digital titles in English & Spanish</div>
                </div>
              </li>
              <li>
                <div className="text-gray-400">
                  <div className="font-medium text-white">Librarian Support</div>
                  <div className="text-sm">Login assistance available</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <div className="font-medium text-white">Main Campus</div>
                  <div className="text-sm">560 Brook Avenue</div>
                  <div className="text-sm">Bronx, NY 10455</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a 
                  href="tel:(718) 647-1800" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  (718) 647-1800
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe4I3BLkxSvr2K4uSS_7Lj7at0ybCqI5XIExc8grvAqYw4-aA/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact via Library Form
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Organizational Logos */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-6 text-white">Our Partnership</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex items-center space-x-3">
                <img 
                  src="/passages.png" 
                  alt="Passages Academy" 
                  className="h-16 w-auto"
                />
              </div>
              <div className="flex items-center space-x-3">
                <img 
                  src="/nycpublicshools.png" 
                  alt="NYC Public Schools" 
                  className="h-16 w-auto"
                />
              </div>
              <div className="flex items-center space-x-3">
                <img 
                  src="/d79logo.png" 
                  alt="NYC DOE District 79" 
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Passages Academy - NYC Department of Education, District 79. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Serving students facing unique challenges with academic and social support
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
