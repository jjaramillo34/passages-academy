'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { BookOpen, MapPin, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

// Hero images array
const heroImages = [
  '/images/hero/hero1.png',
  '/images/hero/hero2.png',
  '/images/hero/hero3.png',
  '/images/hero/hero4.png',
  '/images/hero/hero5.png',
  '/images/hero/hero6.png',
  '/images/hero/hero7.png',
  '/images/hero/hero8.png',
  '/images/hero/hero9.png',
  '/images/hero/hero10.png',
  '/images/hero/hero11.png',
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-rotation effect
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [currentIndex, isPlaying])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Passages Academy Hero ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm disabled:opacity-50"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm disabled:opacity-50"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-white scale-110'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white container">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
          Passages Academy
        </h1>
        <p className="text-xl lg:text-2xl mb-4 max-w-3xl mx-auto drop-shadow-md">
          NYC Department of Education • District 79
        </p>
        <p className="text-lg lg:text-xl mb-8 max-w-4xl mx-auto drop-shadow-md">
          Providing academic and social support services for students facing unique challenges
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/library" className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow">
            <BookOpen className="w-5 h-5 mr-2" />
            Visit Our Library
          </a>
          <a href="#locations" className="btn-secondary text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow">
            <MapPin className="w-5 h-5 mr-2" />
            Find Our Locations
          </a>
        </div>
      </div>
    </section>
  )
}
