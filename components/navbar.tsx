import Image from "next/image";
import Cat from '../public/cat.png';
import { useRouter } from "next/router";
import NextLink from 'next/link';

export default function Navbar({ currentLang }: { currentLang: string; }) {
    const router = useRouter();
    return (
        <div className="bg-slate-300 border-b shadow-2xl text-center">
            {/* <div className="relative top-[15%] w-full h-screen">
                <Image
                    src={Cat}
                    layout='fill'
                    placeholder="blur"
                />
            </div> */}
            <h1>header</h1>
            <div>
                {router.locales?.map(local => (
                    currentLang == local || <div key={local}>
                        <NextLink href={router.asPath} locale={local}>{local}</NextLink>
                    </div>
                ))}
            </div>
        </div>
    );
}