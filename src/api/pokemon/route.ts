import fetchHandler from '../route';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    req.body = {
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20',
    };

    return fetchHandler(req, res);
}
