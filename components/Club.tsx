
import { StaticImageData } from "next/image";
import Image from "./Image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';

export default function Club({ images }: { images: StaticImageData[]; }) {

    return (
        <>
            <Swiper
                centeredSlides={true}
                slidesPerView={7}
                longSwipesMs={0}
                loopPreventsSlide={false}
                longSwipes={true}
                longSwipesRatio={0}
                threshold={0}
                slideToClickedSlide={true}
                loop={true}
                spaceBetween={32}
                grabCursor={true}
                speed={3500}
                freeMode={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                modules={[Autoplay, FreeMode]}
                className='h-52 w-full ease-linear'
            >
                {
                    images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="relative min-w-[200px] min-h-[200px] rounded-lg overflow-hidden shadow-md">
                                <Image url={img} />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};