import StyledCard from '@/components/utils/StyledCard'
import { type EducationInterface } from '@/data/educations'
import styles from '@/styles/landing/Educations.module.scss'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'

interface Props {
   item: EducationInterface
}

export default function Education({ item }: Props) {
   return (
      <StyledCard className={styles.education} variant="smallfull" glow={item.color}>
         <SchoolOutlinedIcon
            style={{
               color: `var(--${item.color}-color)`,
            }}
            className={styles.icon}
         />
         <span className={styles.text}>{item.content}</span>
      </StyledCard>
   )
}
