'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { FaExclamationCircle } from 'react-icons/fa';

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
	const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);
	const [loading, setLoading] = useState(false);
	const [redirectTimeout, setRedirectTimeout] = useState<NodeJS.Timeout | null>(null);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setMessage(null);
		setMessageType(null);

		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}imoveis/auth`, {
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
				Cookies.set('token', data.token, {
					httpOnly: false,
					expires: 1,
					path: '/imoveis',
					secure: false,
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
		<div className="min-h-screen bg-gray-900 flex items-center justify-center">
			<form
				onSubmit={handleSubmit}
				className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
			>
				<h1 className="text-3xl font-bold mb-6 text-white text-center">Login</h1>
				{message && (
					<div
						className={`p-4 mb-4 rounded-lg flex items-center justify-between ${
							messageType === 'success' ? 'bg-green-600' : 'bg-red-600'
						}`}
					>
						<span className="text-white flex items-center gap-2">
							<FaExclamationCircle size={20} />
							{message}
						</span>
					</div>
				)}
				<div className="mb-6">
					<label htmlFor="email" className="block text-gray-300 text-sm font-medium">
						Email
					</label>
					<input
						type="email"
						id="email"
						className="w-full p-3 border border-gray-600 rounded-lg mt-1 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="password" className="block text-gray-300 text-sm font-medium">
						Password
					</label>
					<input
						type="password"
						id="password"
						className="w-full p-3 border border-gray-600 rounded-lg mt-1 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
					disabled={loading}
				>
					{loading ? 'Logging in...' : 'Login'}
				</button>
			</form>
		</div>
	);
}
