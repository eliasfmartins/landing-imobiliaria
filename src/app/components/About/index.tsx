import { playfair, robotinho } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const About = () => {
	return (
		<div
			className={`min-h-[35vh] xl:flex mx-auto `}
			style={{
				backgroundImage:
					'linear-gradient(to bottom,#00000088, #020202 ), url(/house.jpg)',
				backgroundAttachment: 'fixed', // Isso cria o efeito de parallax
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#fff',
			}}
		>
			<div className="flex flex-col space-y-10 mt-7 p-4 paralax justify-center items-center max-w-[1200px] mx-auto h-full">
				<h2 className={`w-full text-5xl font-[700] text-center`}>
					Imobiliária Martins e Silva
				</h2>
				<h3 className={`w-full text-3xl font-[600] text-center`}>
					Sua Parceira na Realização de Sonhos
				</h3>
				<p className="text-lg text-justify font-[600] p-8">
					Seja bem-vindo à Martins e Silva Imobiliária, sua nova escolha para
					encontrar o lar dos seus sonhos. Nossos corretores, com anos de
					experiência, estão prontos para ajudá-lo a encontrar o imóvel perfeito
					para você. Trabalhamos tanto com imóveis novos quanto usados e
					oferecemos um vasto catálogo para atender a diversas necessidades e
					preferências. Venha nos conhecer e dar o primeiro passo rumo à
					realização dos seus sonhos.
				</p>
				<Link
					href="#vendaaa"
					className="border-2 border-yellow-600 w-fit px-8 py-3 font-[700] text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all ease-in-out rounded mx-auto"
				>
					Veja Alguns dos Nossos Imóveis
				</Link>
			</div>
		</div>
	);
};
