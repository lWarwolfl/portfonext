import { type ColorType } from '@/lib/types'
import styles from '@/styles/utils/StyledCard.module.scss'
import clsx from 'clsx' // Ensure you've installed the 'clsx' package
import React, { useCallback, useRef, useState } from 'react'

interface Props {
  id?: string
  className?: string
  variant: 'narrowbottom' | 'small' | 'smallfull'
  children: React.ReactNode
  glow?: ColorType
  move?: boolean
}

const variantStyles = {
  narrowbottom: styles.narrowbottom,
  small: styles.small,
  smallfull: styles.smallfull,
}

export default function StyledCard({
  id,
  glow = 'blue',
  className,
  variant,
  children,
  move = true,
}: Props) {
  const [glowPosition, setGlowPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current || window.innerWidth <= 768) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const mouseX = event.clientX - containerRect.left
      const mouseY = event.clientY - containerRect.top

      const multiplier = variant === 'small' ? 8 : variant === 'smallfull' ? 4 : 2
      const offset = variant === 'narrowbottom' ? 125 : 75

      const xSkew = ((mouseX - containerRect.width / 2) / (containerRect.width / 2)) * multiplier
      const ySkew = ((mouseY - containerRect.height / 2) / (containerRect.height / 2)) * multiplier

      containerRef.current.style.transform = `perspective(1000px) rotateX(${ySkew}deg) rotateY(${-xSkew}deg)`
      setGlowPosition({ x: mouseX - offset, y: mouseY - offset })
    },
    [variant]
  )

  function handleMouseLeave() {
    if (containerRef.current) {
      containerRef.current.style.transform = ''
    }
  }

  return (
    <div
      id={id}
      className={clsx(className, styles.container, variantStyles[variant])}
      onMouseMove={move ? handleMouseMove : () => {}}
      onMouseLeave={move ? handleMouseLeave : () => {}}
      ref={containerRef}
    >
      {move ? (
        <div
          className={styles.glow}
          style={{
            top: `${glowPosition.y}px`,
            left: `${glowPosition.x}px`,
            backgroundColor: `var(--${glow}-color)`,
          }}
        />
      ) : null}
      {children}
    </div>
  )
}
