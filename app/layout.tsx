import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anahata Coop Web',
  description: 'Pagina web de la cooperativa Anahata',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
