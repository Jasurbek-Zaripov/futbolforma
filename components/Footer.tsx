import Image from "./Image";
import Logo from '../public/logo.png';
import Instagram from '../public/icons/instagram.png';
import Telegram from '../public/icons/telegram.png';
import Youtube from '../public/icons/youtube.png';
import Facebook from '../public/icons/facebook.png';


export default function Footer() {
    return (
        <footer className=" h-full mt-5 flex items-center justify-around py-5">
            <div className="flex flex-col justify-center items-center p-2 px-10">
                <div className="flex items-center">
                    <div className="relative h-10 w-10 mr-1"><Image url={Logo} className={'rounded-full'} /></div>
                    <h1 className="text-3xl items-center hidden lg:flex">FutbolForma</h1>
                </div>
                <p className="text-black-100 mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis.</p>
                <div className="flex items-center justify-around w-full">
                    {
                        [Instagram, Telegram, Youtube, Facebook].map(item => <div key={item.src} className="relative min-h-[32px] min-w-[32px]"><Image url={item} /></div>)
                    }
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2>Product</h2>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2>About</h2>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
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
        </footer>
    );
}