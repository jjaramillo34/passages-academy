'use client'

export default function ParentsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Parents</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Passages Academy Library team is dedicated to serving our entire student's community and that includes you, their guardians. 
            For further information about your child's librarian, their site or about any of the resources please contact us.
          </p>
        </div>

        {/* Sinergia Workshop */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <a href="https://www.sinergiany.org/parents-center/workshops" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/workshops.png" 
                  alt="Sinergia Parent Workshops" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                />
              </a>
            </div>
            <div>
              <div className="text-center mb-6">
                <img 
                  src="/images/logos/sinergia-logo.png"
                  alt="Education Advocacy Workshop" 
                  className="max-w-full h-auto mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Education Advocacy for Parents Workshop</h3>
              <p className="text-gray-700 leading-relaxed">
                The Metropolitan Parent Center of Sinergia, Inc. offers workshops on a variety of special education topics, 
                free of charge, to parents of children with disabilities and other interested parties. Workshops are conducted 
                at Sinergia's Dr. Nivia Zavala Conference Center. Speakers are regularly invited to conduct workshops and 
                offer their expertise and information.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-8">
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* National Federation for Children's Mental Health */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">National Federation of Families for Children's Mental Health</h3>
              <p className="text-gray-700 leading-relaxed">
                NFFCMH's collection of resources, including videos, toolkits, and activities to use at home. 
                These resources are focused on supporting parents and caregivers and their children during the COVID-19 pandemic.
              </p>
            </div>
            <div className="text-center">
              <a href="https://www.ffcmh.org/covid-19-resources-for-parents" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/nffcmh-logo.png" 
                  alt="NFFCMH COVID-19 Resources" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                  style={{width: '274px'}}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-8">
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* NYPL Online Events */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <a href="https://www.nypl.org/events/calendar/online" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/nypl-logo.png" 
                  alt="NYPL Online Events Calendar" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                />
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">NYPL Online Events & Classes Calendar</h3>
              <p className="text-gray-700 leading-relaxed">
                The New York Public Library offers online classes, programs, book clubs, and more. 
                During the pandemic the locations may be physically closed but many of their online resources and workshops are still available.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-8">
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* QPL Programs */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">QPL Programs & Activities</h3>
              <p className="text-gray-700 leading-relaxed">
                Queens Public Library presents a diverse array of activities and events for all ages including kids, teens, and older adults. 
                Their programs range from technology training to cultural performances and from job help to teleconferences for the homebound.
              </p>
            </div>
            <div className="text-center">
              <a href="https://www.queenslibrary.org/programs-activities" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/qpl-logo.png" 
                  alt="Queens Public Library Programs" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-8">
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* BPL Events Calendar */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <a href="https://www.bklynlibrary.org/calendar/list" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/logos/bpl-logo.png" 
                  alt="Brooklyn Public Library Events Calendar" 
                  className="max-w-full h-auto mx-auto hover:scale-105 transition-transform"
                />
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">BPL Events Calendar</h3>
              <p className="text-gray-700 leading-relaxed">
                Brooklyn Public Library offers a wide variety of activities for all ages. 
                Whether you're looking to learn something new or brush up on some older skills take a look at their offerings calendar to find something to suit your need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
