'use server'
import { fetchApi } from './api';

export async function queryFetch(_key: string, url = '', params = {}, method: 'GET' | 'POST' = 'GET', data?: Record<string, unknown>) {
    return fetchApi({
        method: method,
        url: url,
        params: params,
        data: data,
    });
}
