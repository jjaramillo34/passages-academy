'use client'

import { Heart } from 'lucide-react'

export default function PartnershipsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Partnerships</h2>
        </div>

        {/* Literacy for Incarcerated Teens */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <a href="https://www.literacyforincarceratedteens.org/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/literacy-incarcerated-teens-logo.png" 
                  alt="Literacy for Incarcerated Teens" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                />
              </a>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                <a href="http://www.literacyforincarceratedteens.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-semibold">
                  Literacy for Incarcerated Teens
                </a>{' '}
                has partnered with Passages since 2003 to grow our school library program into what it is today. 
                Their generosity has put thousands of books into our students' hands and provided critical funding for a wide array of programs and professional development, as well as equipment and supplies.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-8">
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Museum of Modern Art */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <a href="https://www.moma.org/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/moma-logo.png" 
                  alt="Museum of Modern Art" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                />
              </a>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                The{' '}
                <a href="https://www.moma.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-semibold">
                  Museum of Modern Art
                </a>{' '}
                is the preeminent modern art museum in New York City. Through our partnership, students benefit from VIP tours, art-making workshops, and education outreach that brings MoMA to students in secure settings.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-8">
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* New Victory Theater */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <a href="https://www.newvictory.org/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/new-victory-theater-logo.png" 
                  alt="New Victory Theater" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                />
              </a>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                <a href="https://www.newvictory.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-semibold">
                  New Victory Theater
                </a>{' '}
                is a standard-bearer of quality performing arts for young audiences in the United States. The theater provides performances, education and special programs both at the theater and as outreach to schools. The ages of the programs range from children to young adults.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-8">
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* NYC Public Libraries */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">NYC Public Libraries</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our partnerships with New York City's public libraries provide a range of programming to benefit both students and staff. 
            Recent public library programs have included job readiness and short story workshops. 
            Click on the links below to see what New York's public libraries have to offer.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <a href="https://www.nypl.org/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/nypl-logo.png" 
                  alt="New York Public Library" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform mb-4"
                />
              </a>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">New York Public Library</h4>
              <p className="text-gray-600 text-sm mt-2">Manhattan, Bronx, and Staten Island libraries</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <a href="https://www.queenslibrary.org/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/qpl-logo.png" 
                  alt="Queens Public Library" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform mb-4"
                />
              </a>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">Queens Public Library</h4>
              <p className="text-gray-600 text-sm mt-2">Queens borough library system</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <a href="https://www.bklynlibrary.org/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/bpl-logo.png" 
                  alt="Brooklyn Public Library" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform mb-4"
                />
              </a>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">Brooklyn Public Library</h4>
              <p className="text-gray-600 text-sm mt-2">Brooklyn borough library system</p>
            </div>
          </div>
        </div>

        {/* Partnership Impact */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl text-white">
            <h4 className="text-2xl font-bold mb-4">Building Stronger Communities Through Partnership</h4>
            <p className="text-lg mb-6 opacity-90">
              These collaborations enrich our students' educational experience and provide opportunities that extend beyond the classroom.
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center mx-auto">
              <Heart className="w-5 h-5 mr-2" />
              Learn About Partnership Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
