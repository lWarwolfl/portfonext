import styles from '@/styles/StyledButton.module.scss'
import type { Color } from '@/utils/types'
import type { ButtonProps } from '@mui/material'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export interface StyledButtonProps extends Omit<ButtonProps, 'color'> {
   className?: string
   idLink?: string
   localLink?: string
   externalLink?: string
   download?: boolean
   children?: React.ReactNode
   color?: Color
   fontSize?: 'small' | 'normal' | 'big' | 'large'
   staticIconSize?: 'small' | 'normal' | 'big' | 'large'
   iconSize?: 'small' | 'normal' | 'big' | 'large'
   height?: string
   barHeight?: string
   background?: 'transparent' | 'glass'
   iconButton?: boolean
   disabled?: boolean
   active?: boolean
   icon?: React.ElementType
   customClick?: (e: React.MouseEvent<HTMLElement>) => void
   staticIcon?: React.ElementType
}

export default function StyledButton({
   className,
   idLink = '',
   localLink = '',
   externalLink = '',
   download = false,
   children,
   color = 'blue',
   fontSize = 'normal',
   iconSize = 'normal',
   staticIconSize = 'normal',
   height = '40px',
   barHeight,
   background = 'transparent',
   iconButton = false,
   disabled = false,
   active = false,
   icon: IconComponent,
   staticIcon: StaticIconComponent,
   customClick,
   ...props
}: StyledButtonProps) {
   const router = useRouter()

   const handleLocalClick = () => {
      const element = document.getElementById(idLink)
      if (element) {
         const scrollPosition = element.offsetTop - 100

         document.body.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
         })
      }
   }

   const handleLocalLinkClick = () => {
      router.push(localLink)
   }

   const handleClick = () => {
      if (idLink !== '') {
         handleLocalClick()
      } else if (localLink != '') {
         handleLocalLinkClick()
      }
   }

   const Content = () => {
      return (
         <>
            {StaticIconComponent ? (
               <StaticIconComponent
                  className={`${styles.icon} ${styles.static} ${
                     IconComponent ? styles.hasicon : ''
                  } ${staticIconSize === 'small' ? styles.small : ''} ${
                     staticIconSize === 'normal' ? styles.normal : ''
                  } ${staticIconSize === 'big' ? styles.big : ''} ${
                     staticIconSize === 'large' ? styles.large : ''
                  }`}
                  style={{ color: `var(--${color}-color)`, pointerEvents: 'none' }}
               />
            ) : null}

            <div
               className={`${styles.text} ${fontSize === 'small' ? styles.small : ''} ${
                  fontSize === 'normal' ? styles.normal : ''
               } ${fontSize === 'big' ? styles.big : ''} ${
                  fontSize === 'large' ? styles.large : ''
               }`}
            >
               {children}
            </div>
            {IconComponent ? (
               <IconComponent
                  className={`${styles.icon} ${iconSize === 'small' ? styles.small : ''} ${
                     iconSize === 'normal' ? styles.normal : ''
                  } ${iconSize === 'big' ? styles.big : ''} ${
                     iconSize === 'large' ? styles.large : ''
                  }`}
                  style={{ color: `var(--${color}-color)` }}
               />
            ) : null}
            {barHeight ? (
               <div
                  className={styles.bar}
                  style={{
                     backgroundImage: `var(--gradient-${color})`,
                     height: barHeight,
                     borderRadius: `calc(${barHeight} / 2)`,
                  }}
               ></div>
            ) : null}
         </>
      )
   }

   return (
      <>
         {externalLink !== '' ? (
            <a
               href={externalLink}
               target="_blank"
               rel={`${download ? 'noopener noreferrer' : ''}`}
               className={`${className} ${styles.button} ${
                  !IconComponent ? styles.noicon : ''
               } ${!StaticIconComponent ? styles.nostaticicon : ''} ${
                  disabled ? styles.disabled : ''
               } ${active ? styles.active : ''} ${
                  background === 'glass' ? styles.glass : ''
               } ${iconButton ? styles.iconbutton : ''}`}
               style={{ height: height }}
            >
               <Content />
            </a>
         ) : (
            <Button
               onClick={customClick ? customClick : handleClick}
               className={`${className} ${styles.button} ${
                  !IconComponent ? styles.noicon : ''
               } ${!StaticIconComponent ? styles.nostaticicon : ''} ${
                  disabled ? styles.disabled : ''
               } ${active ? styles.active : ''} ${
                  background === 'glass' ? styles.glass : null
               } ${iconButton ? styles.iconbutton : ''}`}
               style={{ height: height }}
               {...props}
            >
               <Content />
            </Button>
         )}
      </>
   )
}
