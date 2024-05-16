import en from '@public/image/png/languages/en.png'
import fa from '@public/image/png/languages/fa.png'
// import de from "@public/image/png/languages/de.png";
import { type ColorType } from '@/lib/types'
import { type StaticImageData } from 'next/image'

export interface LanguageInterface {
  name: string
  color: ColorType
  image: string | StaticImageData
  description: string
}

export const languages: LanguageInterface[] = [
  {
    name: 'Persian',
    color: 'blue',
    image: fa,
    description: 'Native or bilingual proficiency',
  },
  {
    name: 'English',
    color: 'blue',
    image: en,
    description: 'Professional working proficiency',
  },
]
