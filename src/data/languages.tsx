import en from '@/public/image/svg/languages/en.svg'
import fa from '@/public/image/svg/languages/fa.svg'
// import de from "@/public/image/svg/languages/de.svg";
import { type ColorType } from '@/utils/types'
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
      color: 'green',
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
