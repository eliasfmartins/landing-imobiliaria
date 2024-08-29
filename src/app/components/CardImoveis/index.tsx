import Link from "next/link";
type CardImoveisProps = {
	title: string;
	imgUrl: string;
	valor: string;
	cidade: string;
	quartos?: string;
	banheiros?: string;
	vagas?: string;
	metragem?: string;
	link: string;
};
export default function CardImoveis({
	imgUrl,
	title,
	valor,
	cidade,
	banheiros,
	metragem,
	quartos,
	vagas,
	link,
}: CardImoveisProps) {
	return (
		<div className="flex flex-col gap-4 rounded-lg overflow-hidden group shadow-2xl w-[300px] my-4 border border-gray-400">
			<div className="relative h-[300px] max-h-[300px] w-full  overflow-hidden ">
				<div
					style={{
						backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.76), transparent), url(${imgUrl})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
					className="w-full h-full ease-in-out overflow-hidden group-hover:scale-125  transition-all duration-700"
				></div>

				<div className="bg-yellow-600 text-white rounded-md p-1 inline absolute top-3 right-3">
					Á Venda
				</div>
				<p className="absolute bottom-2 left-2 text-white ">
					A partir de: <br />
					<span className="text-xl">
						{Number(valor).toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL',
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						})}
					</span>
				</p>
			</div>
			<div className="p-4 flex flex-col gap-2 ">
				<h2 className="text-xl font-semibold mb-1 truncate capitalize">{title.toLocaleLowerCase()}</h2>

				<p>{cidade}</p>
				<div className="flex gap-2 flex-wrap">
					{quartos && <p>{quartos} Quartos</p>}
					{banheiros && <p>{banheiros} Banheiros</p>}
					{vagas && <p>{vagas} Vagas</p>}
					{metragem && <p>{metragem}m²</p>}
				</div>
				<Link href={link}>
					<button className="w-full rounded-md bg-yellow-600 text-white p-5 hover:brightness-125 transition-all duration-1000 mt-4">
						Mais informações
					</button>
				</Link>
			</div>
		</div>
	);
}

