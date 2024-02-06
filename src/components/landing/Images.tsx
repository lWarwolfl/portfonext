import React from 'react'
import styles from '@/styles/landing/Images.module.scss'
import Image from 'next/image'
import hollowplanets from '@/public/image/png/hollowplanets.png'
import planet1 from '@/public/image/svg/planet1.svg'
import planet2 from '@/public/image/svg/planet2.svg'

export default function Images() {
   return (
      <>
         <Image
            src={hollowplanets}
            alt="Hollow Planets"
            priority={true}
            className={styles.hollowplanets}
         />
         <Image src={planet2} alt="Big Planet" priority={true} className={styles.bigplanet} />
         <Image src={planet1} alt="Small Planet" className={styles.smallplanet} />
      </>
   )
}
