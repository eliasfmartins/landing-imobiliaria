import { useRouter } from 'next/navigation';

export type ImovelParams = {
	id: string;
	title: string;
	description: string;
	images: string[];
	value: string;
	rooms: string;
	city: string;
	bathrooms?: string;
	garages?: string;
	area?: string;
};

export type SearchParams = {
	title?: string;
	rooms?: string;
	minValue?: string;
	maxValue?: string;
};
const Router = useRouter();
export async function getImoveis() {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}imoveis`);
	return (await response.json()) as ImovelParams[];
}

export async function searchImoveis(searchParams: SearchParams) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}imoveis/search`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(searchParams),
		}
	);
	return (await response.json()) as ImovelParams[];
}

export async function insertImoveis(createParams: ImovelParams, token: string) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}imoveis`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${token}`,
		},
		body: JSON.stringify(createParams),
	});
	if (!response.ok) {
		const errorData = await response.json();
		console.error('Erro na resposta do servidor:', errorData); 
	} else {
		const data = await response.json();
		console.log('Resposta do servidor:', data); 
		Router.push('/imoveis');
	}
}
