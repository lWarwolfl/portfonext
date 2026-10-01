import styles from '@/styles/utils/MotionEffects.module.scss'
import { useEffect, useRef } from 'react'

export default function MotionEffects() {
  const progress = useRef<HTMLDivElement>(null)
  const spotlight = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    let frame = 0

    const updateProgress = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight
      const value = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0
      progress.current?.style.setProperty('transform', `scaleX(${value})`)
      frame = 0
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress)
    }

    const onPointerMove = (event: PointerEvent) => {
      if (reducedMotion.matches || !finePointer.matches || event.pointerType === 'touch') return
      spotlight.current?.style.setProperty('--pointer-x', `${event.clientX}px`)
      spotlight.current?.style.setProperty('--pointer-y', `${event.clientY}px`)
      spotlight.current?.style.setProperty('opacity', '1')
    }

    const onPointerLeave = () => spotlight.current?.style.setProperty('opacity', '0')
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return
          target.setAttribute('data-revealed', 'true')
          observer.unobserve(target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    )

    const setupReveals = () => {
      observer.disconnect()
      targets.forEach((target) => {
        target.removeAttribute('data-motion')
        target.removeAttribute('data-revealed')
        if (!reducedMotion.matches) {
          target.setAttribute('data-motion', 'true')
          const isAboveFold = target.getBoundingClientRect().top < window.innerHeight * 0.92
          if (isAboveFold) {
            requestAnimationFrame(() => target.setAttribute('data-revealed', 'true'))
          } else {
            observer.observe(target)
          }
        }
      })
      if (reducedMotion.matches) onPointerLeave()
    }

    setupReveals()
    updateProgress()
    reducedMotion.addEventListener('change', setupReveals)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onPointerLeave)
    window.addEventListener('blur', onPointerLeave)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      targets.forEach((target) => {
        target.removeAttribute('data-motion')
        target.removeAttribute('data-revealed')
      })
      reducedMotion.removeEventListener('change', setupReveals)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
      document.documentElement.removeEventListener('pointerleave', onPointerLeave)
      window.removeEventListener('blur', onPointerLeave)
    }
  }, [])

  return (
    <>
      <div ref={spotlight} className={styles.spotlight} aria-hidden="true" />
      <div ref={progress} className={styles.progress} aria-hidden="true" />
    </>
  )
}
