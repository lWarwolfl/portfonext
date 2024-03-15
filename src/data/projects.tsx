import { type SummaryLinkInterface } from '@/data/links'
import styles from '@/styles/landing/Projects.module.scss'
import bluetek1 from '@public/image/jpg/projects/bluetek/1.jpg'
import bluetek2 from '@public/image/jpg/projects/bluetek/2.jpg'
import bluetek3 from '@public/image/jpg/projects/bluetek/3.jpg'
import bluetek4 from '@public/image/jpg/projects/bluetek/4.jpg'
import bluetek5 from '@public/image/jpg/projects/bluetek/5.jpg'
import bluetek6 from '@public/image/jpg/projects/bluetek/6.jpg'
import farzam1 from '@public/image/jpg/projects/farzam/1.jpg'
import farzam2 from '@public/image/jpg/projects/farzam/2.jpg'
import farzam3 from '@public/image/jpg/projects/farzam/3.jpg'
import farzam4 from '@public/image/jpg/projects/farzam/4.jpg'
import modernist1 from '@public/image/jpg/projects/modernist/1.jpg'
import modernist2 from '@public/image/jpg/projects/modernist/2.jpg'
import modernist3 from '@public/image/jpg/projects/modernist/3.jpg'
import modernist4 from '@public/image/jpg/projects/modernist/4.jpg'
import modernist5 from '@public/image/jpg/projects/modernist/5.jpg'
import modernist6 from '@public/image/jpg/projects/modernist/6.jpg'
import modernist7 from '@public/image/jpg/projects/modernist/7.jpg'

import { type StaticImageData } from 'next/image'
import * as React from 'react'
import { skills, type SkillInterface } from './skills'

export interface ProjectInterface {
  title: string
  accent: string
  description: string | React.ReactNode
  direction: 'normal' | 'reverse'
  images: StaticImageData[]
  skills: (SkillInterface | undefined)[]
  links: SummaryLinkInterface[]
}

export const projects: ProjectInterface[] = [
  {
    title: 'Farzam.at',
    accent: '(Front-end Development - Next.js)',
    description: (
      <>
        Farzam.at is a startup project for design and coding services that I have collaborated on.
      </>
    ),
    direction: 'normal',
    images: [farzam1, farzam2, farzam3, farzam4],
    skills: [skills[0], skills[1], skills[2], skills[3], skills[9], skills[10]].filter(
      (skill) => skill !== undefined
    ),
    links: [
      {
        link: 'https://farzam.at//',
        color: 'blue',
        text: 'Project',
        icon: 'ci:show',
      },
    ],
  },
  {
    title: 'Modernist',
    accent: '(Front-end Development - Vanilla)',
    description: (
      <>
        Modernist which is a personal project that showcases my expertise in designing a{' '}
        <span className={styles.bold}>Customizable HTML Template</span>.
      </>
    ),
    direction: 'reverse',
    images: [modernist1, modernist2, modernist3, modernist4, modernist5, modernist6, modernist7],
    skills: [
      skills[17],
      skills[15],
      skills[2],
      skills[5],
      skills[19],
      skills[20],
      skills[10],
    ].filter((skill) => skill !== undefined),
    links: [
      {
        link: 'https://github.com/lWarwolfl/Modernist',
        color: 'blue',
        text: 'Github',
        icon: 'bxl:github',
      },
      {
        link: 'https://modernist.lazygamer.ir/',
        color: 'blue',
        text: 'Project',
        icon: 'ci:show',
      },
    ],
  },
  {
    title: 'Bluetek',
    accent: '(Front-end Development - Vanilla)',
    description: (
      <>
        As a key contributor to the Bluetek project, I developed 5 unique landings and profiles that
        were both <span className={styles.bold}>visually appealing and user-friendly</span> and met
        the requirements of a <span className={styles.bold}>crypto-based</span>
        website.
      </>
    ),
    direction: 'normal',
    images: [bluetek1, bluetek2, bluetek3, bluetek4, bluetek5, bluetek6],
    skills: [
      skills[17],
      skills[15],
      skills[2],
      skills[5],
      skills[19],
      skills[20],
      skills[10],
    ].filter((skill) => skill !== undefined),
    links: [
      {
        link: 'https://github.com/lWarwolfl/Bluetek',
        color: 'blue',
        text: 'Github',
        icon: 'bxl:github',
      },
      {
        link: 'https://bluetek.lazygamer.ir/home/',
        color: 'blue',
        text: 'Project',
        icon: 'ci:show',
      },
    ],
  },
]
