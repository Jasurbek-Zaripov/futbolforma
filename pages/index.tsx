import type { NextPage } from 'next';
import Carusel from '../components/Carusel';
import Navbar from '../components/Navbar';
import cat from '../public/cat.png';
import girl from '../public/Anime Girl Cars 4K Wallpaper 69.jpg';
import sun from '../public/Чёрное солнце __КрипиПаста.jpg';
import Club from '../components/Club';
import Footer from '../components/Footer';
import Card from '../components/Card';


export function getStaticProps({ locale }: any) { //send props to Home
  return {
    props: {
      locale,
    },
    revalidate: 60
  };
}

const Home: NextPage = ({ locale }: any) => {

  return (
    <div>
      <Navbar currentLang={locale} />

      <Carusel images={[cat, girl, sun]} />

      <h2 className=' text-myblack-100 text-4xl font-medium mt-20 mb-12 pl-64'>Выберите свою любимую команду</h2>
      <Club images={[cat, girl, sun]} />

      <h2 className='font-medium text-4xl text-myblack-100 mt-20 mb-12 pl-64'>Cards </h2>
      <div className='w-10/12 flex items-center justify-center mx-auto'>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7 w-10/12">
          {
            [1, 1, 1, 1, 1, 1, 1, 1].map((item, idx) => <Card formId='1' classname='mx-auto' btnText='Посмотреть' key={idx} img={cat} price={15000000} text={'Мужская спортивная футболка'} />)
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
