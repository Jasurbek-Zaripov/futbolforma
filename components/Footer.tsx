import Image from "./Image";
import Logo from '../public/logo.png';
import Instagram from '../public/icons/instagram.png';
import Telegram from '../public/icons/telegram.png';
import Youtube from '../public/icons/youtube.png';
import Facebook from '../public/icons/facebook.png';


export default function Footer() {
    return (
        <footer className="mt-40 w-full h-full bg-[#f8f6f6]">
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 pt-20 pb-12">
                <div className="flex flex-col justify-center items-center p-2 px-10">
                    <div className="flex items-center">
                        <div className="relative h-10 w-10 mr-1"><Image url={Logo} className={'rounded-full'} /></div>
                        <h1 className="text-3xl items-center flex font-bold">FutbolForma</h1>
                    </div>
                    <div className="flex items-center justify-around w-full mt-3">
                        {
                            [Instagram, Telegram, Youtube, Facebook].map(item => <div key={item.src} className="relative min-h-[32px] min-w-[32px]"><Image url={item} /></div>)
                        }
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2>Contact</h2>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2>We accept payment</h2>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
            </div>
            <hr className="bg-white py-[0.0625rem]" />
            <div className="py-8"></div>
        </footer>
    );
}