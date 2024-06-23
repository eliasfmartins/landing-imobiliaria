import React from 'react';
import CardImoveis from '../CardImoveis';
import Link from 'next/link';
import CardDestaqueImoveis from '../CardsDestaqueImoveis';

export const ImoveisSection = () => {
  return (
    <div className=''>
    <div className="flex sm:justify-evenly items-center w-full/20 flex-wrap p-4 justify-center gap-y-8  ">
   
      <CardDestaqueImoveis cidade='João Pinheiro' imgUrl='fazenda.jpeg' link='https://www.vivareal.com.br/imovel/fazenda---sitio-3-quartos-joao-pinheiro-com-garagem-250m2-venda-RS1600000-id-2690673376/' title='Excelente Fazenda em João Pinheiro' valor='1.600.000' banheiros='2' metragem='250' quartos='3' vagas='10' />
      <CardDestaqueImoveis cidade='Jardim Ingá' imgUrl='casajardin.webp' link='https://www.vivareal.com.br/imovel/casa-3-quartos-jardim-do-inga-bairros-luziania-com-garagem-120m2-venda-RS380000-id-2689051197/' title='Ótima Casa no Jardim Ingá' valor='380.000' banheiros='2' metragem='120' quartos='3' vagas='2' />
      <CardDestaqueImoveis imgUrl='casaimg.jpeg' cidade='Jardim Ingá' link='https://wa.me/p/7546592922067166/556191010404' title='Excelente casa no Jardim Ingá' valor='150.000' banheiros='1' quartos='2' vagas='2' />
     
    </div>
     <Link
     href="/imoveis"
     className="border-2 border-yellow-600 w-fit px-8 py-3 font-[700] text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all ease-in-out  rounded mx-auto flex my-14"
   >
     Veja Nossos Imoveis
   </Link>
   </div>
  );
};
