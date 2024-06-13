'use client';

import { useAuth } from '@/app/context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Header = () => {
	const [navbar, setNavBar] = useState(false);
	const { isAuthenticated, logout } = useAuth();
	const [showLoginModal, setShowLoginModal] = useState(false);

	useEffect(() => {
		const desactivateNavBar = () => setNavBar(false);
		window.addEventListener('resize', desactivateNavBar);
		return () => window.removeEventListener('resize', desactivateNavBar);
	}, []);

	

	const handleLoginClick = () => {
		setShowLoginModal(true);
	};

	const closeModal = () => {
		setShowLoginModal(false);
	};

	return (
		<>
			<header
				className={`z-50 w-full  transition-all ease-in-out duration-1000  bg-black py-1${
					navbar ? 'fixed mb-[80px] bg-black' : ''
				}`}
			>
				<div className="mx-auto max-w-[1200px] bg-transparent flex justify-between  items-center px-4 text-gray-800 max-h-20 h-full">
					<Link href="/" >
						<Image
							src={'/logo.svg'}
							height={120}
							width={120}
							alt=""
							className="object-cover z-40"
						/>
					</Link>
					<nav className="flex">
						<button
							className="sm:hidden h-[25px] m-auto z-30 w-8 flex items-center flex-col gap-1 p-1 relative"
							onClick={() => setNavBar((prev) => !prev)}
						>
							<hr
								className={`bg-yellow-600 h-1 w-full rounded border-none transition-all transform absolute ${
									navbar ? 'rotate-[50deg] top-2' : 'top-0'
								}`}
							/>
							<hr
								className={`h-1 w-full rounded border-none transition-all transform absolute ${
									navbar ? 'bg-transparent top-1' : 'bg-yellow-600 top-2'
								}`}
							/>
							<hr
								className={`bg-yellow-600 h-1 w-full rounded border-none transition-all transform absolute ${
									navbar ? 'rotate-[-50deg] top-2' : 'top-4'
								}`}
							/>
						</button>
						<ul
							className={`justify-center transition-all z-50 transition-all w-full flex-col sm:w-auto sm:flex-row sm:visible sm:flex sm:gap-1 text-white font-[700] items-center flex duration-1000 overflow-hidden top-[80px] right-0 left-0 justify-start gap-9 fixed h-0 sm:h-auto sm:static ${
								navbar
									? 'w-full h-screen pt-12 bg-black'
									: 'invisible flex transition-all duration-1000'
							}`}
						>
							<Link  href="/#inicio " className='h-full' >
								<li
									className="transition duration-500 hover:border-b-2 py-2 hover:border-yellow-600  px-4  cursor-pointer h-[100%] border-b-2 border-b-transparent"
									onClick={() => setNavBar(false)}
								>
									Inicio
								</li>
							</Link>
							<Link href="/#about" >
								<li
									className="transition duration-500 hover:border-b-2 py-2 hover:border-yellow-600  px-4  cursor-pointer h-[100%] border-b-2 border-b-transparent"
									onClick={() => setNavBar(false)}
								>
									Quem Somos
								</li>
							</Link>
							<Link href="/imoveis" >
								<li
									className="transition duration-500 hover:border-b-2 py-2 hover:border-yellow-600  px-4  cursor-pointer h-[100%] border-b-2 border-b-transparent"
									onClick={() => setNavBar(false)}
								>
									Venda
								</li>
							</Link>
							<Link href="/#servicos" >
								<li
									className="transition duration-500 hover:border-b-2 py-2 hover:border-yellow-600  px-4  cursor-pointer h-[100%] border-b-2 border-b-transparent"
									onClick={() => setNavBar(false)}
								>
									Serviços
								</li>
							</Link>
							<Link href="/#ondeficamos" >
								<li
									className="transition duration-500 hover:border-b-2 py-2 hover:border-yellow-600  px-4  cursor-pointer h-[100%] border-b-2 border-b-transparent"
									onClick={() => setNavBar(false)}
									
                  
								>
									Onde nos Encontrar
								</li>
							</Link>
							{isAuthenticated ? (
								<>
									<Link href="/cadastrar-imoveis">
										<li
											className="cursor-pointer"
											onClick={() => setNavBar(false)}
										>
											<div 	className="h-[20px] w-[20px] bg-yellow-400 rounded-full cursor-pointer">

											</div>
										</li>
									</Link>
									
									<div className="flex gap-x-3 items-center">
										<div
											className="h-[20px] w-[20px] bg-green-500 rounded-full cursor-pointer"
											onClick={logout}
										></div>
									</div>
								</>
							) : (
								<div className="flex items-center">
									<div
										className="h-[20px] w-[20px] bg-red-500 rounded-full cursor-pointer"
										onClick={handleLoginClick}
									></div>
								</div>
							)}
						</ul>
					</nav>
				</div>
			</header>
			{showLoginModal && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div className="bg-gray-700 p-8 rounded shadow-lg">
						<h2 className="text-2xl mb-4 text-white">Login</h2>
						<div className=' gap-3 flex items-center justify-center'>
							<Link href="/auth" onClick={closeModal}>
								<button className="bg-blue-500 text-white px-3 py-3 rounded">
									Ir para página de login
								</button>
							</Link>
							<button
								onClick={closeModal}
								className=" bg-red-500 text-white px-4 py-3 rounded"
							>
								Cancelar
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
