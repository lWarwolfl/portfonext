import { type ColorType } from '@/utils/types'
import CardTravelRoundedIcon from '@mui/icons-material/CardTravelRounded'
import DataObjectRoundedIcon from '@mui/icons-material/DataObjectRounded'
import GitHubIcon from '@mui/icons-material/GitHub'
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded'
import PublicRoundedIcon from '@mui/icons-material/PublicRounded'
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined'
import TelegramIcon from '@mui/icons-material/Telegram'

export interface SummaryLinkInterface {
   link: string
   color: ColorType
   text: string
   icon: React.ElementType
}

export const summmaryLinks: SummaryLinkInterface[] = [
   {
      link: 'mailto:sinakheiri.dev@gmail.com',
      color: 'purple',
      text: 'sinakheiri.dev@gmail.com',
      icon: MailOutlineRoundedIcon,
   },
   {
      link: 'https://www.linkedin.com/in/mohamad-sina-kheiri',
      color: 'green',
      text: 'linkedin.com/in/mohamad-sina-kheiri',
      icon: LinkedInIcon,
   },
   {
      link: 'https://github.com/lWarwolfl',
      color: 'blue',
      text: 'github.com/lWarwolfl',
      icon: GitHubIcon,
   },
   {
      link: 'https://t.me/cnawam',
      text: 't.me/cnawam',
      color: 'aqua',
      icon: TelegramIcon,
   },
]

export interface MenuLinkInterface {
   id: string
   text: string
   icon: React.ElementType
}

export const menuLinks: MenuLinkInterface[] = [
   { id: 'summary', text: 'Summary', icon: RouteOutlinedIcon },
   { id: 'skills', text: 'Skills', icon: HandymanOutlinedIcon },
   {
      id: 'experiences',
      text: 'Work Experience',
      icon: CardTravelRoundedIcon,
   },
   { id: 'projects', text: 'Projects', icon: DataObjectRoundedIcon },
   { id: 'educations', text: 'Educations', icon: LibraryBooksOutlinedIcon },
   { id: 'languages', text: 'Languages', icon: PublicRoundedIcon },
]
