
import { StaticImageData } from "next/image";
import Button from "./Button";
import Image from "./Image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';

export default function Carusel({ images }: { images: StaticImageData[]; }) {

    return (
        <>
            <Swiper
                centeredSlides={true}
                slidesPerView={1}
                breakpoints={{
                    200: { slidesPerView: 1 },
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                    1280: { slidesPerView: 1 },
                    1536: { slidesPerView: 1 }
                }}
                longSwipesMs={0}
                loopPreventsSlide={false}
                longSwipes={true}
                longSwipesRatio={0}
                threshold={0}
                slideToClickedSlide={true}
                speed={1000}
                loop={true}
                spaceBetween={10}
                modules={[Autoplay, FreeMode]}
                freeMode={true}
                autoplay={{ delay: 2500, disableOnInteraction: false, reverseDirection: true }}
                className='w-full h-[40rem] rounded-lg relative top-0 left-0 right-0'
            >
                <div className="z-10 w-2/5 absolute top-0 left-10 pt-[10%]">
                    <h3 className="text-white font-bold text-4xl mb-3">2022-2023 yilgi yangi mavsum futbol formalarini o'zbekiston bo'ylab yetkazib beramiz</h3>
                    <Button text="Подробнее >" />
                </div>
                {
                    images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <div className='z-0 relative top-0 left-0 h-full overflow-hidden rounded'>
                                <Image url={img} />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}