import Menu from '@/components/layout/Menu'
import Socials from '@/components/utils/Socials'
import StyledButton from '@/components/utils/StyledButton'
import useWindowSize from '@/lib/useWindowSize'
import styles from '@/styles/layout/Header.module.scss'
import photo from '@public/image/jpg/photo.jpg'
import Image from 'next/image'

export default function Header() {
  const isMobile = useWindowSize(530)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.fix}>
          <a href="#top" className={styles.brand}>
            <Image
              quality={70}
              placeholder="blur"
              src={photo}
              alt="Sina Kheiri"
              className={styles.avatar}
              width={32}
              height={32}
            />
            <span className={styles.ident}>
              <span className={styles.name}>Sina Kheiri</span>
              <span className={styles.role}>Software Engineer</span>
            </span>
          </a>

          {!isMobile ? <Menu /> : null}

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

      {isMobile ? <Menu /> : null}
    </>
  )
}
