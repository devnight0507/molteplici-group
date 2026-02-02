import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CompanyCards from '@/components/CompanyCards'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CompanyCards />
      <Footer />
    </main>
  )
}
