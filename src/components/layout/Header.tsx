import StyledButton from '@/components/utils/StyledButton'
import useWindowSmallerThan from '@/hooks/useWindowSmallerThan'
import styles from '@/styles/layout/Header.module.scss'
import { useLenis } from '@/utils/lenis'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import logo from '@public/image/png/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

export default function Header() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isMobile = useWindowSmallerThan({ size: 530 })
  const isTablet = useWindowSmallerThan({ size: 1050 })
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
          <Link className={styles.logo} href="/">
            <Image
              quality={85}
              placeholder="blur"
              alt="logo"
              src={logo}
              className={styles.image}
            ></Image>
          </Link>

          {!isMobile ? <Menu /> : null}

          <StyledButton
            className={styles.upbutton}
            idLink="top"
            icon={!isMobile ? KeyboardDoubleArrowUpRoundedIcon : undefined}
            staticIcon={KeyboardArrowUpRoundedIcon}
            iconSize="big"
            staticIconSize="big"
            background="glass"
            iconButton
          />

          <StyledButton
            className={styles.button}
            idLink=""
            background="glass"
            icon={!isMobile ? KeyboardArrowRightRoundedIcon : undefined}
            staticIcon={SendRoundedIcon}
            fontSize="small"
            iconSize="large"
            iconButton={isTablet}
            disabled
          >
            Contact Me
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
