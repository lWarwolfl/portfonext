import { type ColorType } from '@/lib/types'
import styles from '@/styles/landing/Summary.module.scss'
import photo from '@public/image/jpg/photo.jpg'
import type { StaticImageData } from 'next/image'

export interface SummaryInterface {
  image: StaticImageData
  content: React.ReactNode
  extra?: React.ReactNode
  links: SummaryLinkInterface[]
}

export interface SummaryLinkInterface {
  link: string
  color: ColorType
  text: string
  icon: string
}

export const summary: SummaryInterface = {
  image: photo,
  content: (
    <>
      I am <span className={styles.accent}>Sina Kheiri</span>, a full-stack developer with{' '}
      <span className={styles.bold}>5 years of experience</span> in building performant{' '}
      applications. Skilled in <span className={styles.bold}>Next.js</span> and{' '}
      <span className={styles.bold}>TypeScript</span> with more focus on front-end. Experienced in{' '}
      back-end projects using <span className={styles.bold}>Postgres</span> paired with{' '}
      <span className={styles.bold}>Drizzle</span>. Committed to staying up-to-date and having an{' '}
      eye for detail while operating in fast-paced and <span className={styles.bold}>Agile</span>{' '}
      environments.
    </>
  ),
  links: [
    {
      link: 'mailto:sinakheiri.dev@gmail.com',
      color: 'blue',
      text: 'sinakheiri.dev@gmail.com',
      icon: 'ci:mail',
    },
    {
      link: 'https://www.linkedin.com/in/sinakheiri-dev',
      color: 'blue',
      text: 'linkedin.com/in/sinakheiri-dev',
      icon: 'bxl:linkedin-square',
    },
    {
      link: 'https://github.com/lWarwolfl',
      color: 'blue',
      text: 'github.com/lWarwolfl',
      icon: 'bxl:github',
    },
    {
      link: 'https://t.me/cnawam',
      text: 't.me/cnawam',
      color: 'blue',
      icon: 'bxl:telegram',
    },
  ],
}
