import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import CustomHead from '@/components/utils/CustomHead'
import { WebGLParticles } from '@/components/utils/Particles'
import useWindowSize from '@/lib/useWindowSize'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Poppins } from 'next/font/google'
import { useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const font = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-family',
})

interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const main = useRef<HTMLDivElement>(null)
  const isMobile = useWindowSize()

  useGSAP(
    () => {
      const titles = gsap.utils.toArray('.animated-title') as HTMLElement[]
      const boxes = gsap.utils.toArray('.animated-container') as HTMLElement[]
      const reverseboxes = gsap.utils.toArray('.animated-container-reverse') as HTMLElement[]

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

      reverseboxes.forEach((box, index: number) => {
        gsap.set(box, { x: 100, opacity: 0 })

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
    <>
      <CustomHead />
      <WebGLParticles size={isMobile ? 260 : 200} />
      <main className={font.className}>
        <div id="full-size-image-slider"></div>
        <Header />
        <div className="width-fix" ref={main}>
          {children}
          <Footer />
        </div>
      </main>
    </>
  )
}
