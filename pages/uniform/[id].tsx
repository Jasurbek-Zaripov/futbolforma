import Navbar from "../../components/Navbar";
import useTranslate from 'next-translate/useTranslation';
import cat from '../../public/cat.png';
import Footer from "../../components/Footer";
import Image from "../../components/Image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { useState } from "react";
import Button from "../../components/Button";

export async function getStaticPaths() {
    const paths = [{ params: { id: '1' } }];

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params: { id }, locale }: any) {
    const props: any = { id };
    props.locale = locale;

    return {
        props,
        revalidate: 60,
    };
}

export default function uniform({ id, locale }: any) {
    const { t } = useTranslate();
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [show, setShow] = useState('0');
    const body: any = {
        data: {
            formaCode: id
        }
    };

    const sendOrder = async () => {
        body.id = localStorage.getItem('orderId');
        let result: any = await fetch(process.env.NEXT_PUBLIC_API_SHOP, {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(body)
        });
        result.ok && (result = await result.json());
        if (window?.localStorage) body.id = localStorage.setItem('orderId', result?.orderId);
    };

    return (
        <div>
            <Navbar currentLang={locale} />
            <div className="px-[5vw] 2xl:px-[14vw]">
                {/* navigator */}
                <div className="flex items-center justify-start mb-12">
                    <span className="font-medium text-base">{t('lang:home')}</span>
                    <span className="px-2">{'\\'}</span>
                    <span className="text-base font-medium">{t('lang:uniform')}</span>
                    <span className="px-2">{'\\'}</span>
                    <span className="text-base text-myblack-40">{'#' + id}</span>
                </div>
                {/* main */}
                <div className="w-full flex flex-col items-center justify-start 2xl:flex-row 2xl:items-start 2xl:justify-between mb-20">
                    <div className="flex flex-col 2xl:flex-row-reverse items-center justify-between w-full 2xl:mr-3 2xl:w-1/2 pb-5 2xl:pb-0">
                        {/* main */}
                        <Swiper
                            direction="vertical"
                            breakpoints={{
                                2: {
                                    direction: 'horizontal'
                                },
                                1536: {
                                    direction: 'vertical'
                                }
                            }}
                            watchSlidesProgress={true}
                            slidesPerView={1}
                            loop={true}
                            spaceBetween={32}
                            freeMode={true}
                            thumbs={{ swiper: thumbsSwiper?.destroyed ? null : thumbsSwiper }}
                            modules={[FreeMode, Thumbs]}
                            className='2xl:h-[25rem] w-full mb-4 2xl:mb-0 2xl:w-auto'
                        >
                            {
                                [cat, cat, cat, cat].map((img, idx) => (
                                    <SwiperSlide key={'main' + idx}>
                                        <div className="relative min-w-full 2xl:min-w-[27rem] min-h-[25rem] 2xl:min-h-full bg-white rounded-lg overflow-hidden shadow-lg">
                                            <Image url={img} />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        {/* additional */}
                        <Swiper
                            direction="vertical"
                            breakpoints={{
                                2: {
                                    direction: 'horizontal',
                                    slidesPerView: 3
                                },
                                750: {
                                    direction: 'horizontal',
                                    slidesPerView: 4
                                },
                                1024: {
                                    direction: 'horizontal',
                                    slidesPerView: 5
                                },
                                1324: {
                                    direction: 'horizontal',
                                    slidesPerView: 6
                                },
                                1536: {
                                    direction: 'vertical',
                                    slidesPerView: 4
                                }
                            }}
                            onSwiper={setThumbsSwiper}
                            watchSlidesProgress={true}
                            loop={true}
                            grabCursor={true}
                            spaceBetween={30}
                            slidesPerView={4}
                            freeMode={true}
                            modules={[FreeMode, Thumbs]}
                            className="2xl:h-[25rem] w-full 2xl:w-auto"
                        >
                            {
                                [cat, cat, cat, cat].map((img, idx) => (
                                    <SwiperSlide key={'additional' + idx}>
                                        <div className="relative min-w-full 2xl:min-w-[5rem] min-h-[5rem] 2xl:min-h-full bg-white rounded-lg overflow-hidden shadow-lg">
                                            <Image url={img} />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className="w-full 2xl:w-1/2 flex flex-col items-start justify-between">
                        <h1 className="font-semibold text-2xl pb-5">ADICOLOR ESSENTIALS</h1>
                        <p className="text-mygreen-100 pb-5"><span className="font-semibold text-2xl">350 000</span> uzs</p>
                        <p className="pb-5">Страна производства: USE</p>
                        <div className="pb-5 flex flex-col 2xl:flex-row 2xl:items-center w-full"><span>Выберите размеры</span>
                            <div className="flex items-center justify-start flex-grow-[2]">
                                {
                                    ['S', 'M', 'L', 'XL', '2XL'].map((size, id) =>

                                        <label key={size + '' + id} className="items-center  ml-7 grid grid-cols-[1em_auto] gap-2">
                                            <input type="radio" onChange={(event) => { body.data.size = event.target.value; }} name="size" value={size} className={`
                                            appearance-none 
                                            grid place-content-center
                                            bg-white 
                                            border border-mygreen-100 
                                            rounded-full w-5 h-5
                                            before:content-['']
                                            before:w-3 before:h-3 before:rounded-full before:scale-0
                                            before:transition-all before:ease-in-out
                                            before:bg-mygreen-100
                                            checked:before:scale-100
                                            `} />
                                            {size}
                                        </label>
                                    )
                                }
                            </div>
                        </div>
                        <p className="pb-4">Formaga yoqtirgan raqamingiz bilan ism (familiya) yozib berishimizni istasangiz, ma‘lumotlarni kiriting (+50.000 UZS)</p>
                        <div className="mb-6 flex items-center justify-start">
                            <input onKeyUp={(event) => { body.data.text = event.currentTarget.value; }} type="text" className="rounded-l-lg border border-mygreen-40 border-r-0 focus:border-r text-mygreen-100 placeholder:text-mygreen-40 p-2 w-full outline-none focus:border-mygreen-100" placeholder="Forma uchun matn" />
                            <input onKeyUp={(event) => { body.data.number = event.currentTarget.value; }} type="number" className="rounded-r-lg border border-mygreen-40 text-mygreen-100 placeholder:text-mygreen-40 p-2 w-full outline-none focus:border-mygreen-100" placeholder="Forma uchun raqam" />
                        </div>
                        <div className="flex items-center justify-start">
                            <Button text={'Купить'} classname={'mr-8 !shadow-none hover:!shadow-none'} />
                            <span onClick={sendOrder}><Button text={'Добавить в корзинку'} classname={`
                            !shadow-none hover:!shadow-none
                            !bg-white hover:!bg-white
                            !text-mygreen-100 hover:!text-mygreen-60
                            border border-mygreen-100 hover:!border-mygreen-60`} /></span>
                        </div>
                    </div>
                </div>
                {/* infos */}
                <div className="w-full 2xl:w-10/12">
                    <div className="flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-around w-full">
                        {
                            ['Mahsulot haqida', 'Yetkazib berish va to\'lova', 'Yuvish qoidasi', 'Mijozlarimiz fikri'].map((word, idx) =>
                                <span key={idx} className={`
                                transition-all ease-in-out 
                                hover:text-mygreen-100
                                shadow-sm  hover:shadow-md
                                p-3 rounded ` + (show == String(idx) ? 'text-mygreen-100' : '')} role={'button'} onClick={() => setShow('' + idx)}>{word}</span>
                            )
                        }
                    </div>
                    <div className={"rounded-lg border p-6 mt-8 " + (show == '3' ? '' : 'hidden')}></div>
                    <div className={"rounded-lg border p-6 mt-8 " + (show == '2' ? '' : 'hidden')}>
                        <p>Futbol Formada yozuvlar ko'chmaydimi?</p>
                        <p>Har qanday mahsulotni sotib olganda undan uzoq vaqt foydalanish uchun, mahsulotni ishlatish qoidalari bo'ladi. Bizda ham siz uchun tavsiyalar bor.</p>
                        <p className="pb-4">Qoidalarga amal qiling:</p>
                        <ol className="pb-4">

                            <li>1. Formalarni hech qachon kir yuvish mashinasida yuvishga bermang. Qo'lda avaylab yuvish kerak. Kir yuvish mashinasida har qanday rejimda yuvilsa ham yozuvlar tez-tez g'ijimlanishi oqibatida yozuvlarning ko'chishi ehtimoli paydo bo'ladi;</li>
                            <li>2. Futbol formasini qaynoq suvda yuvish mumkin emas. Haddan tashqari qaynoq suvda yuvilganida futbol formasidagi klub homiylarining belgilari yumshab g'ijimlanishi mumkin;</li>
                            <li>3. Furbol formasini muzdek suvda yuvish mumkin emas. Haddan tashqari sovuq suvda yuvilganida futbol formasidagi klub homiylarining belgilari kesila boshlashi mumkin va bu oxir oqibatda ko'chishga olib keladi;</li>
                            <li>4. Futbol formasini yuvganda g'ijimlash va siqish mumkin emas;</li>
                            <li>5. Formani yuvishga berishdan avval uni juda ham kir bo'lishini kutmasdan, har safar futboldan keyin shampunli suvda bir chayib olish tavsiya etiladi;</li>
                            <li>6. Futbol formasini o'rta haroratdagi iliq suvda tog'orachaga solib iloji bo'lsa shampun bilan yengil harakatlar yordamida yuvib olish va chayish kerak. Yuvib bo'lib formani suvini siqib chiqarmasdan, ilgak (veshalka) bilan dorga ilib qo'ying. Suvi o'zi tomib quriydi va siz juda uzoq vaqt formangizni huddi yap-yangidek holatda kiyaverasiz;</li>
                            <li>7. Ushbu tavsiyalarni do'stlaringizga ham yetkazib qo'yish esingizdan chiqmasin.</li>
                        </ol>

                        <p>Endi esa siz bemalol Tailandda ishlab chiqarilgan yuqori sifatli futbol formalariga buyurtma berishingiz mumkin!</p>
                    </div>
                    <div className={"rounded-lg border p-6 mt-8 " + (show == '1' ? '' : 'hidden')}>
                        <p>Onlayn do'konimizdan istalgan jamoaning futbol formasiga buyurtma bering va Toshkent shahri bo'ylab 1 kun, O'zbekiston bo'ylab 4800 ta aholi manzillariga 3 kun ichida siz bergan manzil bo'yicha yetkazib beramiz.</p>
                        <p>To'lovni tovar qo'lingizga yetib borganda amalga oshirasiz.</p>
                        <p className="pb-4">Yetkazib berish narxi sizning manzilingiz bo'yicha hisoblanadi.</p>
                        <p className="pb-4">Demak, o'z-o'zidan ma'lumki bizning onlayn do'kondan istagancha buyurtma berishingiz va bizga ishonishingiz mumkin. Sababi - to'lov oldindan emas! Bu qulaylik siz aziz va ashaddiy futbol muxlislari uchun!</p>
                        <p>Endi esa behavotir saytimizning katalog bo'limiga o'tishingiz va buyurtma berishingiz mumkin.</p>
                    </div>
                    <div className={"rounded-lg border p-6 mt-8 " + (show == '0' ? '' : 'hidden')}>
                        <h1 className="font-semibold pb-4">Ashaddiy muxlislar uchun! Total komfort</h1>
                        <p>100% premium poliester material.</p>
                        <p className="pb-4">Klub emblemasi va ishlab chiqaruvchi logosi premium kashtada tikilgan. Klub homiylarining belgilari esa yuqori texnologiyalar yordamida termopress apparatda bosilgan.
                            Yuqori funksional nafas oladigan materiallar, issiqlik o'tkazuvchan tolalar va maxsus mo'ljallangan shamollatish teshiklarining optimal joylashishi va kombinatsiyasi tufayli badandagi ter faol ravishda so'riladi va keyingi tez bug'lanish uchun mato yuzasiga chiqariladi. Yuzadan esa havoga.
                            Shunday qilib, yuqori jismoniy zo'riqish paytida va hatto eng kuchli issiqlikda ham qulaylik va salqinlik hissi ta'minlanadi.
                            Mato namlikni o'ziga singdirmaydi, shuning uchun o'yin davomida futbol formasining og'irligi oshmaydi.
                            Tailandda ishlab chiqarilgan.</p>
                        <p>Bunday sifatli mahsulot haqida o'qib bo'lgach esa faqatgina tezroq uni qo'lga kiritish haqida o'ylash mumkin. Demak, quyidagi Katalog ustiga bosib, o'zingiz sevgan klub liboslariga buyurtma bering.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}