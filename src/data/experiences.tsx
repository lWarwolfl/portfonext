import { type ColorType } from '@/lib/types'
import styles from '@/styles/landing/Experiences.module.scss'
import agahpadidar from '@public/image/jpg/company/agahpadidar.jpg'
import sugimotovisa from '@public/image/jpg/company/sugimotovisa.jpg'
import exmodules from '@public/image/png/company/exmodules.png'
import ponisha from '@public/image/png/company/ponisha.png'
import { type StaticImageData } from 'next/image'
import React from 'react'

export interface ExperienceInterface {
  alt: string
  name: string | React.ReactNode
  link: string
  logo: string | StaticImageData
  icon: string
  listicon: string
  experiences: string[] | React.ReactNode[]
  color: ColorType
  position: 'left' | 'right'
}

export const experiences: ExperienceInterface[] = [
  {
    alt: 'Sparkbridge',
    name: (
      <>
        <span className={styles.bold}>Sparkbridge</span> (Remote)
        <br />
        Senior Front-end Developer
      </>
    ),
    link: 'https://www.linkedin.com/company/sparkbridge',
    logo: sugimotovisa,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    experiences: [
      <>
        <span className={styles.bold}>Managed projects</span>,{' '}
        <span className={styles.bold}>Led developers</span>, and{' '}
        <span className={styles.bold}>Reviewed code</span> for efficiency and reliability, and
        provided feedback to teammates.
      </>,
      <>
        Developed a <span className={styles.bold}>Boilerplate repo</span> and defined{' '}
        <span className={styles.bold}>Project structure</span>,{' '}
        <span className={styles.bold}>Naming conventions</span>, and{' '}
        <span className={styles.bold}>Tools</span> for all future projects.
      </>,
      <>
        Implemented <span className={styles.bold}>Next.js app router</span> and{' '}
        <span className={styles.bold}>Server components</span> to increase performance.
      </>,
      <>
        Designed <span className={styles.bold}>Database tables</span> using{' '}
        <span className={styles.bold}>Supabase</span> and developed various features by combining{' '}
        <span className={styles.bold}>React query</span> and{' '}
        <span className={styles.bold}>Cache helpers</span>.
      </>,
      <>
        Improved <span className={styles.bold}>code maintainability</span> by utilizing{' '}
        <span className={styles.bold}>TypeScript</span> and its advanced features (
        <span className={styles.bold}>Generics, Decorators</span>, etc.).
      </>,
      <>
        Maintained a clean repo using <span className={styles.bold}>Commitizen</span> and{' '}
        <span className={styles.bold}>Husky</span>, and documented projects with the help of{' '}
        <span className={styles.bold}>Storybook</span>.
      </>,
      <>
        Created responsive <span className={styles.bold}>Progressive Web Apps (PWA)</span>.
      </>,
    ],
    color: 'blue',
    position: 'left',
  },
  {
    alt: 'Agahpadidar',
    name: (
      <>
        <span className={styles.bold}>Agahpadidar</span> (Hybrid)
        <br />
        Front-end Developer
      </>
    ),
    link: 'https://www.linkedin.com/company/agahpadidar/',
    logo: agahpadidar,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    experiences: [
      <>
        Established connections to <span className={styles.bold}>RESTful APIs</span> using{' '}
        <span className={styles.bold}>Async Thunks</span> and{' '}
        <span className={styles.bold}>Axios</span>.
      </>,
      <>
        Utilized <span className={styles.bold}>Redux toolkit</span> for state management and handled
        data for complex features.
      </>,
    ],
    color: 'blue',
    position: 'right',
  },
  {
    alt: 'Ponisha',
    name: (
      <>
        <span className={styles.bold}>Ponisha</span> (Freelancing)
        <br />
        Front-end Developer/UI Designer
      </>
    ),
    link: 'https://ponisha.ir/profile/warwolf',
    logo: ponisha,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    experiences: [
      <>
        Developed static web pages and <span className={styles.bold}>HTML templates</span>.
      </>,
      <>
        Created <span className={styles.bold}>User personas</span>,{' '}
        <span className={styles.bold}>Wireframes</span>,{' '}
        <span className={styles.bold}>High fidelity designs</span>, and integrated{' '}
        <span className={styles.bold}>Prototyping</span>.
      </>,
    ],
    color: 'blue',
    position: 'right',
  },
  {
    alt: 'Exmodules',
    name: (
      <>
        <span className={styles.bold}>Exmodules</span> (Remote)
        <br />
        Front-end Developer
      </>
    ),
    link: 'https://twitter.com/exmodules',
    logo: exmodules,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    experiences: [
      <>
        Applied <span className={styles.bold}>Next.js rendering strategies</span> (
        <span className={styles.bold}>SSR, SSG</span>) to create performant web apps.
      </>,
      <>
        Worked with <span className={styles.bold}>MetaMask provider</span>,{' '}
        <span className={styles.bold}>Web3</span>, and{' '}
        <span className={styles.bold}>Smart Contracts</span> to develop Dapps.
      </>,
    ],
    color: 'blue',
    position: 'right',
  },
]
