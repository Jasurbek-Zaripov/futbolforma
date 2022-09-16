import { useRef, useState } from 'react';

export function getStaticProps({ locale }: any) { //send props to Payme
    return {
        props: {
            locale,
        },
        revalidate: 60
    };
}

const Payme = () => {
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
    const cardCreate = async () => { //step 1
        try {
            let result = await fetch(process.env.NEXT_PUBLIC_API, { method: 'post', body: JSON.stringify({ pan: cardPan, expiry: cardExpiry, method: 'card.create' }) });
            result = await result.json();
            createCardResult = result;
            console.log(result);

        } catch (error) { console.error(error); }
    };

    let smsCodeResult: any;
    const smsCode = useRef(null);
    const sendSmsCode = async () => { //step 2
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
        <div className="mx-auto w-1/2 text-center">
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
    );
};

export default Payme;