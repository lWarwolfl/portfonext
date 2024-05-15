import MainLayout from '@/components/layout/MainLayout'
import { LenisProvider } from '@/lib/lenis'
import useLoadingStore from '@/lib/loading/useLoadingStore'
import '@/styles/index.scss'
import raf from '@studio-freight/tempus'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.defaults({})

  gsap.ticker.lagSmoothing(0)
  gsap.ticker.remove(gsap.updateRoot)
  raf.add((time: number) => {
    gsap.updateRoot(time / 1000)
  }, 0)
}

export default function App({ Component, pageProps }: AppProps) {
  const { progress } = useLoadingStore()

  useEffect(() => {
    if (typeof window !== 'undefined' && progress === 100) {
      const loader = document.getElementById('globalLoader')
      if (loader) loader.style.backgroundColor = '#0d1117bb'

      setTimeout(() => {
        if (loader) loader.style.opacity = '0'
      }, 1100)

      setTimeout(() => {
        if (loader) loader.style.display = 'none'
        document.body.style.overflowY = 'auto'
      }, 1400)
    }
  }, [progress])

  return (
    <LenisProvider>
      <SpeedInsights />
      <Analytics />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </LenisProvider>
  )
}
