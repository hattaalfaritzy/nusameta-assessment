import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#C9FD5F',
                    50: '#FFFFFF',
                    100: '#FFFFFF',
                    200: '#F2FFD8',
                    300: '#E4FEB0',
                    400: '#D7FE87',
                    500: '#C9FD5F',
                    600: '#B6FC28',
                    700: '#9DE903',
                    800: '#78B102',
                    900: '#527A02',
                    950: '#405E01',
                },
                secondary: {
                    DEFAULT: '#641AFF',
                    50: '#E0D2FF',
                    100: '#D2BDFF',
                    200: '#B794FF',
                    300: '#9B6CFF',
                    400: '#8043FF',
                    500: '#641AFF',
                    600: '#4900E1',
                    700: '#3700A9',
                    800: '#240071',
                    900: '#120039',
                    950: '#09001D',
                },
                informative: {
                    DEFAULT: '#00AEEB',
                    200: '#E5F6FD',
                    300: '#B0EBFF',
                    400: '#51D2FF',
                    500: '#00AEEB',
                    600: '#006285',
                    700: '#003C52',
                },
                success: {
                    DEFAULT: '#27AE60',
                    200: '#E9F6F0',
                    300: '#D4FFDE',
                    400: '#A9EFB9',
                    500: '#27AE60',
                    600: '#188130',
                    700: '#105620',
                },
                warning: {
                    DEFAULT: '#DF7B33',
                    200: '#FBF1EB',
                    300: '#FFD5B7',
                    400: '#F5A164',
                    500: '#DF7B33',
                    600: '#A6551A',
                    700: '#814813',
                },
                error: {
                    DEFAULT: '#CF3F24',
                    200: '#FAEBEA',
                    300: '#F6D2CB',
                    400: '#E78674',
                    500: '#CF3F24',
                    600: '#A5321D',
                    700: '#7A2515',
                },
            },
            fontFamily: {
                sans: ['var(--font-poppins)', ..._fontFamily.sans],
                mono: ['var(--font-roboto-mono)', ..._fontFamily.mono],
            },
            fontSize: {
                xxxs: '.5rem',
                xxs: '.625rem',
            },
            screens: {
                xsm: '360px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
        },
    },
    plugins: [],
};
export default config;
