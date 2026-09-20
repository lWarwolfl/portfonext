import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import CustomHead from '@/components/utils/CustomHead'
import { WebGLParticles } from '@/components/utils/Particles'
import { useLenis } from '@/lib/lenis'
import useWindowSize from '@/lib/useWindowSize'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Instrument_Sans, Instrument_Serif } from 'next/font/google'
import clsx from 'clsx'
import { useEffect, useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const sans = Instrument_Sans({ subsets: ['latin'], variable: '--font-sans' })
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', variable: '--font-serif' })

interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const main = useRef<HTMLDivElement>(null)
  const isMobile = useWindowSize()
  const { lenis } = useLenis()

  useGSAP(
    () => {
      if (isMobile === undefined) return

      const titles = gsap.utils.toArray<HTMLElement>('.animated-title')
      const boxes = gsap.utils.toArray<HTMLElement>('.animated-container')

      const reveal = (box: HTMLElement, from: number, end: string) => {
        gsap.set(box, { x: from, opacity: 0 })

        gsap.to(box, {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: box,
            start: isMobile ? '350px bottom' : '150px bottom',
            end,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
      }

      titles.forEach((box) => reveal(box, -100, isMobile ? '650px bottom' : '450px bottom'))

      boxes.forEach((box, index) => {
        const last = boxes.length - 1 === index

        reveal(box, -100, last ? 'bottom bottom' : isMobile ? '700px bottom' : '500px bottom')
      })

      ScrollTrigger.refresh()
    },
    { scope: main, dependencies: [isMobile] }
  )

  useEffect(() => {
    if (!lenis) return

    lenis.on('scroll', ScrollTrigger.update)

    return () => {
      lenis.off('scroll', ScrollTrigger.update)
    }
  }, [lenis])

  useEffect(() => {
    let alive = true
    let height = 0

    const refresh = () => {
      if (alive) ScrollTrigger.refresh()
    }

    document.fonts?.ready.then(refresh)
    window.addEventListener('load', refresh)

    const observer = new ResizeObserver(([entry]) => {
      const next = entry?.contentRect.height ?? 0
      if (Math.abs(next - height) < 2) return

      height = next
      refresh()
    })
    observer.observe(document.body)

    return () => {
      alive = false
      window.removeEventListener('load', refresh)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <CustomHead />
      <WebGLParticles size={isMobile ? 260 : 200} />
      <main className={clsx(sans.variable, serif.variable)}>
        <Header />
        <div className="width-fix" ref={main}>
          {children}
          <Footer />
        </div>
      </main>
    </>
  )
}
