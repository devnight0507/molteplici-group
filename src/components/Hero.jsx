import hero from '@/content/hero.json'

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-slide-up">
            {hero.subtitle}
          </p>
          <p className="text-lg text-gray-400 animate-slide-up">
            {hero.description}
          </p>
        </div>
      </div>
    </section>
  )
}
