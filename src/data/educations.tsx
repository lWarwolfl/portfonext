import styles from '@/styles/landing/Educations.module.scss'
import { type ColorType } from '@/utils/types'
import React from 'react'

export interface EducationInterface {
  content: string | React.ReactNode
  color: ColorType
}

export const educations: EducationInterface[] = [
  {
    content: (
      <>
        <span className={styles.bold}>Software engineering </span>
        - Bachelor&apos;s degree
        <br />
        Islamic azad university - 2022 to present
      </>
    ),
    color: 'aqua',
  },
  {
    content: (
      <>
        <span className={styles.bold}>Biomedical engineering </span>
        - Associate&apos;s degree
        <br />
        Shahid beheshti university - 2019 to 2022
      </>
    ),
    color: 'blue',
  },
]
