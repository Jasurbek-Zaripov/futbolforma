import type { NextApiRequest, NextApiResponse } from 'next';
import { create, get } from '../../service/redis';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method?.toUpperCase();

    switch (method) {
        case 'GET':
            const order = get(req.query.id + '');
            return res.json(order);
        case 'POST':
            const orderId = create(req.body);
            return res.json({ orderId });
        default:
            break;
    }
};