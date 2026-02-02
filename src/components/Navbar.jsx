'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import site from '@/content/site.json'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
        <a href="#">
          <Image
            src={isScrolled ? '/logos/logo.png' : '/logos/logo-white.png'}
            alt="IMO Investimentos"
            width={160}
            height={64}
            className="h-10 md:h-16 w-auto object-contain"
            priority
          />
        </a>

        <a
          href={`https://wa.me/${site.contact.whatsapp.replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            isScrolled
              ? 'bg-brand-900 text-white hover:bg-brand-800'
              : 'bg-white text-brand-900 hover:bg-brand-100'
          }`}
        >
          Contacto
        </a>
      </div>
    </nav>
  )
}
