import GoogleAnalytics from '@/components/layout/GoogleAnalytics'
import MainLayout from '@/components/layout/MainLayout'
import '@/styles/index.scss'
import raf from '@studio-freight/tempus'
import { Analytics } from '@vercel/analytics/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)

  gsap.ticker.lagSmoothing(0)
  gsap.ticker.remove(gsap.updateRoot)
  raf.add((time: number) => {
    gsap.updateRoot(time / 1000)
  }, 0)
}

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
