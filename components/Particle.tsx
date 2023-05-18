import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import styles from "../styles/Particle.module.scss";

export default function Particle() {
	const particlesInit = useCallback(async (engine: Engine) => {
		// you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {},
		[]
	);
	return (
		<Particles
			id="tsparticles"
			className={styles.container}
			canvasClassName={styles.canvas}
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				autoPlay: true,
				background: {
					color: {
						value: "transparent",
					},
				},
				fullScreen: {
					enable: false,
				},
				fpsLimit: 120,
				particles: {
					color: {
						value: ["#00fbff", "#B721FF", "#40c463"],
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: false,
						speed: 0.1,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 80,
					},
					opacity: {
						value: 0.9,
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 1.5, max: 2.5 },
						anim: {
							enable: true,
							speed: 2,
							size_min: 1,
							sync: false,
						},
					},
				},
			}}
		/>
	);
}
