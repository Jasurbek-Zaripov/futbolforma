import type { NextPage } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import useTrans from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export function getStaticProps({ locale }: any) {
  return {
    props: {
      locale
    }
  };
}

const Home: NextPage = ({ locale }: any) => {
  const router = useRouter();
  const { t: i18n } = useTrans();

  return (
    <div className='mx-auto w-1/2 text-center'>
      <h2 className='text-center'>{locale} {i18n('lang:hello')}</h2>

    </div>
  );
};

export default Home;
