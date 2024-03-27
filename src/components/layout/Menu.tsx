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
    const onScroll = () => {
      let foundActive = false

      links.forEach((link) => {
        const element = document.getElementById(link.id)
        if (element) {
          const bounding = element.getBoundingClientRect()
          if (bounding.top < 300) {
            setActiveLink(link.id)
            foundActive = true
          }
        }
      })

      if (!foundActive) {
        setActiveLink('')
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
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
