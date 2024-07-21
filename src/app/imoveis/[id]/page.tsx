'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { useAuth } from '../../context/AuthContext';
import { parseCookies } from 'nookies';
import { Navigation, Pagination } from 'swiper/modules'
SwiperCore.use([Navigation, Pagination]);

type Imovel = {
	id: string;
	title: string;
	description: string;
	images: string[];
	rooms: string;
	value: string;
	city: string;
	bathrooms: string;
	garages: string;
	area: string;
	condominium: string;
	propertyTax: string;
	phone?: string;
};

const ImovelDetails = ({ params }: { params: { id: string } }) => {
	const router = useRouter();
	const { id } = params;
	const [imovel, setImovel] = useState<Imovel | null>(null);
	const { isAuthenticated } = useAuth();

	useEffect(() => {
		if (id) {
			fetch(`${process.env.NEXT_PUBLIC_API_URL}imoveis/${id}`)
				.then((response) => response.json())
				.then((data) => setImovel(data.data));
		}
	}, [id]);

	const handleDelete = async () => {
		try {
			const cookies = parseCookies();
			const token = cookies.token;
			if (!token) {
				throw new Error('Token not found in cookies');
			}

			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}imoveis/${id}`, {
				method: 'DELETE',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `${token}`,
				},
			});

			if (!response.ok) {
				console.error('Error deleting resource:', response);
				throw new Error('Failed to delete resource');
			}

			router.push('/imoveis');
		} catch (error: any) {
			console.error('Error deleting resource:', error);
		}
	};

	if (!imovel) {
		return <div className='min-h-[82.8vh] flex justify-center items-center'>Loading...</div>;
	}

	return (
		<div className="container mx-auto p-6 min-h-[82.8vh] bg-white shadow-md rounded-md">
			<div className="flex flex-col md:flex-row gap-3">
				<div className="w-full md:w-2/3 ">
					<Swiper
						navigation
						pagination={{ clickable: true }}
						spaceBetween={30}
						slidesPerView={1}
					>
						{imovel.images.map((img, index) => (
							<SwiperSlide key={index}>
								<Image
									src={img.startsWith('http') ? img : `/${img}`}
									alt={`Imagem ${index}`}
									width={700}
									height={500}
									className='w-full h-auto max-h-[600px] object-contain rounded-md'
								/>
								<div></div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="w-full md:w-1/3 p-4 bg-gray-100 rounded-md shadow-inner">
					<div className="mb-4">
						<h1 className="text-3xl font-bold">{imovel.title}</h1>
						<p className="text-2xl text-green-600 font-semibold">R$ {imovel.value}</p>
					</div>
					<div className="mb-4">
						<p className="text-lg"><strong>Condomínio:</strong> {imovel.condominium}</p>
						<p className="text-lg"><strong>IPTU:</strong>Não informado</p>
					</div>
					<div className="mb-4">
					<p className="text-lg">
  <strong>Quartos:</strong> {Number(imovel.rooms) < 10 ? `0${imovel.rooms}` : imovel.rooms}
</p>
						<p className="text-lg"><strong>Banheiros:</strong> {Number(imovel.bathrooms) < 10 ? `0${imovel.bathrooms}` : imovel.bathrooms}</p>
						<p className="text-lg"><strong>Garagens:</strong> {Number(imovel.garages) < 10 ? `0${imovel.garages}` : imovel.garages} carros</p>
						<p className="text-lg"><strong>Área:</strong> {imovel.area} m²</p>
						<p className="text-lg"><strong>Cidade:</strong> {imovel.city}</p>
					</div>
					<div className="mb-4">
						<p className="text-lg"><strong>Contato:</strong> {imovel.phone?imovel.phone:'61 99101 - 0404'}</p>
					</div>
					{isAuthenticated && (
						<div className="flex flex-col gap-4 mb-4 w-full">
							<Link href={`/imoveis/${id}/editar`} className=' w-full' passHref>
								<button className="bg-blue-500 text-white px-4 py-2 rounded shadow w-full hover:bg-blue-600 transition duration-300">
									Editar
								</button>
							</Link>
							<button
								onClick={handleDelete}
								className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition duration-300"
							>
								Deletar
							</button>
						</div>
					)}
					<div className="flex justify-center">
						<button
							onClick={() => router.back()}
							className="bg-gray-500 text-white px-4 py-2 rounded shadow flex-1 hover:bg-gray-600 transition duration-300"
						>
							Voltar
						</button>
					</div>
				</div>
			</div>
			<div className="mt-6 p-4">
				<h2 className="text-2xl font-bold mb-4">Descrição:</h2>
				<p className="text-lg">{imovel.description}</p>
			</div>
		</div>
	);
};

export default ImovelDetails;
