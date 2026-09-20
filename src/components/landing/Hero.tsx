import Terminal from '@/components/utils/Terminal'
import StyledButton from '@/components/utils/StyledButton'
import { hero } from '@/data/hero'
import styles from '@/styles/landing/Hero.module.scss'
import photo from '@public/image/jpg/photo.jpg'
import Image from 'next/image'

export default function Hero() {
  return (
    <div id="hero" className={styles.container}>
      <div className={styles.masthead}>
        <Image
          quality={70}
          placeholder="blur"
          src={photo}
          alt="Sina Kheiri"
          className={styles.avatar}
          width={64}
          height={64}
        />
        <h1 className={styles.name}>{hero.name}</h1>
        <span className={styles.role}>{hero.content}</span>
      </div>

      <div className={styles.grid}>
        <div className={styles.lead}>
          <p className={styles.paragraph}>{hero.lead}</p>

          <div className={styles.links}>
            <StyledButton
              externalLink="https://github.com/lWarwolfl/portfonext"
              background="invert"
              staticIcon="bxl:github"
            >
              Source of this site
            </StyledButton>
            <StyledButton externalLink="/files/Resume.pdf" download staticIcon="ci:file-document">
              Download resume
            </StyledButton>
          </div>

          <dl className={styles.meta}>
            {hero.meta.map((item) => (
              <div className={styles.metarow} key={item.label}>
                <dt className={styles.metakey}>{item.label}</dt>
                <dd className={styles.metavalue}>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Terminal className={styles.terminal} />
      </div>
    </div>
  )
}
