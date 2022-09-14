import axios from 'axios';
import { Agent } from 'https';
import { v4 } from 'uuid';
import { ResponseCheckCode, ResponseCreateCard, ResponseRecipientCreate, ResponseRecipientPay, ResponseVerifyCode } from './types';

const promiseRequest = (req: Promise<any>): Promise<any> => new Promise((ok, error) => req.then(ok).catch(error));

const headers = {
    'content-type': 'application/json',
    'X-Auth': process.env.X_AUTH || '',
    'Cache-Control': 'no-cache',
};
export const temp = new Map();

export async function createCard(pan: string, expiry: string): Promise<ResponseCreateCard | null> {
    try {
        const id = v4();
        const body = {
            id, method: "cards.create",
            params: {
                card: { number: "8600495473316478", expire: "03/99" },
                save: true
            }
        };

        const { data } = await promiseRequest(axios.post(process.env.ENTPOINT, body, { headers, httpsAgent: new Agent({ rejectUnauthorized: false }) }));
        return data;
    } catch (error) { console.error('ERROR [my methods]: ', error); return null; }
}

export async function verifyCode(token: string): Promise<ResponseVerifyCode | null> {
    try {
        const id = v4();
        const body = { id, method: "cards.get_verify_code", params: { token } };

        const { data } = await promiseRequest(axios.post(process.env.ENTPOINT, body, { headers, httpsAgent: new Agent({ rejectUnauthorized: false }) }));
        return data;
    } catch (error) { console.error('ERROR [my methods]: ', error); return null; }
}
export async function checkCode(code: string, token: string): Promise<ResponseCheckCode | null> {
    try {
        const id = v4();
        const body = { id, method: "cards.verify", params: { token, code } };

        const { data } = await promiseRequest(axios.post(process.env.ENTPOINT, body, { headers, httpsAgent: new Agent({ rejectUnauthorized: false }) }));
        return data;
    } catch (error) { console.error('ERROR [my methods]: ', error); return null; }
}
export async function recipientCreate(amount: number): Promise<ResponseRecipientCreate.RootObject | null> {
    try {
        const id = v4();
        const body = {
            id, method: "receipts.create",
            params: { amount, account: { order_id: "test" } }
        };

        const { data } = await promiseRequest(axios.post(process.env.ENTPOINT, body, { headers, httpsAgent: new Agent({ rejectUnauthorized: false }) }));
        return data;
    } catch (error) { console.error('ERROR [my methods]: ', error); return null; }
}

export async function recipientPay(token: string, id2: string): Promise<ResponseRecipientPay.RootObject | null> {
    try {
        const id = v4();
        const body = {
            id, method: 'receipts.pay',
            params: { token, id: id2 }
        };
        const { data } = await promiseRequest(axios.post(process.env.ENTPOINT, body, { headers, httpsAgent: new Agent({ rejectUnauthorized: false }) }));
        return data;
    } catch (error) { console.error('ERROR [my methods]: ', error); return null; }
}
