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

	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_API_URL}imoveis`)
			.then((response) => response.json())
			.then((data) => setImoveis(data.data));
	}, []);

	const handleSearch = async () => {
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
		const data = await response.json();
		setImoveis(data.data);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setSearchParams((prevState) => ({ ...prevState, [name]: value }));
	};

	return (
		<div className="container mx-auto pt-6 min-h-[100vh]">
			<h1 className="text-2xl font-bold mb-4">Listagem de Imóveis</h1>
			<div className="mb-4">
				<input
					type="text"
					name="title"
					placeholder="Título"
					value={searchParams.title}
					onChange={handleInputChange}
					className="border p-2 mr-2"
				/>
				<input
					type="text"
					name="rooms"
					placeholder="Quartos"
					value={searchParams.rooms}
					onChange={handleInputChange}
					className="border p-2 mr-2"
				/>
				{/* <input
					type="text"
					name="minValue"
					placeholder="Valor Mínimo"
					value={searchParams.minValue}
					onChange={handleInputChange}
					className="border p-2 mr-2"
				/>
				<input
					type="text"
					name="maxValue"
					placeholder="Valor Máximo"
					value={searchParams.maxValue}
					onChange={handleInputChange}
					className="border p-2 mr-2"
				/> */}
				<button
					onClick={handleSearch}
					className="bg-blue-500 text-white p-2 rounded"
				>
					Buscar
				</button>
			</div>
			<div className="flex justify-center items-center flex-wrap gap-4">
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
