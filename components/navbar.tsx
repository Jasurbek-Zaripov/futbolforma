import Image from "next/image";
import Cat from '../public/cat.png';

export default function Navbar() {

    return (
        <div className="bg-slate-300 border-b shadow-2xl text-center">
            <div className="relative top-[15%] w-full h-screen">
                <Image
                    src={Cat}
                    layout='fill'
                    placeholder="blur"
                />
            </div>
            <h1>header</h1>
        </div>
    );
}