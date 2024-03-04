import AnimatedContainer from '@/components/utils/AnimatedContainer'
import StyledButton from '@/components/utils/StyledButton'
import StyledCard from '@/components/utils/StyledCard'
import Title from '@/components/utils/Title'
import { summmaryLinks } from '@/data/links'
import styles from '@/styles/landing/Summary.module.scss'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import photo from '@public/image/jpg/photo.jpg'
import Image from 'next/image'

export default function Summary() {
  return (
    <div id="summary" className={styles.container}>
      <AnimatedContainer>
        <Title title="Unveiling My Story:" description="The Path Less Traveled" />
        <StyledCard move={false} glow="blue" variant="narrowbottom">
          <div className={styles.splitimage}>
            <Image
              quality={85}
              placeholder="blur"
              src={photo}
              alt="My photo"
              className={styles.image}
            />
          </div>

          <div className={styles.splittext}>
            <div className={styles.description}>
              I am <span className={styles.accent}>Sina Kheiri</span> and As a{' '}
              <span className={styles.bold}>Next.js/React.js developer</span> with{' '}
              <span className={styles.bold}>4 years of experience</span> in{' '}
              <span className={styles.bold}>frontend development</span> I possess a diverse skill
              set of <span className={styles.bold}>25+ technical abilities</span>.{' '}
              <div className={styles.break}></div> With a strong focus on delivering{' '}
              <span className={styles.bold}>high-quality code</span> and{' '}
              <span className={styles.bold}>exceptional user interfaces</span>, I am committed to
              staying <span className={styles.bold}>up-to-date</span> with the latest industry
              trends and best practices.
              <span className={styles.extra}>
                <div className={styles.break}></div>I also have the knowledge and skills for UI
                Design and I have created{' '}
                <span className={styles.bold}>
                  User personas, Wireframes, High fidelity projects
                </span>{' '}
                and <span className={styles.bold}>Prototypes</span> using{' '}
                <span className={styles.bold}>Figma and Adobe XD</span>.
              </span>
            </div>
          </div>

          <div className={styles.extratext}>
            <div className={styles.break}></div>I also have the knowledge and skills for UI Design
            and I have created{' '}
            <span className={styles.bold}>User personas, Wireframes, High fidelity projects</span>{' '}
            and <span className={styles.bold}>Prototypes</span> using{' '}
            <span className={styles.bold}>Figma and Adobe XD</span>.
          </div>

          <div className={styles.links}>
            {summmaryLinks.map((item, index) => (
              <StyledButton
                key={index}
                className={styles.link}
                externalLink={item.link}
                icon={KeyboardArrowRightRoundedIcon}
                staticIcon={item.icon}
                iconSize="large"
                staticIconSize="big"
                color={item.color}
                background="glass"
                height="48px"
                barHeight="5px"
              >
                {item.text}
              </StyledButton>
            ))}
          </div>
        </StyledCard>
      </AnimatedContainer>
    </div>
  )
}
