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
      I am <span className={styles.accent}>Sina Kheiri</span> and with 5 years of experience, I have
      a strong background in front-end development. I am skilled in{' '}
      <span className={styles.bold}>Next.js</span>, <span className={styles.bold}>React</span>, and{' '}
      <span className={styles.bold}>TypeScript</span>, and I have worked with{' '}
      <span className={styles.bold}>Supabase</span> for back-end projects. I also have experience in{' '}
      <span className={styles.bold}>Web3</span> and am an enthusiastic beginner in{' '}
      <span className={styles.bold}>3D web apps</span> using{' '}
      <span className={styles.bold}>Three.js</span>. Additionally, I am familiar with{' '}
      <span className={styles.bold}>UI/UX design</span> and have created designs in{' '}
      <span className={styles.bold}>Figma</span> and <span className={styles.bold}>Adobe XD</span>.
    </>
  ),
  extra: (
    <>
      <div className={styles.break}></div>I am dedicated to writing{' '}
      <span className={styles.bold}>clean code</span> and delivering{' '}
      <span className={styles.bold}>high-quality projects</span> with excellent{' '}
      <span className={styles.bold}>user interfaces</span> while ensuring good{' '}
      <span className={styles.bold}>performance</span>. I prioritize staying up-to-date with{' '}
      technology and continuously learning to keep improving and also align with my team&apos;s tech{' '}
      stack.
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
      link: 'https://gitlab.com/cnawam',
      color: 'blue',
      text: 'gitlab.com/cnawam',
      icon: 'bxl:gitlab',
    },
    {
      link: 'https://t.me/cnawam',
      text: 't.me/cnawam',
      color: 'blue',
      icon: 'bxl:telegram',
    },
  ],
}
