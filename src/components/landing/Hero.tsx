import StyledButton from '@/components/utils/StyledButton'
import styles from '@/styles/landing/Hero.module.scss'

export default function Hero() {
  return (
    <div id="hero" className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.big}>professional</div>

        <div className={styles.small}>
          Front-end <span className={styles.accent}>Developer</span>{' '}
          <span className={styles.note}>(Next.js/React.js)</span>
        </div>

        <div className={styles.links}>
          <StyledButton
            className={styles.link}
            externalLink="/files/resume/en/Resume.pdf"
            download
            background="glass"
            icon="ci:file-download"
            staticIcon="ci:file-document"
            color="blue"
            fontSize="big"
          >
            My resume
          </StyledButton>
        </div>
      </div>
    </div>
  )
}
