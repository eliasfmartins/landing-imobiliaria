'use client';

import { useAuth } from '@/app/context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaRegEdit, FaWindowClose } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6';
import { IoMdLogOut } from 'react-icons/io';

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
				className={`z-50 w-full  transition-all ease-in-out duration-1000  bg-black p-2  ${
					navbar?'fixed ' : ''
				}`}
			>
				<div
					className={`mx-auto max-w-[1200px] bg-transparent flex justify-between  items-center px-4 text-gray-800 max-h-20 h-full`}
				>
					<Link href="/">
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
							className={` transition-all z-50 w-full flex-col sm:w-auto sm:flex-row sm:visible sm:flex sm:gap-1 text-white font-[700] items-center flex duration-1000 overflow-hidden top-[60px] right-0 left-0 justify-start gap-6 fixed h-0 sm:h-auto sm:static ${
								navbar
									? 'w-full h-screen pt-12 bg-black'
									: 'invisible flex transition-all duration-1000'
							}`}
						>
							<Link href="/#inicio ">
								<li
									className="transition duration-500 hover:border-b-2 py-2 hover:border-yellow-600  px-4  cursor-pointer h-[100%] border-b-2 border-b-transparent"
									onClick={() => setNavBar(false)}
								>
									Inicio
								</li>
							</Link>

							<Link href="/imoveis">
								<li
									className="transition duration-500 hover:border-b-2 py-2 hover:border-yellow-600  px-4  cursor-pointer h-[100%] border-b-2 border-b-transparent"
									onClick={() => setNavBar(false)}
								>
									Imoveis
								</li>
							</Link>
							<Link href="/#about">
								<li
									className="transition duration-500 hover:border-b-2 py-2 hover:border-yellow-600  px-4  cursor-pointer h-[100%] border-b-2 border-b-transparent"
									onClick={() => setNavBar(false)}
								>
									Quem Somos
								</li>
							</Link>
							<Link href="/#servicos">
								<li
									className="transition duration-500 hover:border-b-2 py-2 hover:border-yellow-600  px-4  cursor-pointer h-[100%] border-b-2 border-b-transparent"
									onClick={() => setNavBar(false)}
								>
									Serviços
								</li>
							</Link>
							<Link href="/#ondeficamos">
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
											<div
												className="h-[25px] w-[25px]rounded-full cursor-pointer"
												title="Cadastrar Imóvel"
											>
												<FaRegEdit size={25} />
											</div>
										</li>
									</Link>

									<div className="flex gap-x-3 items-center">
										<div
											className="h-[25px] w-[25px] rounded-full cursor-pointer"
											onClick={logout}
										>
											{isAuthenticated && (
												<div title="Sair">
													<IoMdLogOut size={25} />
												</div>
											)}
										</div>
									</div>
								</>
							) : (
								<div className="flex items-center">
									<div
										className="h-[25px] w-[25px] rounded-full cursor-pointer"
										onClick={handleLoginClick}
										title="Login"
									>
										<FaCircleUser size={25} />
									</div>
								</div>
							)}
						</ul>
					</nav>
				</div>
			</header>
			{showLoginModal && (
	<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
		<div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 scale-95 hover:scale-100">
			<button
				className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
				onClick={closeModal}
				aria-label="Fechar"
			>
				<FaWindowClose size={20} />
			</button>
			<h2 className="text-2xl font-semibold mb-6 text-white">Login</h2>
			<div className="flex flex-col gap-4">
				<Link href="/auth" onClick={closeModal}>
					<button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors">
						Ir para página de login
					</button>
				</Link>
				<button
					onClick={closeModal}
					className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition-colors"
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
