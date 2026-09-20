import Socials from '@/components/utils/Socials'
import StyledButton from '@/components/utils/StyledButton'
import { footer } from '@/data/footer'
import styles from '@/styles/layout/Footer.module.scss'
import { Icon } from '@iconify-icon/react'
import logo from '@public/image/svg/logo.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.copyrights}>
          <span className={styles.name}>
            <Image src={logo} alt="Portfonext" className={styles.logo} width={22} height={22} />
            Portfonext
          </span>

          <span className={styles.container}>
            {footer.text}
            <a href={footer.link} target="_blank" rel="noreferrer" className={styles.link}>
              <Icon icon={footer.icon} className={styles.icon} />
              {footer.name}
            </a>
          </span>
        </div>

        <div className={styles.actions}>
          <Socials />
          <StyledButton idLink="top" staticIcon="mdi:arrow-up" background="glass" iconButton />
        </div>
      </div>
    </footer>
  )
}
