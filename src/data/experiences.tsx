import agahpadidar from '@/public/image/jpg/company/agahpadidar.jpg'
import exmodules from '@/public/image/png/company/exmodules.png'
import ponisha from '@/public/image/png/company/ponisha.png'
import styles from '@/styles/landing/Experiences.module.scss'
import { type ColorType } from '@/utils/types'
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import { type StaticImageData } from 'next/image'
import * as React from 'react'

export interface ExperienceInterface {
   alt: string
   name: string | React.ReactNode
   link: string
   logo: string | StaticImageData
   icon: React.ElementType
   listicon: React.ElementType
   experiences: string[] | React.ReactNode[]
   color: ColorType
}

export const experiences: ExperienceInterface[] = [
   {
      alt: 'Exmodules',
      name: React.createElement(
         React.Fragment,
         null,
         React.createElement('span', { className: styles.bold }, 'Exmodules'),
         ' (Remote)',
         React.createElement('br'),
         'Front-end(React.js/Next.js) Developer'
      ),
      link: 'https://exmodules.com/',
      logo: exmodules,
      icon: OpenInNewRoundedIcon,
      listicon: LibraryAddCheckOutlinedIcon,
      experiences: [
         React.createElement(
            React.Fragment,
            null,
            React.createElement('span', { className: styles.bold }, 'Led a team'),
            ' of developers and provided guidance on project requirements.'
         ),
         React.createElement(
            React.Fragment,
            null,
            'Created seamless user interfaces for various projects',
            React.createElement('span', { className: styles.bold }, '(+10)'),
            '.'
         ),
         React.createElement(
            React.Fragment,
            null,
            'Learned and improved skills in ',
            React.createElement('span', { className: styles.bold }, 'Next.js, InterfaceScript, '),
            'and ',
            React.createElement('span', { className: styles.bold }, 'Tailwind CSS'),
            '.'
         ),
      ],
      color: 'yellow',
   },
   {
      alt: 'Ponisha',
      name: React.createElement(
         React.Fragment,
         null,
         React.createElement('span', { className: styles.bold }, 'Ponisha'),
         ' (Freelancing)',
         React.createElement('br'),
         'Front-end Developer and UI Designer'
      ),
      link: 'https://ponisha.ir/profile/warwolf',
      logo: ponisha,
      icon: OpenInNewRoundedIcon,
      listicon: LibraryAddCheckOutlinedIcon,
      experiences: [
         React.createElement(
            React.Fragment,
            null,
            'Designed ',
            React.createElement('span', { className: styles.bold }, 'User interfaces'),
            ' for mobile apps and websites.'
         ),
         React.createElement(
            React.Fragment,
            null,
            'Created ',
            React.createElement(
               'span',
               { className: styles.bold },
               'User personas, Wireframes, High fidelity designs'
            ),
            ', and integrated ',
            React.createElement('span', { className: styles.bold }, 'Prototyping'),
            '.'
         ),
         React.createElement(
            React.Fragment,
            null,
            'Developed static web pages and ',
            React.createElement('span', { className: styles.bold }, 'HTML templates'),
            '.'
         ),
      ],
      color: 'green',
   },
   {
      alt: 'Agahpadidar',
      name: React.createElement(
         React.Fragment,
         null,
         React.createElement('span', { className: styles.bold }, 'Agahpadidar'),
         ' (Full-time)',
         React.createElement('br'),
         'Front-end(React.js) Developer'
      ),
      link: 'https://www.linkedin.com/company/agahpadidar/',
      logo: agahpadidar,
      icon: OpenInNewRoundedIcon,
      listicon: LibraryAddCheckOutlinedIcon,
      experiences: [
         React.createElement(
            React.Fragment,
            null,
            'Developed complex dynamic features using ',
            React.createElement('span', { className: styles.bold }, 'React.js'),
            ' and ',
            React.createElement('span', { className: styles.bold }, 'Redux Toolit'),
            '.'
         ),
         React.createElement(
            React.Fragment,
            null,
            'Established connections to ',
            React.createElement('span', { className: styles.bold }, 'Restful APIs '),
            'using ',
            React.createElement('span', { className: styles.bold }, 'Async Thunks '),
            'and ',
            React.createElement('span', { className: styles.bold }, 'Axios'),
            '.'
         ),
         React.createElement(
            React.Fragment,
            null,
            'Utilized ',
            React.createElement('span', { className: styles.bold }, 'Github'),
            ' for version control and collaborated with team members to resolve conflicts.'
         ),
         React.createElement(
            React.Fragment,
            null,
            'Established connections to ',
            React.createElement('span', { className: styles.bold }, 'Restful APIs'),
            ' using ',
            React.createElement('span', { className: styles.bold }, 'Redux Toolkit'),
            ' and axios for ',
            React.createElement('span', { className: styles.bold }, '20+ features'),
            '.'
         ),
         React.createElement(
            React.Fragment,
            null,
            'Participated in ',
            React.createElement(
               'span',
               { className: styles.bold },
               'Agile development methodologies'
            ),
            ' such as daily stand-ups and sprint planning.'
         ),
      ],
      color: 'aqua',
   },
]
