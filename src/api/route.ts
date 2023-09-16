import { fetchApi } from '@/utils/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, url, params, data, headers } = req.body;
    try {
        const responseData = await fetchApi({ method, url, params, data, headers });
        res.status(200).json(responseData);
        console.log(responseData, 'responseData');
        
    } catch (error) {
        const typedError = error as any;
        res.status(typedError.response?.status || 500).json({ message: typedError.message });
    }
}
