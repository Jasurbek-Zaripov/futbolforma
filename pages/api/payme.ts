import type { NextApiRequest, NextApiResponse } from 'next';
import { checkCode, createCard, recipientCreate, recipientPay, temp, verifyCode } from '../../service/payme';
export default async (req: NextApiRequest, res: NextApiResponse) => {
    req.body = JSON.parse(req.body);
    const { method = '' } = req.body;

    switch (method) {
        case 'card.create':
            const createCardResult = await createCard(req.body.pan, req.body.expiry);
            if (!createCardResult) {/*on Error */ }
            temp.set(createCardResult?.id, createCardResult?.result.card.token);

            const verifyCodeResult = await verifyCode(createCardResult?.result.card.token || '');
            if (!verifyCodeResult) {/*on Error */ }

            res.json({ id: createCardResult?.id });
            break;

        case 'sms.code':
            const checkCodeResult = await checkCode(req.body.code, temp.get(req.body.id));
            if (!checkCodeResult) {/*on Error */ }
            temp.set(checkCodeResult?.id, checkCodeResult?.result.card.token);
            const recipientCreateResult = await recipientCreate(100000000); // amount in tiny
            const recipientPayResult = await recipientPay(checkCodeResult?.result.card.token || '', recipientCreateResult?.result.receipt._id || '');

            console.log(recipientPayResult);
            res.json({ id: checkCodeResult?.id });
            break;
        default:
            res.statusCode = 400;
            res.json({
                success: false,
                message: 'BAD_REQUEST'
            });
            break;
    }
};