import StyledButton from '@/components/utils/StyledButton'
import { menuLinks } from '@/data/links'
import useWindowSmallerThan from '@/hooks/useWindowSmallerThan'
import styles from '@/styles/layout/Header.module.scss'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'

export default function Menu() {
  const isMobile = useWindowSmallerThan({ size: 530 })
  const isTablet = useWindowSmallerThan({ size: 1050 })

  return (
    <div className={styles.navbarcontainer}>
      <div className={styles.navbar}>
        {menuLinks.map((link, i) => (
          <StyledButton
            key={i}
            className={styles.link}
            idLink={link.id}
            icon={!isMobile ? KeyboardArrowRightRoundedIcon : undefined}
            staticIcon={link.icon}
            iconSize="large"
            staticIconSize="big"
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
