import React from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";

type Props = {
	id?: string;
	className?: string;
	images: StaticImageData[];
};

export default function ImageSlider({ id, className, images }: Props) {
	return (
		<Swiper
			id={id}
			centeredSlides={true}
			slidesPerView={1}
			autoplay={{
				delay: 6000,
				disableOnInteraction: false,
			}}
			scrollbar={{
				draggable: true,
			}}
			navigation={true}
			modules={[Autoplay, Scrollbar]}
			className={`swiper image-slider ${className}`}
		>
			{images.map((item, index) => {
				return (
					<SwiperSlide key={index} style={{ backgroundImage: `url("${item.src}")` }} />
				);
			})}
		</Swiper>
	);
}
