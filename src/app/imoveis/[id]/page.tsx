'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useAuth } from '../../context/AuthContext';
import { parseCookies } from 'nookies';

const ImovelDetails = ({ params }: { params: { id: string } }) => {
	const router = useRouter();
	const {id} = params
	const [imovel, setImovel] = useState(null);
	const { isAuthenticated } = useAuth();
	console.log(params)
	useEffect(() => {
		if (id) {
			fetch(`http://localhost:3333/imoveis/${id}`)
				.then((response) => response.json())
				.then((data) => setImovel(data.data));
		}
	}, [id]);

	const handleDelete = async () => {
		try {
			const cookies = parseCookies(); // Obtenha todos os cookies
			const token = cookies.token; // Obtenha o token do cookie
			console.log(token)
			if (!token) {
				throw new Error('Token not found in cookies');
			}
	
			const response = await fetch(`http://localhost:3333/imoveis/${id}`, {
				method: 'DELETE',
				headers: {
					Cookie: `token=${token}`, // Defina o cabeçalho Cookie com o token JWT
				},
			});
	
			if (!response.ok) {
				throw new Error('Failed to delete resource');
			}
	
			router.push('/imoveis');
		} catch (error) {
			console.error('Error deleting resource:', error.message);
		}
		
		// router.push('/imoveis');
	};

	if (!imovel) {
		return <div>Loading...</div>;
	}

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">{imovel.title}</h1>
			<Carousel
				responsive={{
					superLargeDesktop: {
						breakpoint: { max: 4000, min: 3000 },
						items: 5,
					},
					desktop: {
						breakpoint: { max: 3000, min: 1024 },
						items: 3,
					},
					tablet: {
						breakpoint: { max: 1024, min: 464 },
						items: 2,
					},
					mobile: {
						breakpoint: { max: 464, min: 0 },
						items: 1,
					},
				}}
			>
				{imovel.images.map((img, index) => (
					<Image
						key={index}
						src={img.startsWith('http') ? img : `/${img}`}
						alt={`Imagem ${index}`}
						width={500}
						height={300}
					/>
				))}
			</Carousel>
			<p>{imovel.description}</p>
			<p>Quartos: {imovel.rooms}</p>
			<p>Valor: {imovel.value}</p>
			{isAuthenticated && (
				<div className="mt-4">
					<Link href={`/imoveis/${id}/editar`} passHref>
						<button className="bg-blue-500 text-white p-2 rounded mr-2">
							Editar
						</button>
					</Link>
					<button
						onClick={handleDelete}
						className="bg-red-500 text-white p-2 rounded"
					>
						Deletar
					</button>
				</div>
			)}
		</div>
	);
};

export default ImovelDetails;
