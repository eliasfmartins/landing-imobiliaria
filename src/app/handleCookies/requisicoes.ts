import { parseCookies } from "nookies";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface Imovel {
  title?: string;
  description?: string;
  images?: string[];
  rooms?: string;
  value?: string;
  city?: string;
  bathrooms?: string;
  garages?: string;
  area?: string;
}

export const handleRequisicoes = async (url: string, method: HttpMethod, imovel?: Imovel) => {
  const cookies = parseCookies();
  const token = cookies.token;
  console.log(token);
  if (!token) {
    throw new Error('Token not found in cookies');
  }

  const options: RequestInit = {
    method: method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`${token}`
    },
  };

  if (imovel && (method === 'POST' || method === 'PUT')) {
    options.body = JSON.stringify(imovel);
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, options);

  if (!response.ok) {
    console.error('Error with request:', response);
    throw new Error('Request failed');
  }

  return response.json();
};
