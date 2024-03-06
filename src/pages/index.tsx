// import Contact from '@/components/landing/Contact'
import Educations from '@/components/landing/Educations'
import Experiences from '@/components/landing/Experiences'
import Hero from '@/components/landing/Hero'
import Images from '@/components/landing/Images'
import Languages from '@/components/landing/Languages'
import Projects from '@/components/landing/Projects'
import Skills from '@/components/landing/Skills'
import Summary from '@/components/landing/Summary'
import Header from '@/components/layout/Header'
import { WebGL } from '@/components/utils/Particles'
import useWindowSize from '@/hooks/useWindowSize'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Poppins } from 'next/font/google'
import Head from 'next/head'
import { useRef } from 'react'

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
      const boxes = gsap.utils.toArray('.animated-container')
      boxes.forEach((box, index: number) => {
        //@ts-expect-error there is no support to know the type of this animatable box
        gsap.set(box, { x: -100, opacity: 0 })

        //@ts-expect-error there is no support to know the type of this animatable box
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
        <Images />
      </div>
    </main>
  )
}
