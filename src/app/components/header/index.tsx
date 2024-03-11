export const Header = () => {
    return (
        <header className="bg-zinc-100">
            <div className="mx-auto max-w-[1200px] bg-zinc-100 flex justify-between py-4 items-center text-gray-500">
                Logo Here
                <nav>
                    <ul className="flex gap-4">
                        <li className="border-b-4 border-transparent hover:border-cyan-400 transition duration-500 p-2 ">Home</li>
                        <li className="border-b-4 border-transparent hover:border-cyan-400 transition duration-500 p-2 ">Venda</li>
                        <li className="border-b-4 border-transparent hover:border-cyan-400 transition duration-500 p-2 ">Locação</li>
                        <li className="border-b-4 border-transparent hover:border-cyan-400 transition duration-500 p-2 ">Quem Somos</li>
                        <li className="border-b-4 border-transparent hover:border-cyan-400 transition duration-500 p-2 ">Fale Conosco</li>


                    </ul>
                </nav>
            </div>
        </header>
    )
}