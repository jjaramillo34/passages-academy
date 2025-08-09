'use client'

export default function OrganizationalPartnership() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Educational Partnership
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Passages Academy operates as part of the New York City Department of Education, 
            District 79, providing specialized educational services for students facing unique challenges.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-16">
          {/* Passages Academy Logo */}
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <img 
                src="/passages.png" 
                alt="Passages Academy" 
                className="h-20 w-auto"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Passages Academy</h3>
              <p className="text-sm text-gray-600">Specialized Educational Services</p>
            </div>
          </div>

          {/* Partnership Connector */}
          <div className="hidden lg:flex items-center">
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className="mx-4 text-gray-400 font-medium">Partners with</div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
          </div>

          {/* NYC Public Schools Logo */}
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <img 
                src="/nycpublicshools.png" 
                alt="NYC Public Schools" 
                className="h-20 w-auto"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">NYC Public Schools</h3>
              <p className="text-sm text-gray-600">Department of Education</p>
            </div>
          </div>

          {/* Partnership Connector */}
          <div className="hidden lg:flex items-center">
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className="mx-4 text-gray-400 font-medium">District</div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
          </div>

          {/* District 79 Logo */}
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <img 
                src="/d79logo.png" 
                alt="NYC DOE District 79" 
                className="h-20 w-auto"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">District 79</h3>
              <p className="text-sm text-gray-600">Alternative Schools & Programs</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-primary-50 p-8 rounded-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              A Collaborative Approach to Education
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Through our partnership with the NYC Department of Education and District 79, 
              Passages Academy provides comprehensive academic and support services to students 
              who require alternative educational settings. Our collaborative approach ensures 
              that every student receives the personalized attention and resources they need to succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
