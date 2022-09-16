import { useRouter } from "next/router";
import NextLink from 'next/link';
import Image from "./Image";
import Logo from '../public/logo.png';
import Shopping from '../public/icons/ShoppingCart.png';
import Button from "./Button";

export default function Navbar({ currentLang }: { currentLang: string; }) {
    const router = useRouter();
    return (
        <header className="w-full h-28 sticky top-0 left-0 right-0 flex items-center justify-around mb-12 shadow-sm sm:shadow bg-white z-20">
            <div className="flex items-center w-1/5">
                <div className="relative h-10 w-10 mr-1"><Image url={Logo} className={'rounded-full'} /></div>
                <h1 className="text-3xl items-center hidden lg:flex">FutbolForma</h1>
            </div>
            <ul className="list-none hidden sm:flex items-center justify-between w-1/4">
                <li className="hover:text-green-100 mr-3"><Button text="HOME" /></li>
                <li className="hover:text-green-100 mr-3">Product</li>
                <li className="hover:text-green-100 mr-3">About</li>
                <li className="hover:text-green-100">Contact</li>
            </ul>
            <div className="flex items-center justify-end  w-1/2 sm:w-1/5">
                {router.locales?.map(local => currentLang == local ||
                    <NextLink href={router.asPath} locale={local} key={local}>
                        <a className="hidden sm:inline shadow-sm p-1 rounded px-2">{local}</a>
                    </NextLink>
                )}

                <div className="relative h-6 w-6 mr-5 sm:mr-0"><Image url={Shopping} /></div>
            </div>
        </header>
    );
}