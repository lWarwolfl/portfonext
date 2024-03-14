import StyledButton from '@/components/utils/StyledButton'
import useWindowSize from '@/hooks/useWindowSize'
import styles from '@/styles/layout/Header.module.scss'
import { useLenis } from '@/utils/lenis'
import logo from '@public/image/jpg/face.jpg'
import Image from 'next/image'
import React from 'react'
import Menu from './Menu'

export default function Header() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isMobile = useWindowSize(530)
  const { lenis } = useLenis()

  React.useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && lenis) {
        const scroll = lenis.scroll

        if (scroll > 10) {
          containerRef.current.classList.add(`${styles.stick}`)
        } else {
          containerRef.current.classList.remove(`${styles.stick}`)
        }
      }
    }

    if (lenis) lenis.on('scroll', handleScroll)
    handleScroll()

    return () => {
      if (lenis) lenis.off('scroll', handleScroll)
    }
  }, [lenis])

  return (
    <>
      <div className={styles.header} ref={containerRef}>
        <div className={styles.fix}>
          <Image
            quality={30}
            placeholder="blur"
            alt="logo"
            src={logo}
            className={styles.logo}
          ></Image>

          {!isMobile ? <Menu /> : null}

          <StyledButton
            className={styles.upbutton}
            idLink="top"
            icon="line-md:chevron-small-double-up"
            staticIcon="line-md:chevron-small-up"
            fontSize="large"
            background="glass"
            iconButton
          />

          <StyledButton
            className={styles.button}
            externalLink="/files/resume/en/Resume.pdf"
            download
            background="glass"
            icon={!isMobile ? 'ci:file-download' : undefined}
            staticIcon="ci:file-document"
            color="blue"
          >
            My resume
          </StyledButton>
        </div>
      </div>
      <div id="top" className={styles.dummyheader}>
        <div className={styles.dummy}></div>
      </div>
      {isMobile ? <Menu /> : null}
    </>
  )
}
