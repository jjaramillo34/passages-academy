'use client'

import { MapPin, Phone } from 'lucide-react'
import CampusMap from './CampusMap'

interface Location {
  name: string
  address: string
  phone: string
  campus_type: string
  coordinates: {
    lat: number
    lng: number
  }
}

interface CampusLocationsProps {
  locations: Location[]
}

export default function CampusLocations({ locations }: CampusLocationsProps) {
  return (
    <section id="locations" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Campus Locations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit any of our three Bronx campus locations for support and services
          </p>
        </div>
        
        {locations && locations.length > 0 && (
          <>
            <div className="mb-12">
              <CampusMap locations={locations} />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {location.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{location.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      <a 
                        href={`tel:${location.phone}`} 
                        className="text-primary-600 hover:text-primary-700"
                      >
                        {location.phone}
                      </a>
                    </div>
                    <div className="pt-2">
                      <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                        {location.campus_type} Campus
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
