import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useTranslation from "next-translate/useTranslation";
import Button from "../components/Button";
import { useState } from "react";
import { ICard, IShop } from "../types/types";

export const getServerSideProps = ({ locale, req }: any) => {
    const order: ICard[] = JSON.parse(req.cookies.cards);
    // fomaCode orqali price olinadi 

    const totalSum = order.reduce((acc, obj) => {
        obj.price ??= 135000 + (obj.text || obj.number ? 50000 : 0);
        return acc + (obj.count * obj.price);
    }, 0);
    return {
        props: { locale, order, totalSum }
    };
};

export default function Shop({ locale, order: $cards, totalSum }: IShop) {
    const { t } = useTranslation();
    const [order, setOrder] = useState($cards);
    const [sum, setsum] = useState(totalSum);
    const Sum = () => {
        const total = order.reduce((acc, card) => acc + (card.count * (card.price || 0)), 0);
        setsum(total);
    };
    const increment = (idx: number) => { order[idx].count++; setOrder([...order]); Sum(); setCookise(); };
    const decrement = (idx: number) => { order[idx].count--; setOrder([...order]); Sum(); setCookise(); };
    function setCookise() {
        const threeDay = 3 * 24 * 60 * 60 * 1000;
        const $cookies = [
            'cards=',
            'expires=' + (new Date(Date.now() + threeDay).toUTCString())
        ];
        $cookies[0] += JSON.stringify(order);
        document.cookie = $cookies.join(';');
    };
    return (
        <div>
            <Navbar currentLang={locale} />
            <div className="px-[14vw] min-h-screen">
                <div className="flex items-start justify-between">
                    {/* navigator */}
                    <div className="flex items-center justify-start mb-12">
                        <span className="font-medium text-base">{t('lang:home')}</span>
                        <span className="px-2">{'\\'}</span>
                        <span className="text-base text-myblack-40">{t('lang:shop')}</span>
                    </div>
                    <p className="font-semibold text-mygreen-100">Итого: {sum}</p>
                    <div style={{ zoom: 0.7 }}>
                        <Button text={'Оформить заказ'} />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 w-3/4">
                    {
                        order.map((card, idx) => {
                            return (<div key={idx} className="relative top-0 left-0 transition-shadow shadow-md rounded-lg p-4 flex items-center justify-between border-t">
                                <div>
                                    <p>forma ID: "{card.formaCode}"</p>
                                    <p>Pozitsiyasa raqami: "{card.number}"</p>
                                    <p>Forma uchun text: "{card.text}"</p>
                                    <p>Forma o'lchami: "{card.size}"</p>
                                    <p>narxi: "{card.price}"</p>
                                </div>
                                <div className="absolute right-4 bottom-4 flex items-center justify-center" style={{ zoom: 0.5 }}>
                                    <span onClick={event => decrement(idx)}><Button text={'-'} classname="rounded-r-none" disable={+card.count <= 1} /></span>
                                    <Button text={card.count} classname="rounded-none mx-[1px]" disable={true} />
                                    <span onClick={event => increment(idx)}><Button text={'+'} classname="rounded-l-none" disable={+card.count >= 99} /></span>
                                </div>
                                <span className="absolute right-4 top-2 font-semibold transition-colors text-red-600 drop-shadow-lg" role={'button'}>X</span>
                            </div>);
                        }
                        )
                    }
                </div>

            </div>
            <Footer />
        </div>
    );
}