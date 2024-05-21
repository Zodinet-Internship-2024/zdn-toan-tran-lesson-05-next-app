import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: '400' });

export const metadata: Metadata = {
    title: 'Home - Zodinet Shop',
    description: 'Trang chủ của zodinet shop',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.className, 'min-h-dvh antialiased')}>
                <Header />
                {children}
            </body>
        </html>
    );
}
