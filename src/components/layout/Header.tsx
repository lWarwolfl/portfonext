import Menu from '@/components/layout/Menu'
import StyledButton from '@/components/utils/StyledButton'
import useWindowSize from '@/lib/useWindowSize'
import styles from '@/styles/layout/Header.module.scss'
import logo from '@public/image/jpg/face.jpg'
import Image from 'next/image'

export default function Header() {
  const isMobile = useWindowSize(530)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.fix}>
          <a href="#top" className={styles.brand}>
            <Image
              quality={40}
              placeholder="blur"
              alt="Sina Kheiri"
              src={logo}
              className={styles.logo}
            />
            <span className={styles.name}>Sina Kheiri</span>
          </a>

          {!isMobile ? <Menu /> : null}

          <div className={styles.actions}>
            <StyledButton
              className={styles.button}
              externalLink="/files/Resume.pdf"
              download
              background="glass"
              icon={!isMobile ? 'ci:file-download' : undefined}
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
