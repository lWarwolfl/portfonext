import { useLenis } from '@/lib/lenis'
import type { ColorType } from '@/lib/types'
import styles from '@/styles/utils/StyledButton.module.scss'
import { Icon } from '@iconify-icon/react'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

export interface StyledButtonProps {
  idLink?: string
  localLink?: string
  externalLink?: string
  download?: boolean
  color?: ColorType
  background?: 'transparent' | 'glass' | 'solid' | 'invert'
  iconButton?: boolean
  icon?: string
  staticIcon?: string
  active?: boolean
  customClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  children?: React.ReactNode
}

export default function StyledButton({
  idLink = '',
  localLink = '',
  externalLink = '',
  download = false,
  children,
  color = 'blue',
  background = 'transparent',
  iconButton = false,
  icon,
  staticIcon,
  active = false,
  customClick,
  className,
  disabled,
  type = 'button',
  ...props
}: StyledButtonProps) {
  const router = useRouter()
  const { lenis } = useLenis()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (customClick) {
      customClick(e)
    } else if (idLink) {
      const element = document.getElementById(idLink)
      if (element) lenis?.scrollTo(element.offsetTop - 100)
    } else if (localLink) {
      router.push(localLink)
    }
  }

  const buttonClass = clsx(className, styles.button, {
    [`${styles.glass}`]: background === 'glass',
    [`${styles.solid}`]: background === 'solid',
    [`${styles.invert}`]: background === 'invert',
    [`${styles.iconbutton}`]: iconButton,
    [`${styles.disabled}`]: disabled,
    [`${styles.active}`]: active,
  })

  const iconStyle = background === 'invert' ? undefined : { color: `var(--${color}-color)` }

  const content = (
    <>
      {staticIcon && <Icon icon={staticIcon} className={styles.staticicon} style={iconStyle} />}
      <div className={styles.text}>{children}</div>
      {icon && <Icon icon={icon} className={styles.icon} style={iconStyle} />}
    </>
  )

  if (externalLink) {
    return (
      <a
        href={externalLink}
        target="_blank"
        rel={download ? 'noopener noreferrer' : 'noreferrer'}
        className={buttonClass}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      onClick={handleClick}
      className={buttonClass}
      disabled={disabled}
      type={type}
      {...props}
    >
      {content}
    </button>
  )
}
