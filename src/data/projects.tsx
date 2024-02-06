import { type SummaryLinkInterface } from '@/data/links'
import modernist1 from '@/public/image/jpg/projects/modernist/1.jpg'
import modernist2 from '@/public/image/jpg/projects/modernist/2.jpg'
import modernist3 from '@/public/image/jpg/projects/modernist/3.jpg'
import modernist4 from '@/public/image/jpg/projects/modernist/4.jpg'
import modernist5 from '@/public/image/jpg/projects/modernist/5.jpg'
import modernist6 from '@/public/image/jpg/projects/modernist/6.jpg'
import modernist7 from '@/public/image/jpg/projects/modernist/7.jpg'
import styles from '@/styles/landing/Projects.module.scss'
import { type ColorType } from '@/utils/types'
import GitHubIcon from '@mui/icons-material/GitHub'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import { type StaticImageData } from 'next/image'
import * as React from 'react'
import { skills, type SkillInterface } from './skills'

export interface ProjectInterface {
   title: string
   accent: string
   description: string | React.ReactNode
   direction: 'normal' | 'reverse'
   color: ColorType
   images: StaticImageData[]
   skills: SkillInterface[]
   links: SummaryLinkInterface[]
}

export const projects: ProjectInterface[] = [
   {
      title: 'Modernist',
      accent: '(Front-end Development - Vanilla)',
      description: React.createElement(
         React.Fragment,
         null,
         'Modernist which is a personal project that showcases my expertise in designing a ',
         React.createElement('span', { className: styles.bold }, 'Customizable HTML Template'),
         '.'
      ),
      direction: 'normal',
      color: 'yellow',
      images: [modernist1, modernist2, modernist3, modernist4, modernist5, modernist6, modernist7],
      skills: [skills[16], skills[15], skills[2], skills[5], skills[19], skills[20]],
      links: [
         {
            link: 'https://github.com/lWarwolfl/Modernist',
            color: 'blue',
            text: 'Github',
            icon: GitHubIcon,
         },
         {
            link: 'https://modernist.lazygamer.ir/',
            color: 'green',
            text: 'Project',
            icon: VisibilityRoundedIcon,
         },
      ],
   },
]
