'use client'

interface CallToActionProps {
  askLibrarianUrl?: string
}

export default function CallToAction({ askLibrarianUrl }: CallToActionProps) {
  return (
    <section className="section-padding bg-primary-600 text-white">
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Learn More?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Explore our library resources and discover how Passages Academy can support your educational journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/library" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-md font-semibold transition-colors">
            Visit Our Library
          </a>
          <a 
            href={askLibrarianUrl || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-md font-semibold transition-colors"
          >
            Ask a Question
          </a>
        </div>
      </div>
    </section>
  )
}
