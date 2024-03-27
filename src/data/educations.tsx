import { type ColorType } from '@/lib/types'

export interface EducationInterface {
  name: string
  type: string
  university: string
  time: string
  color: ColorType
}

export const educations: EducationInterface[] = [
  {
    name: 'Software engineering',
    type: "Bachelor's degree",
    university: 'Islamic azad university',
    time: '2022 to present',
    color: 'blue',
  },
  {
    name: 'Biomedical engineering',
    type: "Associate's degree",
    university: 'Shahid beheshti university',
    time: '2019 to 2022',
    color: 'blue',
  },
]
