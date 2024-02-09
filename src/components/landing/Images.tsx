import hollowplanets from '@/public/image/png/hollowplanets.png'
import planet1 from '@/public/image/png/planet1.png'
import planet2 from '@/public/image/png/planet2.png'
import styles from '@/styles/landing/Images.module.scss'
import Image from 'next/image'

export default function Images() {
   return (
      <>
         <Image
            loading="lazy"
            quality={85}
            placeholder="blur"
            src={hollowplanets}
            alt="Hollow Planets"
            className={styles.hollowplanets}
         />
         <Image
            loading="lazy"
            quality={85}
            placeholder="blur"
            src={planet2}
            alt="Big Planet"
            className={styles.bigplanet}
         />
         <Image
            loading="lazy"
            quality={85}
            placeholder="blur"
            src={planet1}
            alt="Small Planet"
            className={styles.smallplanet}
         />
      </>
   )
}
