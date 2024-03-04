import styles from '@/styles/utils/AnimatedContainer.module.scss'
import { useLenis } from '@/utils/lenis'
import React, { useEffect, useRef } from 'react'

interface AnimatedContainerProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export default function AnimatedContainer({
  id = '',
  className = '',
  children,
}: AnimatedContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const elementRef = useRef<HTMLDivElement>(null)
  const lenis = useLenis().lenis

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && elementRef.current && lenis) {
        const scroll = lenis.actualScroll

        const containerTop = containerRef.current.getBoundingClientRect().top
        const distanceFromTop = scroll + containerTop - window.innerHeight + 200

        if (scroll >= distanceFromTop || window.innerWidth < 768) {
          elementRef.current.classList.add(`${styles.show}`)
        } else {
          elementRef.current.classList.remove(`${styles.show}`)
        }
      }
    }

    if (lenis) lenis.on('scroll', handleScroll)
    handleScroll()

    return () => {
      if (lenis) lenis.off('scroll', handleScroll)
    }
  }, [lenis])

  return (
    <div ref={containerRef}>
      <div id={id} ref={elementRef} className={`${styles.container} ${className}`}>
        {children}
      </div>
    </div>
  )
}
