'use server';
import axios from 'axios';

const timeout = Number(process.env.API_TIMEOUT || 15000);

const instance = axios.create({
    timeout: timeout,
    baseURL: process.env.BASE_URL,
    headers: {
        rejectUnauthorized: false,
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
    },
});

export const fetchApi = async ({ method = 'GET', url, params, data }: Props) => {
    const response = await instance({
        method: method,
        url: url,
        params: params,
        data: data && JSON.stringify(data),
    });

    return response.data;
};

interface Props {
    method?: string;
    url?: string;
    params?: Record<string, unknown>;
    data?: Record<string, unknown>;
}