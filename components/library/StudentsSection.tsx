'use client'

export default function StudentsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Students</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome students to your school library website!
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            If you are looking for the school based{' '}
            <a href="/library/databases" className="text-primary-600 hover:text-primary-700 underline">
              databases click here
            </a>{' '}
            otherwise scroll down to find a variety of resources put together by your librarians.
          </p>
        </div>

        {/* Fun & Games Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="flex-shrink-0 px-4">
              <h3 className="text-2xl font-bold text-gray-900">Fun & Games</h3>
            </div>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <a href="https://pbskids.org/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/pbs-kids-logo.png" 
                  alt="PBS Kids" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                  style={{maxWidth: '200px', maxHeight: '80px'}}
                />
              </a>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">PBS Kids</h4>
              <p className="text-gray-600 text-sm">Educational games and activities for all ages</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <a href="https://code.org/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/code-org-logo.png" 
                  alt="Code.org" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                  style={{maxWidth: '200px', maxHeight: '80px'}}
                />
              </a>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">Code.org</h4>
              <p className="text-gray-600 text-sm">Learn computer science and programming skills</p>
            </div>
          </div>
        </div>

        {/* Research & Information Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="flex-shrink-0 px-4">
              <h3 className="text-2xl font-bold text-gray-900">Research & Information</h3>
            </div>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <a href="https://www.nolo.com/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/nolo-logo.png" 
                  alt="Nolo Legal Information" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                  style={{maxWidth: '200px', maxHeight: '80px'}}
                />
              </a>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">Nolo</h4>
              <p className="text-gray-600 text-sm">Legal information and resources</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <a href="https://dmv.ny.gov/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/ny-dmv-logo.png" 
                  alt="NY DMV" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                  style={{maxWidth: '200px', maxHeight: '80px'}}
                />
              </a>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">NY DMV</h4>
              <p className="text-gray-600 text-sm">New York Department of Motor Vehicles</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <a href="https://www.britannica.com/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/britannica-logo.png" 
                  alt="Encyclopedia Britannica" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                  style={{maxWidth: '200px', maxHeight: '80px'}}
                />
              </a>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">Encyclopedia Britannica</h4>
              <p className="text-gray-600 text-sm">Comprehensive encyclopedia and reference</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <a href="https://www.bls.gov/ooh/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/occupational-outlook-logo.png" 
                  alt="Occupational Outlook Handbook" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                  style={{maxWidth: '200px', maxHeight: '80px'}}
                />
              </a>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">Occupational Outlook</h4>
              <p className="text-gray-600 text-sm">Career information and job outlook data</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <a href="https://www.guinnessworldrecords.com/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/guinness-logo.png" 
                  alt="Guinness World Records" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                  style={{maxWidth: '200px', maxHeight: '80px'}}
                />
              </a>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">Guinness World Records</h4>
              <p className="text-gray-600 text-sm">Amazing facts and world records</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <a href="https://www.cia.gov/library/publications/the-world-factbook/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/cia-factbook-logo.png" 
                  alt="CIA World Factbook" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                  style={{maxWidth: '200px', maxHeight: '80px'}}
                />
              </a>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">CIA World Factbook</h4>
              <p className="text-gray-600 text-sm">Country information and statistics</p>
            </div>
          </div>
        </div>

        {/* Public Libraries Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="flex-shrink-0 px-4">
              <h3 className="text-2xl font-bold text-gray-900">Public Libraries</h3>
            </div>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <a href="https://www.nypl.org/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/nypl-logo.png" 
                  alt="New York Public Library" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                  style={{maxWidth: '200px', maxHeight: '80px'}}
                />
              </a>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">New York Public Library</h4>
              <p className="text-gray-600 text-sm">Manhattan, Bronx, and Staten Island libraries</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <a href="https://www.queenslibrary.org/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/qpl-logo.png" 
                  alt="Queens Public Library" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                  style={{maxWidth: '200px', maxHeight: '80px'}}
                />
              </a>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">Queens Public Library</h4>
              <p className="text-gray-600 text-sm">Queens borough library system</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <a href="https://www.bklynlibrary.org/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/bpl-logo.png" 
                  alt="Brooklyn Public Library" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                  style={{maxWidth: '200px', maxHeight: '80px'}}
                />
              </a>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">Brooklyn Public Library</h4>
              <p className="text-gray-600 text-sm">Brooklyn borough library system</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
