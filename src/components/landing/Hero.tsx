import Terminal from '@/components/utils/Terminal'
import StyledButton from '@/components/utils/StyledButton'
import { hero } from '@/data/hero'
import styles from '@/styles/landing/Hero.module.scss'
import photo from '@public/image/jpg/photo.jpg'
import Image from 'next/image'

export default function Hero() {
  return (
    <div id="hero" className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.identity}>
          <div className={styles.masthead} data-reveal>
            <Image
              quality={70}
              placeholder="blur"
              src={photo}
              alt="Sina Kheiri"
              className={styles.avatar}
              width={128}
              height={128}
            />

            <div className={styles.headline}>
              <h1 className={styles.name}>{hero.name}</h1>
              <span className={styles.role}>{hero.content}</span>
            </div>
          </div>

          <p className={styles.paragraph} data-reveal>
            {hero.lead}
          </p>

          <div className={styles.links} data-reveal>
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
        </div>

        <div className={styles.terminal} data-reveal>
          <Terminal />
        </div>
      </div>
    </div>
  )
}
