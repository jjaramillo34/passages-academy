'use client'

export default function AskLibrarian() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Have a question?
          </h2>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSe4I3BLkxSvr2K4uSS_7Lj7at0ybCqI5XIExc8grvAqYw4-aA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 text-white hover:bg-primary-700 px-12 py-4 rounded-lg text-xl font-semibold transition-colors inline-block"
          >
            Ask a librarian
          </a>
        </div>
      </div>
    </section>
  )
}
