export type Color =
	| "purple"
	| "green"
	| "blue"
	| "aqua"
	| "white"
	| "pink"
	| "yellow"
	| "red"
	| "orange";

export type AnimationSpeed = "fast" | "medium" | "slow" | "veryslow";

export type SkillType = "code" | "design" | "other";

export type StaticImageData = {
	src: string;
	height: number;
	width: number;
	blurDataURL?: string;
};
