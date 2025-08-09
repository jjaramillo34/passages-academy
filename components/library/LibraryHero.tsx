'use client'

import Image from 'next/image'
import { Mail, BookOpen } from 'lucide-react'

interface LibraryHeroProps {
  askLibrarianUrl?: string
}

export default function LibraryHero({ askLibrarianUrl }: LibraryHeroProps) {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/diverse_students_learning_library_books.png"
          alt="Students in Library"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Passages Academy Library
          </h1>
          <p className="text-2xl lg:text-3xl mb-4 font-light">
            &ldquo;Creating lifelong learners, one book at a time&rdquo;
          </p>
          <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
            Access thousands of digital resources in English and Spanish
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={askLibrarianUrl || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              <Mail className="w-5 h-5 mr-2" />
              Ask a Librarian
            </a>
            <a href="#resources" className="btn-secondary text-lg px-8 py-4">
              <BookOpen className="w-5 h-5 mr-2" />
              View Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
