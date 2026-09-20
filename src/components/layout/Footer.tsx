import StyledButton from '@/components/utils/StyledButton'
import { footer } from '@/data/footer'
import styles from '@/styles/layout/Footer.module.scss'
import { Icon } from '@iconify-icon/react'
import logo from '@public/image/jpg/face.jpg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.copyrights}>
          <span className={styles.name}>
            <Image quality={40} placeholder="blur" alt="logo" src={logo} className={styles.logo} />
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

        <StyledButton idLink="top" staticIcon="ci:arrow-up" background="glass" iconButton />
      </div>
    </footer>
  )
}
