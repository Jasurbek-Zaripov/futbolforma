import type { NextPage } from 'next';
import useTrans from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { useState } from 'react';
import { nextEntpoint } from '../data/data';
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

  const [cardPan, setCardPan] = useState('');
  const onPan = (event: any) => {
    let { value = '' } = event.target;
    if (value.length > 19) return;
    value = value.replace(/\s+/g, '').match(/..../g).join(' ');
    setCardPan(value);
  };

  const [cardExpiry, setCardExpire] = useState('');
  const onExpiry = (event: any) => {
    const { value = '' } = event.target;
    if (value.length > 5) return;
    setCardExpire(`${value.slice(0, 2)}/${value.slice(2)}`);
  };

  const cardCreate = async () => {
    const result = await fetch(nextEntpoint,);
  };

  return (
    <>
      <div className='mx-auto w-1/2 text-center'>
        <h2 className='text-center'>{locale} {i18n('lang:hello')}</h2><br />
        <div>
          <input type="text" value={cardPan} onChange={onPan} placeholder="xxxx xxxx xxxx xxxx" /><br />
          <input type="text" value={cardExpiry} onChange={onExpiry} placeholder="mm/yy" /><br />
          <button onClick={cardCreate}>Send</button>
        </div>
      </div>
      <div>
        {router.locales?.map((local, i) =>
          <>
            <NextLink href={router.asPath} locale={local} key={i} />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
