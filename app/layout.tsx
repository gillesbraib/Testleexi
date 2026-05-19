import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter_Tight } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/site.config'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.brand.url),
  title: {
    default: siteConfig.seo.layout.titleDefault,
    template: siteConfig.seo.layout.titleTemplate,
  },
  description: siteConfig.seo.layout.description,
  openGraph: {
    locale: 'fr_BE',
    type: 'website',
    siteName: siteConfig.brand.name,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-cta focus:text-white focus:rounded"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
