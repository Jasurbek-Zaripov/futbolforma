import Navbar from "../../components/Navbar";
import useTranslate from 'next-translate/useTranslation';
import Card from "../../components/Card";
import cat from '../../public/cat.png';
import Footer from "../../components/Footer";
import { getIds, getProp } from "../../service/test";
import Button from "../../components/Button";
import NextLink from 'next/link';

export async function getStaticPaths() {
    const paths = getIds();

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params: { id }, locale }: any) {
    const props = getProp(id);
    props.locale = locale;

    return {
        props,
        revalidate: 60,
    };
}

export default function page({ id, locale }: any) {
    const { t } = useTranslate();
    const { start, end } = { start: id == '1', end: id == '3' };

    return (
        <div>
            <Navbar currentLang={locale} />
            <div className="px-[14vw]">
                <div className="flex items-center justify-start mb-12">
                    <span className="font-medium text-base">{t('lang:home')}</span>
                    <span className="px-2">{'\\'}</span>
                    <span className="text-base text-myblack-40">{t('lang:uniform')}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                    {
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, idx) => <Card formId="1" classname='mx-auto' btnText='Посмотреть' key={idx} img={cat} price={15000000} text={'Мужская спортивная футболка'} />)
                    }
                </div>

                <div className="w-full flex items-center justify-between mt-10 mb-32">
                    <NextLink href={'/page/' + (start ? id : (id - 1))}>
                        <a className={start ? 'pointer-events-none' : ''}>
                            <Button text={'<'} disable={start} />
                        </a>
                    </NextLink>
                    <NextLink href={'/page/' + (end ? id : (id + 1))}>
                        <a className={end ? 'pointer-events-none' : ''}>
                            <Button text={'>'} disable={end} />
                        </a>
                    </NextLink>
                </div>
            </div>
            <Footer />
        </div>
    );
}