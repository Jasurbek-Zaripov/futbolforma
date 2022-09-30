import { StaticImageData } from "next/image";
import Button from "./Button";
import Image from "./Image";
import NextLink from 'next/link';

interface ICard {
    img: StaticImageData;
    text: string;
    price: number;
    btnText: string;
    classname?: string;
    formId: string;
}

export default function Card({ img, text, price, btnText, classname = '', formId }: ICard) {
    const addSpace = (num: number) => [...String(num)].reverse().map((num, i) => ((i + 1) % 3) ? num : ' ' + num).reverse().join('').trim();

    return (
        <div className={"rounded-lg flex flex-col overflow-hidden max-w-[319px] justify-center items-center bg-white shadow-[0px_12px_32px_2px_rgba(144,149,155,0.16)] " + classname}>
            <div className="relative w-full min-h-[318px]">
                <Image url={img} />
            </div>
            <div className="w-full px-4 h-full pb-6 flex flex-col items-center justify-between">
                <p className="text-myblack-100 text-lg mt-4 w-full font-semibold">{text}</p>
                <p className="text-[#F82710] mt-3  w-full font-bold text-2xl">{addSpace(price)} uzs</p>
                <NextLink href={{ pathname: '/uniform/[id]', query: { id: formId } }}>
                    <a><Button classname="mt-6 w-full" text={btnText} /></a>
                </NextLink>
            </div>
        </div>
    );
}