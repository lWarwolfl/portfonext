// import Contact from '@/components/landing/Contact'
import Educations from '@/components/landing/Educations'
import Experiences from '@/components/landing/Experiences'
import Hero from '@/components/landing/Hero'
import Images from '@/components/landing/Images'
import Languages from '@/components/landing/Languages'
import Projects from '@/components/landing/Projects'
import Skills from '@/components/landing/Skills'
import Summary from '@/components/landing/Summary'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import useWindowSize from '@/hooks/useWindowSize'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import dynamic from 'next/dynamic'
import { Poppins } from 'next/font/google'
import Head from 'next/head'
import { useRef } from 'react'

const WebGL = dynamic(() => import('@/components/utils/Particles').then(({ WebGL }) => WebGL), {
  ssr: false,
})

const font = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-family',
})

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function Home() {
  const main = useRef<HTMLDivElement>(null)
  const isMobile = useWindowSize()

  useGSAP(
    () => {
      const boxes: Element[] = gsap.utils.toArray('.animated-container')
      boxes.forEach((box) => {
        const element = box as HTMLElement

        gsap.set(element, { x: -100, opacity: 0 })

        gsap.to(element, {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: isMobile ? '250px bottom' : '150px bottom',
            end: isMobile ? 'bottom+=350px bottom' : 'bottom+=250px bottom',
            scrub: true,
          },
        })
      })
    },
    { scope: main }
  )

  return (
    <main className={font.className}>
      <div id="full-size-image-slider"></div>
      <Head>
        <title>Sina Kheiri - js developer and UI/UX designer</title>
        <meta name="viewport" content="width=device-width, height=device-height" />
      </Head>

      <WebGL />
      <Header />
      <div className="width-fix" ref={main}>
        <Hero />
        <Summary />
        <Skills />
        <Experiences />
        <Projects />
        <Educations />
        <Languages />
        {/* <Contact /> */}
        <Footer />
        <Images />
      </div>
    </main>
  )
}
