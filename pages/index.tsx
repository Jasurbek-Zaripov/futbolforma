import type { NextPage } from 'next';
import Carusel from '../components/Carusel';
import Navbar from '../components/Navbar';
import cat from '../public/cat.png';
import girl from '../public/Anime Girl Cars 4K Wallpaper 69.jpg';
import sun from '../public/Чёрное солнце __КрипиПаста.jpg';
import Club from '../components/Club';
import Footer from '../components/Footer';
import Header from '../components/Head';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export function getStaticProps({ locale }: any) { //send props to Home
  return {
    props: {
      locale,
    }
  };
}

const Home: NextPage = ({ locale }: any) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className='overflow-x-hidden'>
      <Header title={t('lang:home')} desc={t('lang:homeDesc')} url={router.route} imgUrl={cat.src} keyword={'forma, futbol, futbol forma'} key={'Header'} />
      <Navbar currentLang={locale} key={'Navbar'} />

      <div className='px-9'>
        <Carusel images={[cat, girl, sun]} key={'Carusel'} />
        <div className='mt-5 w-[120%] -ml-[10%]'><Club images={[cat, girl, sun]} key={'Club'} /></div>
        <div className='px-5 mt-40 grid  grid-cols-1 2xl:grid-cols-2 gap-5'>
          {
            [
              `Komandangiz orqali yoki "Forma" bo'limi orqali formangizni tanlang`,
              `Hohishga qarab forma orqasiga Ism va raqam yozdiring`,
              `Undan so'ng korzinkaga solib tanlashda davom eting yoki shu yerda sotib oling!`,
              `Biz forma tayyor bo'lganida siz bilan bog'lanamiz!`
            ].map((text, idx) =>
              <div className='border border-mygreen-100 p-6 rounded-lg h-full' key={idx}>
                <p className='font-semibold text-mygreen-100'>Etap {idx + 1}</p>
                <p>{text}</p>
              </div>

            )
          }
        </div>
      </div>
      <Footer key={'Footer'} />
    </div>
  );
};

export default Home;
