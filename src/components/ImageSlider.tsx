import React, { useRef, useState } from "react";
import styles from "../styles/StyledCard.module.scss";
import { StaticImageData } from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

type Props = {
	id?: string;
	className?: string;
	images: StaticImageData[];
};

export default function ImageSlider({ id, className, images }: Props) {
	return (
		<Swiper
			id={id}
			spaceBetween={30}
			centeredSlides={true}
			autoplay={{
				delay: 6000,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Autoplay, Pagination]}
			className={`swiper ${className} ${styles.container}`}
		>
			<SwiperSlide>Slide 1</SwiperSlide>
		</Swiper>
	);
}
