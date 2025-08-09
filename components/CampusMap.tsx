'use client'

import { useState, useCallback } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { MapPin, Phone, ExternalLink } from 'lucide-react'

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

interface CampusMapProps {
  locations: Location[]
}

const mapContainerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '0.5rem'
}

// Center the map on the Bronx area
const center = {
  lat: 40.8276,
  lng: -73.9181
}

const mapOptions = {
  zoom: 12,
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'road',
      elementType: 'labels.icon',
      stylers: [{ visibility: 'off' }]
    }
  ]
}

export default function CampusMap({ locations }: CampusMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const onLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const onUnmount = useCallback(() => {
    setIsLoaded(false)
  }, [])

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location)
  }

  const getDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://maps.google.com/maps?daddr=${encodedAddress}`, '_blank')
  }

  // Fallback component when Google Maps fails to load
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    return (
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Campus Locations</h3>
        <p className="text-gray-600 mb-6">Interactive map requires Google Maps API key</p>
        <div className="grid gap-4">
          {locations.map((location, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-left">
              <h4 className="font-semibold text-gray-900 mb-2">{location.name}</h4>
              <div className="flex items-start space-x-2 mb-2">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{location.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <a href={`tel:${location.phone}`} className="text-primary-600 hover:text-primary-700 text-sm">
                  {location.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
          options={mapOptions}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={location.coordinates}
              onClick={() => handleMarkerClick(location)}
              title={location.name}
            />
          ))}

          {selectedLocation && (
            <InfoWindow
              position={selectedLocation.coordinates}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div className="p-2 max-w-xs">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {selectedLocation.name}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{selectedLocation.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <a 
                      href={`tel:${selectedLocation.phone}`} 
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {selectedLocation.phone}
                    </a>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => getDirections(selectedLocation.address)}
                      className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Get Directions</span>
                    </button>
                  </div>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
      
      <div className="text-center text-sm text-gray-600">
        <p>Click on the markers to view campus details and get directions</p>
      </div>
    </div>
  )
}
