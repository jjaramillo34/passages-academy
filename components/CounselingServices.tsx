'use client'

import { Heart, BookOpen, Users, Shield, GraduationCap, Phone, CheckCircle, TrendingUp } from 'lucide-react'

export default function CounselingServices() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Counseling Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Support services are provided by licensed school counselors and social workers to help 
            students succeed academically, socially, and emotionally at Passages Academy.
          </p>
        </div>

        {/* Core Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">Academic Counseling</h3>
            <p className="text-gray-600 text-center text-sm">
              Develop academic skills, set goals, and make informed decisions about your educational future.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-secondary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">Social-Emotional</h3>
            <p className="text-gray-600 text-center text-sm">
              Build healthy relationships, manage emotions, and develop essential life skills.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">College & Career</h3>
            <p className="text-gray-600 text-center text-sm">
              Explore interests and strengths, research options, and develop your future plan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-secondary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">Crisis Intervention</h3>
            <p className="text-gray-600 text-center text-sm">
              Immediate support during difficult times, trauma, or mental health challenges.
            </p>
          </div>
        </div>

        {/* Detailed Services */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-6 h-6 text-primary-600 mr-3" />
              Our Support Services
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BookOpen className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Academic Counseling</h4>
                  <p className="text-gray-600 text-sm">
                    Helping students develop their academic skills and strategies, set and achieve academic goals, 
                    and make informed decisions about their educational future.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Social-Emotional Counseling</h4>
                  <p className="text-gray-600 text-sm">
                    Helping students develop their social-emotional skills, manage their emotions, 
                    build healthy relationships, and cope with challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <GraduationCap className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">College and Career Counseling</h4>
                  <p className="text-gray-600 text-sm">
                    Helping students explore their interests, strengths, and values; research college and 
                    career options; and develop a plan for their future.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Crisis Intervention</h4>
                  <p className="text-gray-600 text-sm">
                    Providing support to students who are experiencing a crisis, such as a death in the family, 
                    a traumatic event, or a mental health issue.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 text-secondary-600 mr-3" />
              Benefits of Our Services
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Improved Academic Achievement</h4>
                  <p className="text-gray-600 text-sm">
                    Students who receive counseling services are more likely to achieve academic success.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Reduced Dropout Rates</h4>
                  <p className="text-gray-600 text-sm">
                    Students who receive counseling services are less likely to drop out of school.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Better Social-Emotional Skills</h4>
                  <p className="text-gray-600 text-sm">
                    Develop problem-solving, conflict resolution, and stress management abilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Increased Self-Esteem</h4>
                  <p className="text-gray-600 text-sm">
                    Students who receive counseling services have higher self-esteem and confidence.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Improved Mental Health</h4>
                  <p className="text-gray-600 text-sm">
                    Reduced likelihood of experiencing anxiety, depression, and substance abuse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Team */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Professional Team</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Support services are an important part of Passages Academy as they help students 
              succeed academically, socially, and emotionally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Licensed School Counselors</h4>
              <p className="text-gray-600 text-sm">
                Professional counselors specializing in academic guidance, social-emotional support, 
                and college/career planning for students.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-secondary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Licensed Social Workers</h4>
              <p className="text-gray-600 text-sm">
                Mental health professionals providing crisis intervention, emotional support, 
                and connecting students with community resources.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Need Counseling Support?</h3>
            <p className="text-lg mb-6 opacity-90">
              If you are a parent or student, you can learn more about our counseling services 
              by contacting one of our school counselors or our main office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact School Counselor
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Contact Main Office
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
