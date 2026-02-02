import Image from 'next/image'
import companies from '@/content/companies.json'

const urls = {
  imo: process.env.NEXT_PUBLIC_IMO_URL,
  brotar: process.env.NEXT_PUBLIC_BROTAR_URL,
  predialNexus: process.env.NEXT_PUBLIC_PREDIAL_NEXUS_URL,
}

const logos = {
  imo: '/logos/logo-imo.png',
  brotar: '/logos/logo-brotar.png',
  nexus: '/logos/logo-nexus.png',
}

export default function CompanyCards() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
            {companies.title}
          </h2>
          <p className="text-lg text-brand-600">
            {companies.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {companies.items.map((company) => (
            <a
              key={company.id}
              href={urls[company.envKey] || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className={`${company.color} text-white p-8 rounded-lg h-full transition-transform group-hover:scale-105`}>
                <div className="mb-6 h-20 flex items-center">
                  <Image
                    src={logos[company.id]}
                    alt={company.name}
                    width={240}
                    height={80}
                    className="h-16 w-auto brightness-0 invert object-contain"
                  />
                </div>
                <p className="text-sm uppercase tracking-wider text-white/70 mb-2">
                  {company.action}
                </p>
                <h3 className="text-2xl font-bold mb-4">
                  {company.name}
                </h3>
                <p className="text-white/80 mb-6">
                  {company.description}
                </p>
                <div className="flex items-center text-white/90 group-hover:text-white transition-colors">
                  <span className="mr-2">Conhecer</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
