import en from '@public/image/png/languages/en.png'
import fa from '@public/image/png/languages/fa.png'
// import de from "@public/image/png/languages/de.png";
import { type ColorType } from '@/lib/types'
import { type StaticImageData } from 'next/image'

export interface LanguageInterface {
  name: string
  color: ColorType
  image: string | StaticImageData
  percent: string
}

export const languages: LanguageInterface[] = [
  {
    name: 'Persian (Mothers tongue)',
    color: 'blue',
    image: fa,
    percent: '100%',
  },
  {
    name: 'English (Fluent)',
    color: 'blue',
    image: en,
    percent: '90%',
  },
  // {
  // 	name: "Dutch (Beginner)",
  // 	color: "aqua",
  // 	image: de,
  // 	percent: "15%",
  // },
]
