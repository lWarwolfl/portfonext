import GoogleAnalytics from '@/components/layout/GoogleAnalytics'
import MainLayout from '@/components/layout/MainLayout'
import '@/styles/index.scss'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const loader = document.getElementById('globalLoader')
    if (!loader) return

    loader.style.opacity = '0'

    const timer = setTimeout(() => {
      loader.style.display = 'none'
      document.documentElement.classList.remove('loading')
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <GoogleAnalytics />
      <Analytics />

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
