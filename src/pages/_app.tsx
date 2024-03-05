import '@/styles/index.scss'
import { LenisProvider } from '@/utils/lenis'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const loader = document.getElementById('globalLoader')
        if (loader) loader.style.backgroundColor = '#0d1117bb'
        document.body.style.overflowY = 'auto'
      }, 100)

      // setTimeout(() => {
      //   const loader = document.getElementById('globalLoader')
      //   if (loader) loader.style.opacity = '0'
      // }, 1300)

      // setTimeout(() => {
      //   const loader = document.getElementById('globalLoader')
      //   if (loader) loader.style.display = 'none'
      // }, 1600)
    }
  }, [])

  return (
    <LenisProvider>
      <Component {...pageProps} />
    </LenisProvider>
  )
}
