import styles from '@/styles/landing/Hero.module.scss'
import type { ReactNode } from 'react'

export interface HeroInterface {
  name: string
  content: string
  lead: ReactNode
}

export const hero: HeroInterface = {
  name: 'Sina Kheiri',
  content: 'Software Engineer | Node.js | ASP.NET | Next.js/React.js | TypeScript',
  lead: (
    <>
      Software engineer with <span className={styles.bold}>5+ years of experience</span> building{' '}
      <span className={styles.bold}>performant applications</span>. Skilled in frontend-focused
      development using <span className={styles.bold}>Next.js</span> and{' '}
      <span className={styles.bold}>TypeScript</span>, and experienced in back-end and full-stack
      projects with <span className={styles.bold}>Node.js</span> and{' '}
      <span className={styles.bold}>ASP.NET</span>. Committed to staying up-to-date and having an eye
      for detail while operating in <span className={styles.bold}>fast-paced</span> and{' '}
      <span className={styles.bold}>Agile</span> environments.
    </>
  ),
}
