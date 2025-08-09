'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Users, GraduationCap, Award } from 'lucide-react'

interface LeadershipMember {
  name: string
  title: string
  location: string
  bio: string
  education?: string
}

export default function Leadership() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  const leadershipTeam: LeadershipMember[] = [
    {
      name: "Chrystal Wright",
      title: "Assistant Principal",
      location: "Belmont",
      bio: "As a graduate of SUNY Binghamton, Pace University, and The College of Saint Rose, Stewart-Wright has nearly 20 years in the field of education with teaching experience on the elementary, middle school and high school levels in both suburban and urban school districts. In 2005, Stewart-Wright joined Passages Academy, as a Special Education/ELA teacher at various secure, limited-secure, and non-secure settings. She has been a mentor to new teachers, an ELA Curriculum Developer, and Special Education Liaison to District 79. Stewart-Wright is currently the Assistant Principal of Transition who oversees the counseling staff and the transition process of all the students at Passages Academy back into the community.",
      education: "SUNY Binghamton, Pace University, The College of Saint Rose"
    },
    {
      name: "Brendan Daly",
      title: "Assistant Principal",
      location: "Bronx Hope",
      bio: "Brendan Daly first came to Passages in 2005 as a classroom teacher. After serving as Program Chairperson and completing a Masters in Administration at Lehman College, he moved up into the Passages administration. He currently serves as an Assistant Principal in Passages North, supervising the Bronx Hope NSP/NSD site as well as the Ryer Avenue and Dobbs Ferry LSP sites. He also supports the testing and promotions processes, as well as Academic Policy & Compliance issues.",
      education: "Masters in Administration at Lehman College"
    },
    {
      name: "Patrick Dorfer",
      title: "Assistant Principal",
      location: "Crossroads",
      bio: "Patrick Dorfer joined the Passages Team in 2011 as a social studies teacher at Crossroads Juvenile Center. In 2012, he moved to Belmont after the site opened due Mayor Bloomberg's Close to Home legislation, and has remained there every since. He has held a variety of roles at Passages including teacher, programmer, and now assistant principal. Mr. Dorfer's main office is at Belmont he but also supervises South Ozone Park and Carroll St. Currently, Mr. Dorfer's daily goal is to ensure that students are provided opportunities to succeed in school and earn credits and applicable career related work experience to set them on a future path of success."
    },
    {
      name: "Allison Trevaskis",
      title: "Assistant Principal",
      location: "Horizon",
      bio: "Ms. Trevaskis approaches her role with the intention of being a strategic advocate for student centered education; based upon individual student strengths. She believes that each student at Passages Academy has a fresh chance to be successful in the academic forum. In order to help each student achieve maximum potential, she works daily to lead a team which mindfully collaborates, reflects and adapts to support students in their academic and SEL goals. Ms. Trevaskis joined Passages Academy in 2008 and has worked in multiple Secure and Non-Secure settings. In 2020, she was a Big Apple Teacher of the Year Finalist. Her role as a teacher leader through several legislative changes such as Close to Home and Raise the Age have positioned her to lead the team at Horizon Juvenile Detention Center with insight, experience, and aplomb.",
      education: "Bachelors of Science degree from SUNY New Paltz, Master of Arts from Adelphi University, Advanced Certificate in Educational Leadership from The College of Saint Rose"
    },
    {
      name: "Carolyn Rudder",
      title: "Assistant Principal",
      location: "Limited Secure Placement",
      bio: "Ms. Rudder has 29 years in the field of education. Her career began in 1994, as a teacher's assistant, at the Finest Care Early Childhood Education Center as she pursued her love of teaching at Medgar Evers College school of education. Upon completion of her B.A. in Elementary Education, her long-standing career with NYCDOE began at an elementary school in Queens. During this period, she continued to strive for excellence by enrolling at Brooklyn College to earn a M.S. Political Science and Public Administration. She then went to Touro College and earned a M.S. in School/District Supervision and Administration. In pursuit of working with an older population she transitioned into NYC school District 79, Alternative Schools and Programs. At Pathways to Graduation (P2G) Brooklyn and Jamaica Learning Center she taught English as a New Language (ENL), and Literacy. She fostered students' development of academic skills needed earn their High School Equivalency and successfully transition into higher education and career readiness programs. In 2015, Rudder joined Passages Academy, where she is currently the Assistant Principal at Crossroads Juvenile Center. She has experience working in secure & non-secure detention, as well as limited secure placement. Her instructional strengths are curriculum and instruction. Her Educational philosophy: is Educating the whole child while fostering character development and decision-making skills through guidance and mentorship to future productive pathways.",
      education: "B.A. in Elementary Education from Medgar Evers College, M.S. Political Science and Public Administration from Brooklyn College, M.S. in School/District Supervision and Administration from Touro College"
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated leadership team committed to providing exceptional educational services 
            and support to our students across all locations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleAccordion(`member-${index}`)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <span>{member.title}</span>
                          <span>•</span>
                          <span className="font-medium text-primary-600">{member.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {openAccordion === `member-${index}` ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                </button>

                {openAccordion === `member-${index}` && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      <div className="prose prose-gray max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {member.bio}
                        </p>
                        
                        {member.education && (
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-start space-x-3">
                              <GraduationCap className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Education</h4>
                                <p className="text-gray-600 text-sm">{member.education}</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {member.name === "Allison Trevaskis" && (
                          <div className="bg-secondary-50 p-4 rounded-lg mt-4">
                            <div className="flex items-start space-x-3">
                              <Award className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Recognition</h4>
                                <p className="text-gray-600 text-sm">Big Apple Teacher of the Year Finalist (2020)</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">5</h3>
              <p className="text-gray-600">Assistant Principals</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Years Combined Experience</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">5</h3>
              <p className="text-gray-600">Campus Locations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
