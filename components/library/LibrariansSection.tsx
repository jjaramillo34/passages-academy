'use client'

import { BookOpen, Users, Monitor, Mail } from 'lucide-react'

export default function LibrariansSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Librarians</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We are a team of library professionals, dedicated to providing excellent, seamless library services for all of our students 
            because we know that excellent school libraries are essential to creating life-long learners.
          </p>
        </div>

        <div className="space-y-8">
          {/* Jamila Abdulrashid */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
              <div className="flex-shrink-0 mb-6 lg:mb-0">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-primary-600" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Jamila Abdulrashid</h3>
                <div className="mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Certified School Librarian - Bronx Hope Site
                  </span>
                </div>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>
                    Jamila Abdulrashid joined the team at Passages September 2019 as a certified school librarian at the Bronx Hope site. 
                    She has worked in libraries for over 12 years.
                  </p>
                  <p>
                    <strong>Education:</strong> Ms. Abdulrashid earned her MSLIS from Syracuse University in 2016, has a M.S. in Early Childhood Education, 
                    has certification in administration and majored in Economics and minored in Elementary Education for her undergraduate degree.
                  </p>
                  <p>
                    She is a passionate educator who enjoys teaching students the art of learning and believes that all students should be afforded 
                    the opportunity to succeed. What Ms. Abdulrashid enjoys most about being a librarian is the opportunity to work with all staff 
                    and students. It allows her to share resources, ideas and services that are best suited for specific populations, and individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Jessica Fenster-Sparber */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
              <div className="flex-shrink-0 mb-6 lg:mb-0">
                <div className="w-32 h-32 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center">
                  <Users className="w-12 h-12 text-secondary-600" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Jessica Fenster-Sparber</h3>
                <div className="mb-4">
                  <span className="inline-block bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm font-semibold">
                    School Librarian - Belmont Site
                  </span>
                </div>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>
                    Jessica Fenster-Sparber arrived at Passages almost a decade ago when it was bereft of school libraries. 
                    She received her B.A. from New College and later earned an M.S.T. from The New School, an M.S. in Literacy from City College, 
                    and is currently working towards her Master's in library science at Rutgers University.
                  </p>
                  <p>
                    She is passionate about providing library services to incarcerated and detained youth in New York City and advocates for 
                    excellent school library services to all incarcerated youth beyond the city's limits.
                  </p>
                  <p>
                    Jessica served as Passages' Libraries and Literacy Coordinator before taking up her current post at Passages Academy's 
                    school librarian at its Belmont site.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Claudio Leon */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
              <div className="flex-shrink-0 mb-6 lg:mb-0">
                <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                  <Monitor className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Claudio Leon</h3>
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Certified School Librarian - Horizon Library
                  </span>
                </div>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>
                    Claudio Leon joined the team in 2008 as a Library Assistant after four years of service in the United States Navy. 
                    While working at Passages, he attended City Tech for his undergraduate degree in Computer Systems, received his MSLIS from Pratt Institute, 
                    and now works as a Certified School Librarian at the Horizon library.
                  </p>
                  <p>
                    In working for Passages Academy, Mr. Leon most enjoys putting technology into the hands of Passages' students and working 
                    in the community in which he grew up.
                  </p>
                  <p>
                    <strong>Personal Interests:</strong> He's an avid reader of graphic novels; his favorite genres are fantasy and science fiction. 
                    In his spare time, he browses the web to see what's in and what's out in the tech world and he doesn't think he'll ever be 
                    able to shake his love of video games.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Contact */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl text-white">
            <h4 className="text-2xl font-bold mb-4">Meet Our Library Team</h4>
            <p className="text-lg mb-6 opacity-90">
              Our dedicated librarians are here to support students, teachers, and families with expert library services and resources.
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center mx-auto">
              <Mail className="w-5 h-5 mr-2" />
              Contact Our Librarians
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
