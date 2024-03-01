import StyledCard from '@/components/utils/StyledCard'
import { type SkillCategoryInterface, type SkillInterface } from '@/data/skills'
import styles from '@/styles/landing/Skills.module.scss'
import BoltRoundedIcon from '@mui/icons-material/BoltRounded'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded'
import FormatPaintOutlinedIcon from '@mui/icons-material/FormatPaintOutlined'
import Image from 'next/image'

interface Props {
  item: SkillInterface
  category: SkillCategoryInterface
}

export default function Skill({ item, category }: Props) {
  return (
    <StyledCard glow={category.color} className={styles.skill} variant="small">
      <div className={styles.data}>
        <Image
          quality={85}
          placeholder="blur"
          src={item.image}
          alt={item.name}
          className={styles.image}
        />
        <div className={styles.name}>{item.name}</div>
        {category.name === 'code' && (
          <CodeRoundedIcon
            style={{
              color: `var(--${category.color}-color)`,
            }}
            className={styles.icon}
          />
        )}
        {category.name === 'uiframework' && (
          <FormatPaintOutlinedIcon
            style={{
              color: `var(--${category.color}-color)`,
            }}
            className={styles.icon}
          />
        )}
        {category.name === 'design' && (
          <DesignServicesRoundedIcon
            style={{
              color: `var(--${category.color}-color)`,
            }}
            className={styles.icon}
          />
        )}
        {category.name === 'other' && (
          <BoltRoundedIcon
            style={{
              color: `var(--${category.color}-color)`,
            }}
            className={styles.icon}
          />
        )}
      </div>
      <div className={styles.barcontainer}>
        <div className={styles.percent}>{item.percent}</div>
        <div className={styles.bar}>
          <div
            className={styles.fill}
            style={{
              width: `${item.percent}`,
              backgroundImage: `var(--gradient-${category.color})`,
            }}
          ></div>
        </div>
      </div>
    </StyledCard>
  )
}
