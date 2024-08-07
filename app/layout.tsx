import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';

import { Toaster } from '@/components/ui/toaster';

import './globals.css';

const kumbhSans = Kumbh_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'E-commerce Product Page',
	description: 'by Anup',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={kumbhSans.className}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
