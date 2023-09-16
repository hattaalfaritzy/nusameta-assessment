import { useQuery, useMutation } from 'react-query';
import { fetchApi } from './api';

export const useFetch = (url: string, params?: Record<string, unknown>) => {
    return useQuery([url, params], () => fetchApi({ url, method: 'GET', params }));
};

// export const useFlexibleFetch = (key: string, { method = 'GET', url, params, data, headers }: Props) => {
//     return useQuery(key, () => fetchApi({ method, url, params, data, headers }));
// };

export const useMutate = ({ url, method = 'POST' }: { url: string, method?: string }) => {
    return useMutation((data: Record<string, unknown>) => fetchApi({ url, method, data }));
};
