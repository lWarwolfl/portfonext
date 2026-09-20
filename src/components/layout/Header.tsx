import Menu from '@/components/layout/Menu'
import Socials from '@/components/utils/Socials'
import StyledButton from '@/components/utils/StyledButton'
import styles from '@/styles/layout/Header.module.scss'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.fix}>
          <Menu />

          <div className={styles.actions}>
            <Socials className={styles.socials} />
            <StyledButton
              externalLink="/files/Resume.pdf"
              download
              background="invert"
              staticIcon="ci:file-document"
            >
              Resume
            </StyledButton>
          </div>
        </div>
      </header>

      <div id="top" />
    </>
  )
}
