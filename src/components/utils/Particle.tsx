import styles from '@/styles/utils/Particle.module.scss'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

export default function Particle() {
   const particlesInit = useCallback(async (engine: Engine) => {
      await loadSlim(engine)
   }, [])

   return (
      <Particles
         className={styles.container}
         id="tsparticles"
         init={particlesInit}
         options={{
            fpsLimit: 120,
            background: {
               color: {
                  value: 'transparent',
               },
            },
            particles: {
               color: {
                  value: ['#ffffff'],
               },
               collisions: {
                  enable: true,
               },
               move: {
                  direction: 'none',
                  enable: true,
                  outModes: {
                     default: 'bounce',
                  },
                  random: false,
                  speed: 0.13,
                  straight: false,
               },
               number: {
                  density: {
                     enable: true,
                  },
                  value: 100,
               },
               opacity: {
                  value: 0.8,
               },
               shape: {
                  type: 'circle',
               },
               size: {
                  value: { min: 1.5, max: 2.5 },
               },
            },
         }}
      />
   )
}
