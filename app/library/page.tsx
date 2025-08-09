'use client'

import { useState, useEffect } from 'react'
import {
  LibraryHero,
  LibraryMission,
  AskLibrarian,
  DigitalResources,
  StudentsSection,
  ParentsSection,
  TeachersSection,
  LibrariansSection,
  ContactSection,
  PartnershipsSection,
  SupportServices
} from '@/components/library'

interface LocationData {
  library_info: {
    digital_platforms: Array<{
      name: string
      url: string
      description: string
    }>
    contact: {
      ask_librarian_form: string
      general_support: string
    }
  }
}

export default function LibraryPage() {
  const [locationData, setLocationData] = useState<LocationData | null>(null)

  useEffect(() => {
    fetch('/data/location_data.json')
      .then(response => response.json())
      .then(data => setLocationData(data))
      .catch(error => console.error('Error loading location data:', error))
  }, [])

  return (
    <div className="min-h-screen">
      <LibraryHero askLibrarianUrl={locationData?.library_info.contact.ask_librarian_form} />
      <LibraryMission />
      <AskLibrarian />
      <DigitalResources askLibrarianUrl={locationData?.library_info.contact.ask_librarian_form} />
      <StudentsSection />
      <ParentsSection />
      <TeachersSection />
      <LibrariansSection />
      <ContactSection />
      <PartnershipsSection />
      <SupportServices 
        askLibrarianUrl={locationData?.library_info.contact.ask_librarian_form}
        generalSupport={locationData?.library_info.contact.general_support}
      />
    </div>
  )
}
