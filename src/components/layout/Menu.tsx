import StyledButton from '@/components/utils/StyledButton'
import { links } from '@/data/links'
import useWindowSize from '@/hooks/useWindowSize'
import styles from '@/styles/layout/Header.module.scss'

export default function Menu() {
  const isMobile = useWindowSize(530)
  const isTablet = useWindowSize(1050)

  return (
    <div className={styles.navbarcontainer}>
      <div className={styles.navbar}>
        {links.map((link, i) => (
          <StyledButton
            key={i}
            className={styles.link}
            idLink={link.id}
            icon={!isMobile ? 'ci:chevron-right' : undefined}
            staticIcon={link.icon}
            disabled={link.id === ''}
            iconButton={isTablet}
            background={isTablet ? 'glass' : 'transparent'}
          >
            {link.text}
          </StyledButton>
        ))}
      </div>
    </div>
  )
}
