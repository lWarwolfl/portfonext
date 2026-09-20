import { type ColorType } from '@/lib/types'
import styles from '@/styles/landing/Summary.module.scss'
import photo from '@public/image/jpg/photo.jpg'
import type { StaticImageData } from 'next/image'

export interface SummaryInterface {
  image: StaticImageData
  content: React.ReactNode
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
      I am <span className={styles.accent}>Sina Kheiri</span>, a software engineer with{' '}
      <span className={styles.bold}>5+ years</span> of experience building performant applications.
      Skilled in frontend-focused development using <span className={styles.bold}>Next.js</span> and{' '}
      <span className={styles.bold}>TypeScript</span>, and experienced in back-end and full-stack
      projects with <span className={styles.bold}>Node.js</span> and{' '}
      <span className={styles.bold}>ASP.NET</span>.
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
      link: 'https://github.com/lWarwolfl',
      color: 'blue',
      text: 'github.com/lWarwolfl',
      icon: 'bxl:github',
    },
    {
      link: 'https://www.linkedin.com/in/sinakheiri-dev',
      color: 'blue',
      text: 'linkedin.com/in/sinakheiri-dev',
      icon: 'bxl:linkedin-square',
    },
    {
      link: 'https://t.me/cnawam',
      text: 't.me/cnawam',
      color: 'blue',
      icon: 'bxl:telegram',
    },
  ],
}
