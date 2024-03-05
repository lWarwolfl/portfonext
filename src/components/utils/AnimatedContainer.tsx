import { useLenis } from '@/utils/lenis'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

interface AnimatedContainerProps {
  id?: string
  className?: string
  children: React.ReactNode
  speed?: number
  transformAmount?: number
  visibleThreshold?: number
}

export default function AnimatedContainer({
  id = '',
  className = '',
  children,
  speed = 0.7,
  transformAmount = 100,
  visibleThreshold = 100,
}: AnimatedContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const elementRef = useRef<HTMLDivElement>(null)
  const { lenis } = useLenis()

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && elementRef.current && lenis) {
        const scroll = lenis.actualScroll

        const containerTop = containerRef.current.getBoundingClientRect().top
        const distanceFromTop = scroll + containerTop - window.innerHeight + visibleThreshold

        if (scroll >= distanceFromTop || window.innerWidth < 768) {
          gsap.to(elementRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: speed,
            ease: 'power1.out',
            onComplete: () => {
              if (elementRef.current) elementRef.current.dataset.animated = 'true'
            },
          })
        } else {
          gsap.to(elementRef.current, {
            autoAlpha: 0,
            y: -transformAmount,
            duration: speed,
            ease: 'power1.out',
            onComplete: () => {
              if (elementRef.current) delete elementRef.current.dataset.animated
            },
          })
        }
      }
    }

    if (lenis) lenis.on('scroll', handleScroll)
    handleScroll()

    return () => {
      if (lenis) lenis.off('scroll', handleScroll)
    }
  }, [lenis, speed, transformAmount, visibleThreshold])

  useEffect(() => {
    if (elementRef.current) {
      gsap.set(elementRef.current, {
        autoAlpha: 0,
        y: -transformAmount,
      })
    }
  }, [transformAmount])

  return (
    <div ref={containerRef}>
      <div id={id} ref={elementRef} className={className}>
        {children}
      </div>
    </div>
  )
}
