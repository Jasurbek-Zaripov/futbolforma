
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
                longSwipesMs={0}
                loopPreventsSlide={false}
                longSwipes={true}
                longSwipesRatio={0}
                threshold={0}
                slideToClickedSlide={true}
                speed={80000}
                loop={true}
                spaceBetween={32}
                grabCursor={true}
                modules={[Autoplay, FreeMode]}
                freeMode={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                className='w-full'
            >
                {
                    images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <div className='z-0 relative top-0 left-0 h-[40rem] overflow-hidden rounded-md'>
                                <Image url={img} />
                                <div className="z-10 w-2/5">
                                    <h3>2022-2023 yilgi yangi mavsum futbol formalarini o'zbekiston bo'ylab yetkazib beramiz</h3>
                                    <p className="text-black-60">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, commodi.</p>
                                    <Button text="Подробнее ->" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}