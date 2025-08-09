'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, BookOpen, Home, MapPin, Phone, Users, Globe, ChevronDown } from 'lucide-react'

// Language interface
interface Language {
  code: string
  name: string
  flag: string
}

// 10 most spoken languages in NYC DOE schools
const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ht', name: 'Kreyòl', flag: '🇭🇹' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' }
]

// Extend the global Window interface to include Google Translate
declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void
  }
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])

  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement('script')
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.body.appendChild(script)

    // Initialize Google Translate with all languages
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        const languageCodes = languages.map(lang => lang.code).join(',')
        
        // Create a hidden element for Google Translate
        const hiddenElement = document.getElementById('google_translate_hidden')
        if (hiddenElement && !hiddenElement.innerHTML) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: languageCodes,
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
              multilanguagePage: true
            },
            'google_translate_hidden'
          )
        }
        
        // Also check for existing translation in URL
        const urlParams = new URLSearchParams(window.location.search)
        const translateParam = urlParams.get('translate')
        if (translateParam) {
          const foundLanguage = languages.find(lang => lang.code === translateParam)
          if (foundLanguage) {
            setCurrentLanguage(foundLanguage)
          }
        }
      }
    }

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src*="translate.google.com"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  // Handle language change
  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language)
    setIsLanguageOpen(false)
    
    // Wait a bit for Google Translate to be ready
    setTimeout(() => {
      try {
        if (window.google && window.google.translate) {
          // Try multiple methods to trigger translation
          
          // Method 1: Try to find and trigger the hidden select
          const select = document.querySelector('#google_translate_hidden .goog-te-combo') as HTMLSelectElement
          if (select) {
            select.value = language.code
            const changeEvent = new Event('change', { bubbles: true, cancelable: true })
            select.dispatchEvent(changeEvent)
            return
          }
          
          // Method 2: Use Google Translate API directly if available
          if (window.google.translate.TranslateService) {
            const service = window.google.translate.TranslateService()
            if (language.code === 'en') {
              service.restore()
            } else {
              service.translatePage('en', language.code)
            }
            return
          }
          
          // Method 3: Manipulate Google Translate cookie directly
          if (language.code === 'en') {
            // Clear translation
            document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
            window.location.reload()
          } else {
            // Set translation cookie
            document.cookie = `googtrans=/en/${language.code}; path=/`
            window.location.reload()
          }
        }
      } catch (error) {
        console.warn('Translation method failed, trying fallback:', error)
        // Fallback: reload with language parameter
        const url = new URL(window.location.href)
        if (language.code === 'en') {
          url.searchParams.delete('lang')
          document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
        } else {
          url.searchParams.set('lang', language.code)
          document.cookie = `googtrans=/en/${language.code}; path=/`
        }
        window.location.href = url.toString()
      }
    }, 200)
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.language-selector')) {
        setIsLanguageOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Detect existing translation on page load
  useEffect(() => {
    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const langParam = urlParams.get('lang')
    if (langParam) {
      const foundLanguage = languages.find(lang => lang.code === langParam)
      if (foundLanguage) {
        setCurrentLanguage(foundLanguage)
      }
    }

    // Check Google Translate cookie
    const cookie = document.cookie
    const googtransMatch = cookie.match(/googtrans=([^;]+)/)
    if (googtransMatch) {
      const [, value] = googtransMatch
      const langCode = value.split('/')[2] // Format is usually /en/es for English to Spanish
      if (langCode) {
        const foundLanguage = languages.find(lang => lang.code === langCode)
        if (foundLanguage) {
          setCurrentLanguage(foundLanguage)
        }
      }
    }
  }, [])

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Library', href: '/library', icon: BookOpen },
    { name: 'Parent Services', href: '/parent-services', icon: Users },
    { name: 'Locations', href: '/#locations', icon: MapPin },
    { name: 'Contact', href: '/#contact', icon: Phone },
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200 overflow-hidden">
              <img 
                src="/passages.png" 
                alt="Passages Academy Logo" 
                className="w-10 h-10 object-contain"
                width={100}
              />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">Passages Academy</div>
              <div className="text-sm text-gray-600">NYC DOE District 79</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>
            
            {/* Custom Language Selector */}
            <div className="relative language-selector">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 hover:shadow-md transition-all duration-200 text-sm font-medium text-gray-700"
              >
                <Globe className="w-4 h-4 text-primary-600" />
                <span className="text-lg">{currentLanguage.flag}</span>
                <span>{currentLanguage.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language)}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                        currentLanguage.code === language.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="font-medium">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-3 py-2 mb-3">
                  <Globe className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700 font-medium">Language</span>
                </div>
                <div className="grid grid-cols-2 gap-2 ml-8">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        handleLanguageChange(language)
                        setIsMenuOpen(false)
                      }}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-left transition-colors ${
                        currentLanguage.code === language.code 
                          ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                          : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-sm">{language.flag}</span>
                      <span className="text-sm font-medium">{language.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {/* Hidden Google Translate Element */}
      <div id="google_translate_hidden" style={{ 
        position: 'absolute', 
        left: '-9999px', 
        top: '-9999px', 
        width: '1px', 
        height: '1px', 
        overflow: 'hidden' 
      }}></div>
      
      {/* Google Translate Styling */}
      <style jsx global>{`
        /* Hide Google Translate banner */
        .goog-te-banner-frame {
          display: none !important;
        }
        
        /* Remove the annoying top margin that Google adds to body */
        body {
          top: 0 !important;
        }
        
        /* Hide the Google Translate element but keep it accessible */
        #google_translate_hidden {
          position: absolute !important;
          left: -9999px !important;
          top: -9999px !important;
          width: 1px !important;
          height: 1px !important;
          overflow: hidden !important;
        }
        
        /* Make sure the Google Translate dropdown is accessible but hidden */
        #google_translate_hidden .goog-te-gadget-simple {
          background: transparent !important;
          border: none !important;
        }
        
        #google_translate_hidden .goog-te-combo {
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}</style>
    </header>
  )
}
