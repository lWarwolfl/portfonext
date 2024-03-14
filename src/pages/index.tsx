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
import CustomHead from '@/components/utils/CustomHead'
import useWindowSize from '@/hooks/useWindowSize'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import dynamic from 'next/dynamic'
import { Poppins } from 'next/font/google'
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
      const titles = gsap.utils.toArray('.animated-title') as HTMLElement[]
      const boxes = gsap.utils.toArray('.animated-container') as HTMLElement[]

      titles.forEach((box) => {
        gsap.set(box, { x: -100, opacity: 0 })

        gsap.to(box, {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: box,
            start: isMobile ? '300px bottom' : '100px bottom',
            end: isMobile ? '650px bottom' : '450px bottom',
            scrub: true,
          },
        })
      })

      boxes.forEach((box, index: number) => {
        gsap.set(box, { x: -100, opacity: 0 })

        gsap.to(box, {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: box,
            start: isMobile ? '350px bottom' : '150px bottom',
            end:
              boxes.length - 1 === index
                ? 'bottom bottom'
                : isMobile
                  ? '700px bottom'
                  : '500px bottom',
            scrub: true,
          },
        })
      })
    },
    { scope: main }
  )

  return (
    <main className={font.className}>
      <CustomHead />
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
        <Footer />
        <Images />
      </div>
    </main>
  )
}
