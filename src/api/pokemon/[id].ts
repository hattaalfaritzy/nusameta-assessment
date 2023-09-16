import fetchHandler from '../route';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    req.body = {
        method: 'GET',
        url: `https://pokeapi.co/api/v2/pokemon/${id}/`
    };

    return fetchHandler(req, res);
}
