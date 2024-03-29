import styles from '@/styles/landing/Projects.module.scss'
import blockt1 from '@public/image/jpg/projects/blockt/1.jpg'
import blockt2 from '@public/image/jpg/projects/blockt/2.jpg'
import blockt3 from '@public/image/jpg/projects/blockt/3.jpg'
import blockt4 from '@public/image/jpg/projects/blockt/4.jpg'
import bluetek1 from '@public/image/jpg/projects/bluetek/1.jpg'
import bluetek2 from '@public/image/jpg/projects/bluetek/2.jpg'
import bluetek3 from '@public/image/jpg/projects/bluetek/3.jpg'
import bluetek4 from '@public/image/jpg/projects/bluetek/4.jpg'
import bluetek5 from '@public/image/jpg/projects/bluetek/5.jpg'
import bluetek6 from '@public/image/jpg/projects/bluetek/6.jpg'
import bluewallet1 from '@public/image/jpg/projects/bluewallet/1.jpg'
import bluewallet2 from '@public/image/jpg/projects/bluewallet/2.jpg'
import bluewallet3 from '@public/image/jpg/projects/bluewallet/3.jpg'
import bluewallet4 from '@public/image/jpg/projects/bluewallet/4.jpg'
import bluewallet5 from '@public/image/jpg/projects/bluewallet/5.jpg'
import bluewallet6 from '@public/image/jpg/projects/bluewallet/6.jpg'
import bluewallet7 from '@public/image/jpg/projects/bluewallet/7.jpg'
import bluewallet8 from '@public/image/jpg/projects/bluewallet/8.jpg'
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
import parkspeedy1 from '@public/image/jpg/projects/parkspeedy/1.jpg'
import parkspeedy2 from '@public/image/jpg/projects/parkspeedy/2.jpg'
import parkspeedy3 from '@public/image/jpg/projects/parkspeedy/3.jpg'
import parkspeedy4 from '@public/image/jpg/projects/parkspeedy/4.jpg'
import { type StaticImageData } from 'next/image'
import * as React from 'react'
import { skills, type SkillInterface } from './skills'
import type { SummaryLinkInterface } from './summary'

export interface ProjectInterface {
  title: string
  accent: string
  description: string | React.ReactNode
  images: StaticImageData[]
  skills: (SkillInterface | undefined)[]
  links: SummaryLinkInterface[]
}

export const projects: ProjectInterface[] = [
  {
    title: 'BlockT',
    accent: '(Front-end Development - Next.js - Web3)',
    description: (
      <>
        BlockT is my personal Web3 project and My goal was to work with{' '}
        <span className={styles.bold}>Web3</span> to connect to{' '}
        <span className={styles.bold}>Smart contracts</span> and send transactions on Ethereum
        Sepolia testnet in this project.
      </>
    ),
    images: [blockt1, blockt2, blockt3, blockt4],
    skills: [
      skills[0],
      skills[3],
      skills[23],
      skills[12],
      skills[13],
      skills[7],
      skills[9],
      skills[22],
      skills[10],
    ].filter((skill) => skill !== undefined),
    links: [
      {
        link: 'https://github.com/lWarwolfl/blockt',
        color: 'blue',
        text: 'Github',
        icon: 'bxl:github',
      },
      {
        link: 'https://nextdev.iran.liara.run/',
        color: 'blue',
        text: 'View',
        icon: 'ci:show',
      },
    ],
  },
  {
    title: 'Farzam.at',
    accent: '(Front-end Development - Next.js)',
    description: (
      <>
        Farzam.at is a startup project for design and coding services that I have collaborated on.
      </>
    ),
    images: [farzam1, farzam2, farzam3, farzam4],
    skills: [skills[0], skills[3], skills[9], skills[22], skills[10]].filter(
      (skill) => skill !== undefined
    ),
    links: [
      {
        link: 'https://farzam.at//',
        color: 'blue',
        text: 'View',
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
    images: [modernist1, modernist2, modernist3, modernist4, modernist5, modernist6, modernist7],
    skills: [
      skills[17],
      skills[15],
      skills[2],
      skills[5],
      skills[20],
      skills[21],
      skills[22],
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
        text: 'View',
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
    images: [bluetek1, bluetek2, bluetek3, bluetek4, bluetek5, bluetek6],
    skills: [
      skills[17],
      skills[15],
      skills[2],
      skills[5],
      skills[20],
      skills[21],
      skills[22],
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
        text: 'View',
        icon: 'ci:show',
      },
    ],
  },
  {
    title: 'Blue Wallet',
    accent: '(UI/UX Design)',
    description: (
      <>
        Blue Wallet is a crypto wallet UI/UX design in Adobe XD which is related to Bluetek project.
      </>
    ),
    images: [
      bluewallet1,
      bluewallet2,
      bluewallet3,
      bluewallet4,
      bluewallet5,
      bluewallet6,
      bluewallet7,
      bluewallet8,
    ],
    skills: [skills[18], skills[20]].filter((skill) => skill !== undefined),
    links: [
      {
        link: 'https://xd.adobe.com/view/1666f955-e067-4bde-bd19-ced57a51a89c-4335/?fullscreen',
        color: 'blue',
        text: 'Adobe XD',
        icon: 'simple-icons:adobexd',
      },
    ],
  },
  {
    title: 'Park Speedy',
    accent: '(UI/UX Design)',
    description: (
      <>
        Park Speedy is a Figma project that showcases my{' '}
        <span className={styles.bold}>UI/UX design</span> skills for a startup app aimed at solving
        parking space issues.
      </>
    ),
    images: [parkspeedy1, parkspeedy2, parkspeedy3, parkspeedy4],
    skills: [skills[18], skills[19]].filter((skill) => skill !== undefined),
    links: [
      {
        link: 'https://www.figma.com/file/bKZwjhaF1BdM1Gf0hJfjWN/Park-Speedy---High-Fidelity?node-id=0%3A1&t=1CZn3zTE5UlIsY6A-1',
        color: 'blue',
        text: 'Figma',
        icon: 'simple-icons:figma',
      },
    ],
  },
]
