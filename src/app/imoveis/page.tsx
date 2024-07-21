'use client';
import { useEffect, useState, ChangeEvent } from 'react';
import CardImoveis from '../components/CardImoveis';
import { ImovelParams } from '@/api/imoveis';

const ImoveisPage = () => {
	const [imoveis, setImoveis] = useState<ImovelParams[]>([]);
	const [searchParams, setSearchParams] = useState({
		title: '',
		rooms: '',
		minValue: '',
		maxValue: '',
	});
	const [totalImoveis, setTotalImoveis] = useState<number>(0);

	useEffect(() => {
		const fetchImoveis = async () => {
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}imoveis`);
			const data = await response.json();
			setImoveis(data.data);
			setTotalImoveis(data.data.length); // Atualiza o total de imóveis
		};

		fetchImoveis();
	}, []);

	const handleSearch = async () => {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}imoveis/search`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(searchParams),
		});
		const data = await response.json();
		setImoveis(data.data);
		setTotalImoveis(data.data.length); // Atualiza o total de imóveis após a busca
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setSearchParams((prevState) => ({ ...prevState, [name]: value }));
	};

	return (
		<div className="container mx-auto pt-6 min-h-screen">
			<h1 className="text-3xl font-bold mb-6 text-gray-800">Listagem de Imóveis</h1>
			
			<div className="mb-6 flex flex-col gap-4 md:flex-row md:gap-4">
				<input
					type="text"
					name="title"
					placeholder="Título"
					value={searchParams.title}
					onChange={handleInputChange}
					className="border border-gray-300 p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
				/>
				<button
					onClick={handleSearch}
					className="bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 transition"
				>
					Buscar
				</button>
			</div>

			<p className="text-gray-700 mb-4">Total de imóveis: <span className="font-bold">{totalImoveis}</span></p>

			<div className="flex flex-wrap justify-center gap-6">
				{imoveis.map((imovel) => (
					<CardImoveis
						key={imovel.id}
						title={imovel.title}
						imgUrl={imovel.images[0]}
						valor={imovel.value}
						cidade={imovel.city}
						quartos={imovel.rooms}
						banheiros={imovel.bathrooms}
						vagas={imovel.garages}
						metragem={imovel.area}
						link={`/imoveis/${imovel.id}`}
					/>
				))}
			</div>
		</div>
	);
};

export default ImoveisPage;
