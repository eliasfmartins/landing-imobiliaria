'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { Header } from '../components/Header';
import Cookies from 'js-cookie'; // Alteração aqui


interface LoginResponse {
	success: boolean;
	message: string;
	token?: string;
}

export default function LoginPage() {
	const { login } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState<string | null>(null);
	const [messageType, setMessageType] = useState<'success' | 'error' | null>(
		null
	);
	const [loading, setLoading] = useState(false);
	const [redirectTimeout, setRedirectTimeout] = useState<NodeJS.Timeout | null>(
		null
	);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setMessage(null);
		setMessageType(null);

		try {
			const response = await fetch('https://imobiliaria-api-nine.vercel.app/imoveis/auth', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});

			if (!response.ok) {
				throw new Error('Failed to login');
			}

			const data: LoginResponse = await response.json();

			if (data.success && data.token) {
				Cookies.set('token', data.token, { // Alteração aqui
				  httpOnly: false,
				  expires: 1, // Alteração aqui (valor em dias)
				  path: '/imoveis',
				  secure:false
				});

				login(data.token);
				setMessage('Login successful! Redirecting...');
				setMessageType('success');

				const timeout = setTimeout(() => {
					router.push('/');
				}, 2000);
				setRedirectTimeout(timeout);
			} else {
				setMessage(data.message);
				setMessageType('error');
			}
		} catch (error) {
			setMessage('An error occurred. Please try again.');
			setMessageType('error');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		return () => {
			if (redirectTimeout) {
				clearTimeout(redirectTimeout);
			}
		};
	}, [redirectTimeout]);

	return (
		<div>
			<div className="min-h-screen bg-gray-900 flex items-center justify-center ">
				<form
					onSubmit={handleSubmit}
					className="bg-gray-800 p-6 rounded shadow-md w-full max-w-sm"
				>
					<h1 className="text-2xl font-semibold mb-4 text-white">Login</h1>
					{message && (
						<div
							className={`p-2 mb-4 text-white ${
								messageType === 'success' ? 'bg-green-500' : 'bg-red-500'
							}`}
						>
							{message}
						</div>
					)}
					<div className="mb-4">
						<label htmlFor="email" className="block text-gray-300">
							Email
						</label>
						<input
							type="email"
							id="email"
							className="w-full p-2 border border-gray-600 rounded mt-1 bg-gray-700 text-white"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password" className="block text-gray-300">
							Password
						</label>
						<input
							type="password"
							id="password"
							className="w-full p-2 border border-gray-600 rounded mt-1 bg-gray-700 text-white"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-2 rounded mt-4"
						disabled={loading}
					>
						{loading ? 'Logging in...' : 'Login'}
					</button>
				</form>
			</div>
		</div>
	);
}
