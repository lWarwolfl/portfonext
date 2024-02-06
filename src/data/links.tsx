import { Link } from '@/components/landing/Summary'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded'
import TelegramIcon from '@mui/icons-material/Telegram'

export const links: Link[] = [
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
