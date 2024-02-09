import styles from '@/styles/landing/Educations.module.scss'
import { type ColorType } from '@/utils/types'
import * as React from 'react'

export interface EducationInterface {
   content: string | React.ReactNode
   color: ColorType
}

export const educations: EducationInterface[] = [
   {
      content: React.createElement(
         React.Fragment,
         null,
         React.createElement('span', { className: styles.bold }, 'Software engineering'),
         " (Bachelor's degree)",
         React.createElement('br'),
         'Islamic azad university - 2022 to present'
      ),
      color: 'aqua',
   },
   {
      content: React.createElement(
         React.Fragment,
         null,
         React.createElement('span', { className: styles.bold }, 'Biomedical engineering'),
         " (Associate's degree)",
         React.createElement('br'),
         'Shahid beheshti university - 2019 to 2022'
      ),
      color: 'blue',
   },
]
