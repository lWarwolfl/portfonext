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
    link: 'https://www.linkedin.com/company/sugimotovisa/mycompany/',
    logo: sugimotovisa,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    experiences: [
      <>
        <span className={styles.bold}>Managed projects</span> and{' '}
        <span className={styles.bold}>Reviewed code</span> for efficiency and reliability and
        provided feedback to teammates.
      </>,
      <>
        Developed a <span className={styles.bold}>Boilerplate repo</span> and defined{' '}
        <span className={styles.bold}>Project structure</span>,{' '}
        <span className={styles.bold}>Naming conventions</span> and{' '}
        <span className={styles.bold}>Tools</span> for all future projects.
      </>,
      <>
        Implemented <span className={styles.bold}>Next.js app router</span> and{' '}
        <span className={styles.bold}>Server components</span> to increase performance.
      </>,
      <>
        Designed <span className={styles.bold}>Database tables</span> for various features and{' '}
        handled data by combining <span className={styles.bold}>React query</span> and{' '}
        <span className={styles.bold}>Supabase</span>.
      </>,
      <>
        Improved <span className={styles.bold}>code maintainability</span> by utilizing{' '}
        <span className={styles.bold}>Typescript</span> and its advanced features (Generics,
        Decorators, ...).
      </>,
      <>
        Maintained a clean repo using <span className={styles.bold}>Commitizen</span> and{' '}
        <span className={styles.bold}>Husky</span> and documented projects with the help of{' '}
        <span className={styles.bold}>Story Book</span>.
      </>,
      <>
        Created responsive <span className={styles.bold}>Progressive Web Apps</span>.
      </>,
    ],
    color: 'blue',
  },
  {
    alt: 'Ponisha',
    name: (
      <>
        <span className={styles.bold}>Ponisha</span> (Freelancing)
        <br />
        Front-end Developer and UI Designer
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
        Created{' '}
        <span className={styles.bold}>User personas, Wireframes, High fidelity designs</span>, and
        integrated <span className={styles.bold}>Prototyping</span>.
      </>,
    ],
    color: 'blue',
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
        Established connections to <span className={styles.bold}>Restful APIs</span> using{' '}
        <span className={styles.bold}>Async Thunks</span> and{' '}
        <span className={styles.bold}>Axios</span>.
      </>,
      <>
        Utilized <span className={styles.bold}>Redux toolkit</span> for state management and handled
        data for complex features.
      </>,
      <>
        Gained experience in <span className={styles.bold}>Agile development</span>.
      </>,
    ],
    color: 'blue',
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
        <span className={styles.bold}>Led a team</span> of developers and provided guidance on
        project requirements.
      </>,
      <>
        Applied <span className={styles.bold}>Next.js rendering strategies</span> (SSR, SSG) to
        create performant web apps.
      </>,
      <>
        Worked with <span className={styles.bold}>MetaMask provider</span>,{' '}
        <span className={styles.bold}>Web3</span> and{' '}
        <span className={styles.bold}>Smart Contracts</span> to develop Dapps.
      </>,
    ],
    color: 'blue',
  },
]
