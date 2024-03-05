import { type ColorType } from '@/utils/types'

export interface SummaryLinkInterface {
  link: string
  color: ColorType
  text: string
  icon: string
}

export const summmaryLinks: SummaryLinkInterface[] = [
  {
    link: 'mailto:sinakheiri.dev@gmail.com',
    color: 'purple',
    text: 'sinakheiri.dev@gmail.com',
    icon: 'ci:mail',
  },
  {
    link: 'https://www.linkedin.com/in/mohamad-sina-kheiri',
    color: 'green',
    text: 'linkedin.com/in/mohamad-sina-kheiri',
    icon: 'bxl:linkedin-square',
  },
  {
    link: 'https://github.com/lWarwolfl',
    color: 'blue',
    text: 'github.com/lWarwolfl',
    icon: 'bxl:github',
  },
  {
    link: 'https://t.me/cnawam',
    text: 't.me/cnawam',
    color: 'aqua',
    icon: 'bxl:telegram',
  },
]

export interface MenuLinkInterface {
  id: string
  text: string
  icon: string
}

export const menuLinks: MenuLinkInterface[] = [
  { id: 'summary', text: 'Summary', icon: 'ic:baseline-route' },
  { id: 'skills', text: 'Skills', icon: 'ci:bulb' },
  {
    id: 'experiences',
    text: 'Work Experience',
    icon: 'ci:suitcase',
  },
  { id: 'projects', text: 'Projects', icon: 'ci:window-code-block' },
  { id: 'educations', text: 'Education', icon: 'ci:double-quotes-l' },
  { id: 'languages', text: 'Languages', icon: 'ci:planet' },
]
