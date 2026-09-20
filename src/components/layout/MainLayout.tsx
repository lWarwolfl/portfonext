import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import CustomHead from '@/components/utils/CustomHead'
import { WebGLParticles } from '@/components/utils/Particles'
import { useLenis } from '@/lib/lenis'
import useWindowSize from '@/lib/useWindowSize'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import clsx from 'clsx'
import { DM_Mono, DM_Sans } from 'next/font/google'
import { useEffect, useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const mono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})

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

      const reveal = (box: HTMLElement, span: number) => {
        gsap.set(box, { y: 22, opacity: 0 })

        gsap.to(box, {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: box,
            start: isMobile ? '240px bottom' : '120px bottom',
            end: () => `+=${Math.min(box.offsetHeight, window.innerHeight * span)}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
      }

      titles.forEach((box) => reveal(box, 0.35))
      boxes.forEach((box) => reveal(box, 0.6))

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
      <main className={clsx(sans.variable, mono.variable)}>
        <Header />
        <div className="width-fix" ref={main}>
          {children}
          <Footer />
        </div>
      </main>
    </>
  )
}
