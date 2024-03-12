import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/activeSectionContextProvider';
import ThemeContextProvider from '@/context/themeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Wenodh | Personal Portfolio',
    description: 'Wenodh is a React js developer with 7 years of experience',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body
                className={`${inter.className} bg-gray-50 text-gray-950 relative md:pt-24 sm:pt-32`}
            >
                <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10"></div>
                <div className="bg-[#dbd7fb] absolute top-[-6rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10"></div>
                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        {children}
                    </ActiveSectionContextProvider>{' '}
                </ThemeContextProvider>
            </body>
        </html>
    );
}
