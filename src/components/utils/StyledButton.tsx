import styles from '@/styles/utils/StyledButton.module.scss'
import { useLenis } from '@/utils/lenis'
import type { ColorType } from '@/utils/types'
import { Icon } from '@iconify-icon/react'
import { Button, type ButtonProps } from '@mui/material'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

export interface StyledButtonProps extends Omit<ButtonProps, 'color'> {
  idLink?: string
  localLink?: string
  externalLink?: string
  download?: boolean
  color?: ColorType
  fontSize?: 'small' | 'normal' | 'big' | 'large'
  barHeight?: string
  background?: 'transparent' | 'glass' | 'solid' | 'invert'
  iconButton?: boolean
  icon?: string
  staticIcon?: string
  active?: boolean
  customClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export default function StyledButton({
  idLink = '',
  localLink = '',
  externalLink = '',
  download = false,
  children,
  color = 'blue',
  fontSize = 'normal',
  barHeight,
  background = 'transparent',
  iconButton = false,
  icon,
  staticIcon,
  active = false,
  customClick,
  className,
  ...props
}: StyledButtonProps) {
  const router = useRouter()
  const { lenis } = useLenis()

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (customClick) {
      customClick(e)
    } else if (idLink) {
      const element = document.getElementById(idLink)
      if (element) lenis?.scrollTo(element.offsetTop - 100)
    } else if (localLink) {
      router.push(localLink)
    }
  }

  const iconClasses = clsx(styles[fontSize])
  const textClasses = clsx(styles.text, styles[fontSize])
  const barStyles = {
    backgroundImage: `var(--gradient-${color})`,
    height: barHeight,
    borderRadius: `calc(${barHeight} / 2)`,
  }

  const renderContent = () => (
    <>
      {staticIcon && (
        <Icon
          icon={staticIcon}
          className={clsx(iconClasses, styles.staticicon)}
          style={{ color: `var(--${color}-color)` }}
        />
      )}
      <div className={textClasses}>{children}</div>
      {icon && (
        <Icon
          icon={icon}
          style={{ color: `var(--${color}-color)` }}
          className={clsx(iconClasses, styles.icon)}
        />
      )}
      {barHeight && <div className={styles.bar} style={barStyles}></div>}
    </>
  )

  const buttonClass = clsx(className, styles.button, {
    [`${styles.glass}`]: background === 'glass',
    [`${styles.solid}`]: background === 'solid',
    [`${styles.invert}`]: background === 'invert',
    [`${styles.iconbutton}`]: iconButton,
    [`${styles.disabled}`]: props.disabled,
    [`${styles.active}`]: active,
    [`${styles.hasbar}`]: barHeight,
  })

  if (externalLink) {
    return (
      <a
        href={externalLink}
        target="_blank"
        rel={download ? 'noopener noreferrer' : undefined}
        className={clsx(buttonClass, { [`${styles['singleicon']}`]: !icon })}
      >
        {renderContent()}
      </a>
    )
  }

  return (
    <Button
      onClick={handleClick}
      className={clsx(buttonClass, { [`${styles['singleicon']}`]: !icon })}
      {...props}
    >
      {renderContent()}
    </Button>
  )
}