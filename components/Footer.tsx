import Image from "./Image";
import Logo from '../public/logo.png';
import Instagram from '../public/icons/instagram.png';
import Telegram from '../public/icons/telegram.png';
import Youtube from '../public/icons/youtube.png';
import Facebook from '../public/icons/facebook.png';


export default function Footer() {
    return (
        <footer className="mt-40 w-full h-full bg-[#f8f6f6] text-center">
            <div className="h-full w-1/2 mx-auto">
                <div className="flex flex-col justify-center items-center p-2 px-10">
                    <div className="flex items-center">
                        <div className="relative h-10 w-10 mr-1"><Image url={Logo} className={'rounded-full'} /></div>
                        <h1 className="text-3xl items-center flex font-bold">FutbolForma</h1>
                    </div>
                    <p className="mt-3">FUTBOL FORMA - Tailand davlatida ishlab chiqarilgan futbol formalarini O'zbekiston bo'ylab yetkazib beruvchi onlayn do'kon</p>
                    <p className="mt-3">Guvohnoma №1709136</p>
                    <div className="flex items-center mt-3">
                        {
                            [Instagram, Telegram, Youtube, Facebook].map(item =>
                                <div key={item.src} className="relative min-h-[32px] min-w-[32px] ml-2"><Image url={item} /></div>
                            )
                        }
                    </div>
                </div>
            </div>
            <hr className="bg-white py-[0.0625rem]" />
            <div className="py-2 2xl:py-4">{new Date().toLocaleDateString().split('.').join(' ')}</div>
        </footer>
    );
}