import type { Metadata } from 'next';
import './globals.css';
import { inter } from './fonts';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';

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
		<html lang="en" style={{ scrollBehavior: 'smooth' }}>
			<AuthProvider>
				<body className={inter.className}>{children}</body>
			</AuthProvider>
		</html>
	);
}
