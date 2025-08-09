'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import OrganizationalPartnership from '@/components/OrganizationalPartnership'
import AboutUs from '@/components/AboutUs'
import PrincipalsMessage from '@/components/PrincipalsMessage'
import Leadership from '@/components/Leadership'
import CounselingServices from '@/components/CounselingServices'
import ParentServices from '@/components/ParentServices'
import StudentResources from '@/components/StudentResources'
import CampusLocations from '@/components/CampusLocations'
import CallToAction from '@/components/CallToAction'

interface LocationData {
  passages_academy_locations: Array<{
    name: string
    address: string
    phone: string
    campus_type: string
    coordinates: {
      lat: number
      lng: number
    }
  }>
  library_info: {
    digital_platforms: Array<{
      name: string
      description: string
      support?: string
      languages?: string[]
      features?: string
    }>
    contact: {
      ask_librarian_form: string
      general_support: string
    }
  }
}

export default function HomePage() {
  const [locationData, setLocationData] = useState<LocationData | null>(null)

  useEffect(() => {
    fetch('/data/location_data.json')
      .then(response => response.json())
      .then(data => setLocationData(data))
      .catch(error => console.error('Error loading location data:', error))
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Mission Section */}
      <Mission />

      {/* Organizational Partnership Section */}
      <OrganizationalPartnership />

      {/* About Us Section */}
      <AboutUs />

      {/* Principal's Message Section */}
      <PrincipalsMessage />

      {/* Leadership Section */}
      <Leadership />

      {/* Counseling Services Section */}
      <CounselingServices />

      {/* Parent Services Section */}
      <ParentServices />

      {/* Student Resources Section */}
      <StudentResources askLibrarianUrl={locationData?.library_info.contact.ask_librarian_form} />

      {/* Campus Locations Section */}
      <CampusLocations locations={locationData?.passages_academy_locations || []} />

      {/* Call to Action Section */}
      <CallToAction askLibrarianUrl={locationData?.library_info.contact.ask_librarian_form} />
    </div>
  )
}
