'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  // useEffect(() => {
  //   const cookies = parseCookies();
  //   const token = cookies.token;

  //   if (token) {
  //     setIsAuthenticated(true);
  //     setToken(token);
  //   } else {
  //     router.push('/login');
  //   }
  // }, [router]);

  const login = (token: string) => {
    setCookie(null, 'token', token, {
      maxAge: 60 * 60 * 24, // 1 dia
      path: '/',
      sameSite: 'lax',
    });
    setToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    destroyCookie(null, 'token');
    setToken(null);
    setIsAuthenticated(false);
    router.push('/auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
