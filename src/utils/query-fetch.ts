'use server'
import { fetchApi } from './api';

export async function queryFetch(_key: string, url = '', params = {}, method: 'GET' | 'POST' = 'GET', data?: Record<string, unknown>) {
    return fetchApi({
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/api/',
        method: method,
        url: url,
        params: params,
        data: data,
    });
}
