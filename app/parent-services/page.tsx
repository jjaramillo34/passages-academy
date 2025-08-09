'use client'

import { Users, BookOpen, MessageCircle, Calendar, Phone, UserCheck, Clock, ChevronRight } from 'lucide-react'

export default function ParentServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Parent Services
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              We believe parent and guardian involvement is essential to student success. 
              Discover all the ways you can engage with your child's education at Passages Academy.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Night Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-primary-50 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Curriculum Night</h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Curriculum Night is an event held to give parents and guardians a chance to learn about 
                  the school's curriculum, meet their child's teachers, and ask questions. It is typically 
                  held in the fall, just before the start of the school year.
                </p>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <UserCheck className="w-5 h-5 text-primary-600 mr-2" />
                    What You'll Experience
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <BookOpen className="w-5 h-5 text-secondary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Learn about our school's curriculum, including subjects taught, academic standards, and teaching methods</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-secondary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Meet your child's teachers and get to know their educational approach</span>
                    </li>
                    <li className="flex items-start">
                      <MessageCircle className="w-5 h-5 text-secondary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Ask questions about curriculum, school policies, or procedures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-secondary-50 to-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Attend?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Curriculum Night is a great opportunity to learn about Passages Academy and get involved 
                  in your child's education. We encourage you to attend if you have the opportunity.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Phone className="w-5 h-5 text-primary-600 mr-2" />
                  Contact Information
                </h3>
                <p className="text-gray-700 mb-4">
                  For further information about Curriculum Night or other parent services, please contact:
                </p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    <span>Our main office</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></div>
                    <span>Your child's counselor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent-Teacher Conferences Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Parent-Teacher Conferences
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Parent-teacher conferences are a great opportunity for parents and teachers to come together 
              to discuss students' progress and goals. At Passages Academy, parent-teacher conferences are 
              held twice a year, once in the fall and once in the spring.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Conference Guidelines */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <UserCheck className="w-6 h-6 text-secondary-600 mr-3" />
                Conference Guidelines
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Prepare for the Conference</h4>
                    <p className="text-gray-600 text-sm">Think about your child's progress, what they're doing well, areas for improvement, and your educational goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Be Respectful and Open-minded</h4>
                    <p className="text-gray-600 text-sm">Work together with the teacher to support your child's learning. Respect professional opinions and be open to suggestions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Ask Questions</h4>
                    <p className="text-gray-600 text-sm">Don't hesitate to ask about your child's progress or teaching methods. The more you know, the better you can help.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary-600 text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Maintain Communication</h4>
                    <p className="text-gray-600 text-sm">Continue regular communication with the teacher after the conference to support ongoing progress.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conference Details */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="w-6 h-6 text-primary-600 mr-3" />
                Conference Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Schedule</h4>
                    <p className="text-gray-600 text-sm">Held twice yearly - once in fall and once in spring</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Session Times</h4>
                    <p className="text-gray-600 text-sm">Evening sessions for working parents, early afternoon for flexible schedules</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Duration</h4>
                    <p className="text-gray-600 text-sm">10-15 minute time blocks with each teacher</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Format</h4>
                    <p className="text-gray-600 text-sm">Conducted via phone or video chat for convenience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Confidentiality</h4>
                    <p className="text-gray-600 text-sm">All conferences are confidential - share concerns comfortably</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conference Benefits */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-primary-100 to-secondary-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">For Parents</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  <span>Get detailed insights into your child's academic progress</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  <span>Understand teaching strategies and classroom expectations</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  <span>Collaborate on goals and support strategies</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-secondary-100 to-primary-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">For Students</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full mr-3"></div>
                  <span>Benefit from coordinated support between home and school</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full mr-3"></div>
                  <span>See parents actively engaged in their education</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full mr-3"></div>
                  <span>Receive targeted support based on collaborative planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Coordinator's Corner */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="bg-gradient-to-br from-gray-50 to-primary-50 p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                WELCOME TO THE PARENT COORDINATOR'S<br />
                CORNER
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Welcome to the Parent Coordinator's official website for Passages Academy. Here, you'll find 
                everything you need to know about us, what we do, and have the chance to explore our constantly 
                growing community. Thank you for visiting and enjoy!
              </p>
              <p className="text-lg font-semibold text-primary-600 mt-6">
                Family Engagement Resource Group
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="mailto:anettleton@schools.nyc.gov"
                className="bg-primary-600 text-white hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Contact: Anjelique Nettleton - Bronx/Westchester Sites
              </a>
              <a 
                href="mailto:vnickles@schools.nyc.gov"
                className="bg-secondary-400 text-white hover:bg-secondary-500 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Contact: Victoria Nickles - BK, Queens, SI Sites
              </a>
            </div>

            {/* Resource Images */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img 
                  src="https://3.files.edl.io/7c55/22/06/08/200027-99d785f3-c0b3-4f5f-a128-529c5ae5e0f4.png" 
                  alt="Parent Resource 1" 
                  className="w-full h-32 object-cover rounded"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img 
                  src="https://3.files.edl.io/5eb7/22/06/08/200036-0cb41526-fe69-43b3-b8da-aa05d8c3e8e8.jpg" 
                  alt="Parent Resource 2" 
                  className="w-full h-32 object-cover rounded"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img 
                  src="https://3.files.edl.io/b799/22/06/08/200105-6f57b4ef-f289-4ab8-bd20-569b0564d17e.jpg" 
                  alt="Parent Resource 3" 
                  className="w-full h-32 object-cover rounded"
                />
              </div>
            </div>

            {/* Video Resources */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="aspect-video mb-3">
                  <iframe 
                    title="Real Teen Stories At Crossroads Juvenile Detention Facility"
                    src="https://www.youtube.com/embed/6wU1dWPpPZQ" 
                    className="w-full h-full rounded"
                    frameBorder="0" 
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-xs text-gray-500 text-center mb-2">NYC Child Services</p>
                <p className="text-sm text-gray-700 text-center">
                  Real Teen Stories At Crossroads Juvenile Detention Facility
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="aspect-video mb-3">
                  <iframe 
                    title="The Horizon Story - Yoga in a Juvenile Detention Facility"
                    src="https://www.youtube.com/embed/BXcO3SSr_vs" 
                    className="w-full h-full rounded"
                    frameBorder="0" 
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-xs text-gray-500 text-center mb-2">The Chopra Well</p>
                <p className="text-sm text-gray-700 text-center">
                  The Horizon Story - Yoga in a Juvenile Detention Facility | URBAN YOGIS Ep. 4 - Deepak Chopra
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="aspect-video mb-3">
                  <iframe 
                    title="New programming to help juveniles added to Horizon Juvenile Center"
                    src="https://www.youtube.com/embed/zH1U_yWDR0c" 
                    className="w-full h-full rounded"
                    frameBorder="0" 
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-xs text-gray-500 text-center mb-2">NYC Child Services</p>
                <p className="text-sm text-gray-700 text-center">
                  New programming to help juveniles added to Horizon Juvenile Center – NEWS 12 BRONX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Engagement Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefits of Parent Engagement
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Research shows that parent involvement significantly improves student outcomes. 
              Here's how your engagement makes a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Success</h3>
              <p className="text-gray-600">
                Students with engaged parents show improved academic performance, better attendance, and higher graduation rates.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Development</h3>
              <p className="text-gray-600">
                Parent involvement supports better social skills, improved behavior, and stronger relationships with peers and teachers.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Communication</h3>
              <p className="text-gray-600">
                Regular parent-school communication creates a supportive network that benefits student learning and wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-400 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get Involved Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Your involvement makes a difference in your child's educational journey at Passages Academy. 
            Take the first step by reaching out to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Contact Main Office
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule Conference
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
