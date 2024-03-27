import ImageLoadingTracker from '@/lib/loading/ImageLoadingTracker'
import styles from '@/styles/landing/Images.module.scss'
import hollowplanets from '@public/image/png/hollowplanets.png'
import planet1 from '@public/image/svg/planet1.svg'
import planet2 from '@public/image/svg/planet2.svg'

export default function Images() {
  return (
    <>
      <ImageLoadingTracker
        quality={85}
        placeholder="empty"
        src={hollowplanets}
        alt="Hollow Planets"
        className={styles.hollowplanets}
        priority
      />
      <ImageLoadingTracker src={planet2} alt="Big Planet" className={styles.bigplanet} priority />
      <ImageLoadingTracker
        src={planet1}
        alt="Small Planet"
        className={styles.smallplanet}
        priority
      />
    </>
  )
}
