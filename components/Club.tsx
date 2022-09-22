
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
                slidesPerView={6}
                breakpoints={{
                    200: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 5 },
                    1536: { slidesPerView: 6 }
                }}
                longSwipesMs={0}
                loopPreventsSlide={false}
                longSwipes={true}
                longSwipesRatio={0}
                threshold={0}
                slideToClickedSlide={true}
                loop={true}
                spaceBetween={32}
                speed={3500}
                freeMode={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                modules={[Autoplay, FreeMode]}
                className='h-52 w-full'
            >
                {
                    images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="relative min-w-[200px] min-h-[200px] bg-white rounded-lg overflow-hidden shadow-lg">
                                <Image url={img} />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};