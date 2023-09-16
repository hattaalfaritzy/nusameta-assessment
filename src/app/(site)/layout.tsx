import clsx from 'clsx';
import type { Metadata } from 'next';
import { POPPINS, ROBOTO_MONO } from '@/config/fonts';
import QueryWrapper from '@/utils/query-wrapper';
import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';
import '@/styles/index.scss';

export const metadata: Metadata = {
    title: 'Assessment Test - Nusameta',
    description: 'Assessment Test - Nusameta by hattaalfaritzy',
    authors: [
        {
            name: 'Muhammad Hatta Alfaritzy',
            url: 'https://www.linkedin.com/in/hattaalfaritzy/',
        },
    ],
    icons: {
        icon: '/images/logo.svg',
        apple: '/images/logo.svg',
    },
    openGraph: {
        title: 'Assessment Test - Nusameta',
        description: 'Assessment Test - Nusameta by hattaalfaritzy',
        images: '/images/logo.svg',
        url: 'https://github.com/hattaalfaritzy/nusameta-assessment',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className={clsx('scroll-smooth', POPPINS.variable, ROBOTO_MONO.variable)}>
            <body className='flex flex-col w-screen h-auto min-h-screen overflow-x-hidden'>
                <QueryWrapper>
                    <div id='layout-default'>
                        <Header />
                        <main className='main'>{children}</main>
                        <Footer />
                    </div>
                </QueryWrapper>
            </body>
        </html>
    );
}
