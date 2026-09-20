import Menu from '@/components/layout/Menu'
import StyledButton from '@/components/utils/StyledButton'
import useWindowSize from '@/lib/useWindowSize'
import styles from '@/styles/layout/Header.module.scss'
import logo from '@public/image/svg/logo.svg'
import Image from 'next/image'

export default function Header() {
  const isMobile = useWindowSize(530)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.fix}>
          <a href="#top" className={styles.brand}>
            <Image src={logo} alt="Sina Kheiri" className={styles.logo} width={26} height={26} />
            <span className={styles.name}>Sina Kheiri</span>
          </a>

          {!isMobile ? <Menu /> : null}

          <div className={styles.actions}>
            <StyledButton
              externalLink="/files/Resume.pdf"
              download
              background="glass"
              staticIcon="ci:file-document"
            >
              Resume
            </StyledButton>
          </div>
        </div>
      </header>

      <div id="top" />

      {isMobile ? <Menu /> : null}
    </>
  )
}
