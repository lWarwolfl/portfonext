import StyledCard from '@/components/utils/StyledCard'
import { type EducationInterface } from '@/data/educations'
import styles from '@/styles/landing/Educations.module.scss'
import Image from 'next/image'

interface Props {
   item: EducationInterface
}

export default function Education({ item }: Props) {
   return (
      <StyledCard className={styles.education} variant="smallfull" glow={item.color}>
         {item.content}
      </StyledCard>
   )
}
