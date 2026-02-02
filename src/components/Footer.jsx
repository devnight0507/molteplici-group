import footer from '@/content/footer.json'
import site from '@/content/site.json'

const companyUrls = {
  'IMO Investimentos': process.env.NEXT_PUBLIC_IMO_URL,
  'Brotar': process.env.NEXT_PUBLIC_BROTAR_URL,
  'Predial Nexus': process.env.NEXT_PUBLIC_PREDIAL_NEXUS_URL,
}

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{site.name}</h3>
            <p className="text-brand-300">{site.tagline}</p>
          </div>

          {/* Companies */}
          <div>
            <h4 className="font-bold mb-4">Nossas Empresas</h4>
            <nav className="space-y-2">
              {footer.companies.map((company) => (
                <a
                  key={company.name}
                  href={companyUrls[company.name] || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-brand-300 hover:text-white transition-colors"
                >
                  {company.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-8 text-center text-brand-400">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
