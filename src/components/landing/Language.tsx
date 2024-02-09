import StyledCard from '@/components/utils/StyledCard'
import { type LanguageInterface } from '@/data/languages'
import styles from '@/styles/landing/Skills.module.scss'
import LanguageIcon from '@mui/icons-material/Language'
import Image from 'next/image'

interface Props {
   item: LanguageInterface
}

export default function Language({ item }: Props) {
   return (
      <StyledCard glow={item.color} className={styles.skill} variant="small">
         <div className={styles.data}>
            <Image
               loading="lazy"
               quality={85}
               placeholder="blur"
               src={item.image}
               alt={item.name}
               className={styles.image}
            />
            <div className={styles.name}>{item.name}</div>
            <LanguageIcon
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
