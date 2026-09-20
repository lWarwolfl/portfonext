import StyledButton from '@/components/utils/StyledButton'
import { links } from '@/data/links'
import useWindowSize from '@/lib/useWindowSize'
import styles from '@/styles/layout/Header.module.scss'
import { useEffect, useState } from 'react'

export default function Menu() {
  const isMobile = useWindowSize(530)
  const isTablet = useWindowSize(1050)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    let frame = 0

    const onScroll = () => {
      if (frame) return

      frame = requestAnimationFrame(() => {
        frame = 0

        let found = ''

        links.forEach((link) => {
          const element = document.getElementById(link.id)
          if (element && element.getBoundingClientRect().top < 350) found = link.id
        })

        setActiveLink((current) => (current === found ? current : found))
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className={styles.navbarcontainer}>
      <div className={styles.navbar}>
        {links.map((link, i) => (
          <StyledButton
            key={i}
            className={`${styles.link} ${activeLink === link.id ? styles.active : ''}`}
            idLink={link.id}
            icon={!isMobile ? 'ci:chevron-right' : undefined}
            staticIcon={link.icon}
            disabled={link.id === ''}
            iconButton={isTablet}
            background={isTablet ? 'glass' : 'transparent'}
            active={activeLink === link.id}
          >
            {link.text}
          </StyledButton>
        ))}
      </div>
    </div>
  )
}
