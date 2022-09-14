import type { NextPage } from 'next';
import useTrans from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { useRef, useState } from 'react';
import Navbar from '../components/navbar';
import { v4 } from 'uuid';

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
    const { value = '' } = event.target;
    if (value.length > 19) return;
    const withSpace = value.replace(/[^0-9]/g, '').match(/(....)|.+/g)?.join(' ');

    setCardPan(withSpace || value);
  };

  const [cardExpiry, setCardExpire] = useState('');
  const onExpiry = (event: any) => {
    const { value = '' } = event.target;
    if (value.length > 5) return;
    const withSlash = value.replace(/[^0-9]/g, '').match(/(..)|.+/g)?.join('/');

    setCardExpire(withSlash || value);
  };
  let createCardResult: any;
  const cardCreate = async () => {
    try {
      let result = await fetch(process.env.NEXT_PUBLIC_API, { method: 'post', body: JSON.stringify({ pan: cardPan, expiry: cardExpiry, method: 'card.create' }) });
      result = await result.json();
      createCardResult = result;
      console.log(result);

    } catch (error) { console.error(error); }
  };

  let smsCodeResult: any;
  const smsCode = useRef(null);
  const sendSmsCode = async () => {
    try {
      const { value = '' } = smsCode.current || {} as any;
      let result = await fetch(process.env.NEXT_PUBLIC_API, {
        method: 'post', body: JSON.stringify({
          code: value,
          method: 'sms.code',
          id: createCardResult.id
        })
      });
      result = await result.json();
      smsCodeResult = result;
    } catch (error) { console.error(error); }
  };
  return (
    <>
      <Navbar currentLang={locale} />
      <div className='mx-auto w-1/2 text-center'>
        <h2 className='text-center'>{locale} {i18n('lang:hello')}</h2><br />
        <div><NextLink href="/" locale={locale}>HOME</NextLink></div>
        <div>
          <input type="text" className='shadow my-2 p-3' value={cardPan} onChange={onPan} placeholder="xxxx xxxx xxxx xxxx" /><br />
          <input type="text" className='shadow p-3' value={cardExpiry} onChange={onExpiry} placeholder="mm/yy" /><br />
          <button onClick={cardCreate} className='shadow rounded-sm p-3'>Send</button>
        </div>
        <div>
          <h1>after sms code</h1>
          <input type="text" className='shadow p-3 my-3' ref={smsCode} placeholder="xxxxxx" /><br />
          <button onClick={sendSmsCode} className='shadow rounded-sm p-3'>Send sms code</button>
        </div>
      </div>
    </>
  );
};

export default Home;
