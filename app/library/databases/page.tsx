'use client'

import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

interface Database {
  name: string
  url: string
  image: string
  description: string
  alt: string
}

const grolierDatabases = [
  'Encyclopedia Americana',
  'Lands and Peoples',
  'Grolier Multimedia Encyclopedia',
  'Amazing Animals',
  'The New Book of Knowledge',
  'The New Book of Popular Science'
]

const galeDatabases: Database[] = [
  {
    name: 'InfoTrac OneFile',
    url: 'https://www.galesupport.com/novelGeo/novelGeoLink.php?loc=nysl_me_ps695_pa&db=ITOF',
    image: '/images/logos/itof-logo.png',
    description: 'News and periodical articles including current events, health care, science, hobbies, and politics.',
    alt: 'InfoTrac OneFile'
  },
  {
    name: 'Academic OneFile',
    url: 'https://www.galesupport.com/novelGeo/novelGeoLink.php?loc=nysl_me_ps695_pa&db=AONE',
    image: '/images/logos/academic-onefile-logo.png',
    description: 'Peer-reviewed, full-text articles from the world\'s leading journals and reference sources.',
    alt: 'Academic OneFile'
  },
  {
    name: 'New York State Newspapers',
    url: 'https://www.galesupport.com/novelGeo/novelGeoLink.php?loc=nysl_me_ps695_pa&db=SP01',
    image: '/images/logos/ny-state-newspapers-logo.png',
    description: 'Full-text articles from twenty-five New York state newspapers including the New York Times.',
    alt: 'New York State Newspapers'
  },
  {
    name: 'General NewsBank',
    url: 'https://www.galesupport.com/novelGeo/novelGeoLink.php?loc=nysl_me_ps695_pa&db=STND',
    image: '/images/logos/general-newsbank-logo.png',
    description: 'Full-text newspaper database which allows users to search articles instantly by title, headline, date, newspaper section or other assigned fields.',
    alt: 'General NewsBank'
  },
  {
    name: 'General Science Collection',
    url: 'https://www.galesupport.com/novelGeo/novelGeoLink.php?loc=nysl_me_ps695_pa&db=PPGS',
    image: '/images/logos/general-science-collection-logo.png',
    description: 'A collection of over 1,000 peer-reviewed journals including Nature, National Geographic, and Science World/Current Science.',
    alt: 'General Science Collection'
  },
  {
    name: 'Opposing Viewpoints',
    url: 'https://www.galesupport.com/novelGeo/novelGeoLink.php?loc=nysl_me_ps695_pa&db=OVIC',
    image: '/images/logos/opposing-viewpoints-logo.png',
    description: 'Covers today\'s pressing social issues from many angles.',
    alt: 'Opposing Viewpoints'
  },
  {
    name: 'U.S. History Collection',
    url: 'https://www.galesupport.com/novelGeo/novelGeoLink.php?loc=nysl_me_ps695_pa&db=PPUS',
    image: '/images/logos/us-history-collection-logo.png',
    description: 'A well-rounded collection of full-text journals and magazines, as well as archives of images, video and audio recordings about U.S. History and current events.',
    alt: 'U.S. History Collection'
  },
  {
    name: 'World History Collection',
    url: 'https://www.galesupport.com/novelGeo/novelGeoLink.php?loc=nysl_me_ps695_pa&db=PPWH',
    image: '/images/logos/world-history-collection-logo.png',
    description: 'Another collection of journals and magazines, as well as archives of images, video and audio recordings exploring world history and current events.',
    alt: 'World History Collection'
  }
]

export default function DatabasesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container py-6">
          <div className="flex items-center space-x-4 mb-4">
            <Link 
              href="/library" 
              className="text-primary-600 hover:text-primary-700 flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Library</span>
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Databases</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding">
        <div className="container">
          {/* Introduction */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="max-w-4xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We have access to many excellent databases through the NOVELNY program. These are a great place to find supplementary nonfiction articles. 
                Many of these databases also allow you to filter your results by reading level. Your school librarian is always available to give you a demonstration.
              </p>
              <p className="text-lg text-gray-700">
                <Link href="/library#contact" className="text-primary-600 hover:text-primary-700 underline">
                  Ask your school librarian
                </Link>
                {' '}for login information, if needed.
              </p>
            </div>
          </div>

          {/* Grolier Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">GROLIER</h2>
                <a 
                  href="https://digital.scholastic.com/resources/slp/#/login?productCode=schgo&ref=MTU5MTgwNDU5NHxodHRwOi8vd3d3LnBhc3NhZ2VzYWNhZGVteWxpYnJhcmllcy5vcmcvZGF0YWJhc2VzLmh0bWw%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img 
                    src="/images/logos/grolier-logo.png" 
                    alt="Grolier Online" 
                    className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                  />
                </a>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Grolier Online Passport provides access to:</h3>
                <div className="grid grid-cols-1 gap-2 text-gray-700">
                  {grolierDatabases.map((database, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">{database}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center my-8">
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Gale Power Search */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">GALE POWER SEARCH</h2>
                <a 
                  href="https://www.galesupport.com/novelGeo/novelGeoLink.php?loc=%20nysl_me_ps695_pa&db=GPS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img 
                    src="/images/logos/gale-power-search-logo.png" 
                    alt="Gale Power Search" 
                    className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                  />
                </a>
              </div>
              <div className="flex items-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Search all of Gale's content at once. This is the place to start a very broad search.
                </p>
              </div>
            </div>
          </div>

          {/* Other Gale Databases */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700">
              If you have a particular search try these other databases by Gale which target more specific areas.
            </p>
          </div>

          {/* Database Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galeDatabases.map((database, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <a 
                    href={database.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img 
                      src={database.image} 
                      alt={database.alt} 
                      className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                      style={{maxHeight: '120px'}}
                    />
                  </a>
                </div>
                <div className="text-center mb-4">
                  <a 
                    href={database.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-semibold flex items-center justify-center space-x-2"
                  >
                    <span>{database.name}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {database.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Need Help Getting Started?</h3>
              <p className="text-lg mb-6 opacity-90">
                Our librarians are always available to provide demonstrations and help you find the right resources for your research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/library#contact"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Contact a Librarian
                </Link>
                <Link 
                  href="/library"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Back to Library
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
