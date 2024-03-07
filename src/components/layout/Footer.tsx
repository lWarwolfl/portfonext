import styles from '@/styles/layout/Footer.module.scss'
import { Icon } from '@iconify-icon/react'

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.copyrights}>
          Developed by
          <a href="https://github.com/lWarwolfl" target="_blank" className={styles.link}>
            <Icon icon="bxl:github" className={styles.icon} />
            lWarwolfl
          </a>
        </div>
      </div>
    </>
  )
}
