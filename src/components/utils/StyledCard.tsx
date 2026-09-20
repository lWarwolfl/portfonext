import { type ColorType } from '@/lib/types'
import styles from '@/styles/utils/StyledCard.module.scss'
import clsx from 'clsx'
import React, { useRef } from 'react'

interface Props {
  id?: string
  className?: string
  children: React.ReactNode
  glow?: ColorType
  move?: boolean
}

const tiltAngle = 3
const glowSize = 170

export default function StyledCard({ id, glow = 'blue', className, children, move = true }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current
    if (!container || window.innerWidth <= 768) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = container.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * tiltAngle
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * tiltAngle

    container.style.transform = `perspective(1400px) rotateX(${rotateX}deg) rotateY(${-rotateY}deg)`

    const glowElement = glowRef.current
    if (glowElement) {
      glowElement.style.top = `${y - glowSize}px`
      glowElement.style.left = `${x - glowSize}px`
    }
  }

  const handleMouseLeave = () => {
    const container = containerRef.current
    if (container) container.style.transform = ''
  }

  return (
    <div
      id={id}
      className={clsx(className, styles.container)}
      onMouseMove={move ? handleMouseMove : undefined}
      onMouseLeave={move ? handleMouseLeave : undefined}
      ref={containerRef}
    >
      {move ? (
        <div ref={glowRef} className={styles.glow} style={{ color: `var(--${glow}-color)` }} />
      ) : null}
      {children}
    </div>
  )
}
