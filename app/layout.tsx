import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Sora, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { SplashScreen } from '@/components/SplashScreen'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Rudrek Pan | Strategy & Digital Transformation',
    template: '%s | Rudrek Pan',
  },
  description: 'Strategy & Operations Leader with 8+ years at EY-Parthenon and Tata Steel. Expert in Route-to-Market, Revenue Growth Management, and Digital Transformation.',
  keywords: ['strategy consulting', 'digital transformation', 'EY-Parthenon', 'route-to-market', 'revenue growth management', 'commercial excellence', 'sales transformation'],
  authors: [{ name: 'Rudrek Pan' }],
  creator: 'Rudrek Pan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rudrek.com',
    siteName: 'Rudrek Pan',
    title: 'Rudrek Pan | Strategy & Digital Transformation',
    description: 'Strategy & Operations Leader with 8+ years at EY-Parthenon and Tata Steel. Expert in Route-to-Market, Revenue Growth Management, and Digital Transformation.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rudrek Pan | Strategy & Digital Transformation',
    description: 'Strategy & Operations Leader with 8+ years at EY-Parthenon and Tata Steel. Expert in Route-to-Market, Revenue Growth Management, and Digital Transformation.',
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${sora.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SplashScreen />
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-20">
              {children}
            </main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
