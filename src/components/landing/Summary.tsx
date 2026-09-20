import StyledButton from '@/components/utils/StyledButton'
import StyledCard from '@/components/utils/StyledCard'
import Title from '@/components/utils/Title'
import { summary } from '@/data/summary'
import styles from '@/styles/landing/Summary.module.scss'
import Image from 'next/image'

export default function Summary() {
  return (
    <div id="summary" className={`section ${styles.container}`}>
      <Title index="01" title="My Story" description="A Pleasant Path" />

      <StyledCard className={styles.panel} move={false}>
        <div className={styles.body}>
          <div className={styles.portrait}>
            <Image
              quality={60}
              placeholder="blur"
              src={summary.image}
              alt="Sina Kheiri"
              className={styles.image}
            />
          </div>

          <div className={styles.text}>
            <div className={styles.description}>{summary.content}</div>

            <div className={styles.links}>
              {summary.links.map((item) => (
                <StyledButton
                  key={item.link}
                  externalLink={item.link}
                  icon="ci:chevron-right"
                  staticIcon={item.icon}
                  background="glass"
                >
                  {item.text}
                </StyledButton>
              ))}
            </div>
          </div>
        </div>
      </StyledCard>
    </div>
  )
}
