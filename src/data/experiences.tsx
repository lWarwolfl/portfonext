import { type ColorType } from '@/lib/types'
import styles from '@/styles/landing/Experiences.module.scss'
import agahpadidar from '@public/image/jpg/company/agahpadidar.jpg'
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
    alt: 'Exmodules',
    name: (
      <>
        <span className={styles.bold}>Exmodules</span> (Remote)
        <br />
        Senior Front-end Developer
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
        Created seamless user interfaces for various projects
        <span className={styles.bold}>(+10)</span>.
      </>,
      <>
        Learned and improved skills in{' '}
        <span className={styles.bold}>Next.js, InterfaceScript,</span> and{' '}
        <span className={styles.bold}>Tailwind CSS</span>.
      </>,
      <>
        Delved into <span className={styles.bold}>Web3</span> world and worked with{' '}
        <span className={styles.bold}>MetaMask</span> and
        <span className={styles.bold}>Smart Contracts</span> to develop crypto based websites.
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
        Designed <span className={styles.bold}>User interfaces</span> for mobile apps and websites.
      </>,
      <>
        Created{' '}
        <span className={styles.bold}>User personas, Wireframes, High fidelity designs</span>, and
        integrated <span className={styles.bold}>Prototyping</span>.
      </>,
      <>
        Developed static web pages and <span className={styles.bold}>HTML templates</span>.
      </>,
    ],
    color: 'blue',
  },
  {
    alt: 'Agahpadidar',
    name: (
      <>
        <span className={styles.bold}>Agahpadidar</span> (Full-time)
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
        Developed complex dynamic features using <span className={styles.bold}>React.js</span> and{' '}
        <span className={styles.bold}>Redux Toolit</span>.
      </>,
      <>
        Established connections to <span className={styles.bold}>Restful APIs</span> using{' '}
        <span className={styles.bold}>Async Thunks</span> and{' '}
        <span className={styles.bold}>Axios</span>.
      </>,
      <>
        Utilized <span className={styles.bold}>Redux toolit</span> for state management.
      </>,
      <>
        Participated in <span className={styles.bold}>Agile development methodologies</span> such as
        daily stand-ups and sprint planning.
      </>,
    ],
    color: 'blue',
  },
]
