import type { NextPage } from 'next';
import useTrans from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar';

export function getStaticProps({ locale }: any) {
  return {
    props: {
      locale,
    },
    revalidate: 10
  };
}

const Home: NextPage = ({ locale }: any) => {
  const router = useRouter();
  const { t: i18n } = useTrans();

  return (
    <>
      <Navbar />
      <div className='mx-auto w-1/2 text-center'>
        <h2 className='text-center'>{locale} {i18n('lang:hello')}</h2>
      </div>
    </>
  );
};

export default Home;
