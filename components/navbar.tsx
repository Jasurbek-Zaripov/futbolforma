import { useRouter } from "next/router";
import NextLink from 'next/link';
import Image from "./Image";
import Logo from '../public/logo.png';
import Shopping from '../public/icons/ShoppingCart.png';
import useT from 'next-translate/useTranslation';

export default function Navbar({ currentLang }: { currentLang: string; }) {
    const router = useRouter();
    const { t } = useT();
    return (
        <header className="w-full h-28 sticky top-0 left-0 right-0 flex items-center justify-around mb-12 shadow-sm sm:shadow bg-white z-20 px-[9.5vw]">
            <div className="flex items-center w-1/5">
                <div className="relative h-10 w-10 mr-1"><Image url={Logo} className={'rounded-full'} /></div>
                <h1 className="text-3xl items-center hidden lg:flex font-bold">FutbolForma</h1>
            </div>
            <ul className="list-none hidden sm:flex items-center justify-between w-1/4">
                <li className="transition-all ease-in-out font-semibold hover:font-semibold hover:text-mygreen-100 mr-3">
                    <NextLink href='/' locale={currentLang}><a className={String(router.asPath == '/')}>{t('lang:home')}</a></NextLink>
                </li>
                <li className="transition-all ease-in-out font-semibold hover:font-semibold hover:text-mygreen-100 mr-3">
                    <NextLink href='/page/1' locale={currentLang}><a className={String(router.asPath.startsWith('/page'))}>{t('lang:uniform')}</a></NextLink>
                </li>
                <li className="transition-all ease-in-out font-semibold hover:font-semibold hover:text-mygreen-100 mr-3">
                    <NextLink href='/info' locale={currentLang}><a className={String(router.asPath == '/info')}>{t('lang:info')}</a></NextLink>
                </li>
                <li className="transition-all ease-in-out font-semibold hover:font-semibold hover:text-mygreen-100">
                    <NextLink href='tel:+998 91 590 55 61' locale={currentLang}>{t('lang:contact')}</NextLink>
                </li>
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