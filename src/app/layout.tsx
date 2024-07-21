import type { Metadata } from 'next';
import './globals.css';
import { inter } from './fonts';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Analytics } from "@vercel/analytics/react"
export const metadata: Metadata = {
	title: 'Imobiliaria Martins & Silva',
	description: 'sua nova escolha para encontrar o lar dos seus sonhos',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" style={{ scrollBehavior: 'smooth' }}>
			<AuthProvider>
				<body className={`${inter.className} font-normal`} >
					<Header />
					{children}
					<Footer />
				</body>
				<Analytics/>
			</AuthProvider>
		</html>
	);
}
