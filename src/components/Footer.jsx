import footer from '@/content/footer.json'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center text-gray-400">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  )
}
