import StyledButton from '@/components/utils/StyledButton'
import { hero } from '@/data/hero'
import styles from '@/styles/landing/Hero.module.scss'

export default function Hero() {
  return (
    <div id="hero" className={styles.container}>
      <h1 className={styles.name}>{hero.name}</h1>

      <div className={styles.role}>{hero.content}</div>

      <div className={styles.grid}>
        <div className={styles.lead}>
          <p className={styles.paragraph}>{hero.lead}</p>

          <div className={styles.links}>
            <StyledButton
              externalLink="https://github.com/lWarwolfl/portfonext"
              background="glass"
              staticIcon="ci:code"
              icon="ci:chevron-right"
            >
              Source of this site
            </StyledButton>
          </div>
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
    </div>
  )
}
