'use client'
import { QueryClient, QueryClientProvider } from 'react-query';

export default function QueryWrapper({ children }: Props) {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

interface Props {
    children: React.ReactNode;
}