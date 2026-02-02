import './globals.css'

export const metadata = {
  title: 'Molteplici Group | Investimento, Desenvolvimento e Gestão Imobiliária',
  description: 'O Grupo Molteplici reúne três empresas especializadas que atuam de forma integrada no setor imobiliário: investimento, construção e mediação.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  )
}
