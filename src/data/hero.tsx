import styles from '@/styles/landing/Hero.module.scss'

export interface HeroInterface {
  content: React.ReactNode
}

export const hero: HeroInterface = {
  content: (
    <>
      Front-end <span className={styles.accent}>Developer</span>{' '}
      <span className={styles.note}>(Next.js/React.js)</span>
    </>
  ),
}
