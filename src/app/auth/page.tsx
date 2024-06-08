'use client'
import { setCookie } from 'nookies';
import { useState } from 'react';

interface LoginResponse {
  success: boolean;
  message: string;
  token?: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setMessageType(null);

    try {
      const response = await fetch('http://localhost:3333/imoveis/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

       const data: LoginResponse = await response.json();
      console.log(data)
      if (data.success) {
        setMessage('Usuário autenticado com sucesso!');
        setMessageType('success');
        setCookie(null, 'token', data.token, {
            maxAge: 60 * 60 * 24 * 7, // 7 dias em segundos
            path: '/', // Caminho raiz para acesso em toda a aplicação
            // secure: process.env.NODE_ENV === 'production', // Só envia cookies em conexões HTTPS em produção
            sameSite: 'lax', // Protege contra ataques CSRF
          });
      } else {
        setMessage(data.message);
        setMessageType('error');
      }
    } catch (error) {
      setMessage(`Erro ao fazer login: ${error.message}`);
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {message && (
          <p className={`text-center ${messageType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {loading ? 'Carregando...' : 'Entrar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
