import type { NextPage } from 'next';
import useTrans from 'next-translate/useTranslation';
import NextLink from 'next/link';
import Carusel from '../components/Carusel';
import Navbar from '../components/Navbar';
import cat from '../public/cat.png';
import girl from '../public/Anime Girl Cars 4K Wallpaper 69.jpg';
import sun from '../public/Чёрное солнце __КрипиПаста.jpg';
import Club from '../components/Club';
import Footer from '../components/Footer';


export function getStaticProps({ locale }: any) { //send props to Home
  return {
    props: {
      locale,
    },
    revalidate: 60
  };
}

const Home: NextPage = ({ locale }: any) => {
  const { t: i18n } = useTrans();

  return (
    <div>
      <Navbar currentLang={locale} />
      <div className='mx-auto w-1/2 text-center'>
        <h2 className='text-center'>{locale} {i18n('lang:hello')}</h2><br />
        <div><NextLink href="/" locale={locale}>{'<- HOME'}</NextLink></div>
        <div><NextLink href="/payme" locale={locale}>{'PAYME ->'}</NextLink></div>
      </div>
      <Carusel images={[cat, girl, sun]} />
      <h2 className='my-3'>Выберите свою любимую команду</h2>
      <Club images={[cat, girl, sun]} />
      <hr />
      <Footer />
    </div>
  );
};

export default Home;
