import StyledCard from '@/components/utils/StyledCard'
import { type LanguageInterface } from '@/data/languages'
import styles from '@/styles/landing/Skills.module.scss'
import { Icon } from '@iconify-icon/react'
import clsx from 'clsx'
import Image from 'next/image'

interface Props {
  item: LanguageInterface
  className?: string
}

export default function Language({ item, className }: Props) {
  return (
    <StyledCard glow={item.color} className={clsx(className, styles.skill)} variant="small">
      <div className={styles.data}>
        <Image
          quality={85}
          placeholder="blur"
          src={item.image}
          alt={item.name}
          className={styles.image}
        />
        <div className={styles.name}>{item.name}</div>
        <Icon
          icon="ci:planet"
          style={{
            color: `var(--${item.color}-color)`,
          }}
          className={styles.icon}
        />
      </div>
      <div className={styles.barcontainer}>
        <div className={styles.percent}>{item.percent}</div>
        <div className={styles.bar}>
          <div
            className={styles.fill}
            style={{
              width: `${item.percent}`,
              backgroundImage: `var(--gradient-${item.color})`,
            }}
          ></div>
        </div>
      </div>
    </StyledCard>
  )
}
