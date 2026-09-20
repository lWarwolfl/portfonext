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

    const release = () => {
      loader.style.opacity = '0'

      setTimeout(() => {
        loader.style.display = 'none'
        document.documentElement.classList.remove('loading')
      }, 300)
    }

    if (document.readyState === 'complete') {
      release()
    } else {
      window.addEventListener('load', release, { once: true })
    }

    return () => {
      window.removeEventListener('load', release)
    }
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
