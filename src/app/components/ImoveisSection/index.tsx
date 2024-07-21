'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import CardDestaqueImoveis from '../CardsDestaqueImoveis';
import { ImovelParams } from '@/api/imoveis';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination } from 'swiper/modules';

export const ImoveisSection = () => {
	const [imoveis, setImoveis] = useState<ImovelParams[]>([]);

	useEffect(() => {
		const fetchImoveis = async () => {
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}imoveis/highlighted`);
			const data = await response.json();
			setImoveis(data.data);
		};

		fetchImoveis();
	}, []);

	return (
		<div className='mx-auto'>
			<Swiper
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					// quando a largura da tela for menor ou igual a 1200px
					1200: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					// quando a largura da tela for menor ou igual a 992px
					992: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					// quando a largura da tela for menor ou igual a 768px
					768: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					// quando a largura da tela for menor ou igual a 576px
					576: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
				}}
				loop={true}
				modules={[Pagination]}
				className="mySwiper max-w-[1200px] w-auto flex justify-center items-center"
			>
				{imoveis.map(imovel => (
					<SwiperSlide key={imovel.id} style={{ width: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
						<CardDestaqueImoveis
							imgUrl={imovel.images[0]}
							cidade={imovel.city}
							title={imovel.title}
							valor={imovel.value}
							banheiros={imovel.bathrooms}
							metragem={imovel.area}
							quartos={imovel.rooms}
							vagas={imovel.garages}
							link={`/imoveis/${imovel.id}`}
						/>
					</SwiperSlide>
				))}
			</Swiper>

			<Link
				href="/imoveis"
				className="border-2 border-yellow-600 w-fit px-8 py-3 font-[700] text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all ease-in-out rounded mx-auto flex my-14"
			>
				Veja Nossos Imóveis
			</Link>
		</div>
	);
};
