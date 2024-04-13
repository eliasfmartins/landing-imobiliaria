import React from 'react';
import CardImoveis from '../CardImoveis';

export const ImoveisSection = () => {
  return (
    <div className="mt-[80px] flex sm:justify-between items-center w-full/20 flex-wrap mb-[80px] p-4 justify-center gap-y-8  ">
      <CardImoveis cidade='João Pinheiro' imgUrl='fazenda.jpeg' link='https://www.vivareal.com.br/imovel/fazenda---sitio-3-quartos-joao-pinheiro-com-garagem-250m2-venda-RS1600000-id-2690673376/' title='Excelente Fazenda em João Pinheiro' valor='1.600.000' banheiros='2' metragem='250' quartos='3' vagas='10' />
      <CardImoveis cidade='Jardim Ingá' imgUrl='casajardin.webp' link='https://www.vivareal.com.br/imovel/casa-3-quartos-jardim-do-inga-bairros-luziania-com-garagem-120m2-venda-RS380000-id-2689051197/' title='Ótima Casa no Jardim Ingá' valor='380.000' banheiros='2' metragem='120' quartos='3' vagas='2' />
      <CardImoveis imgUrl='casaimg.jpeg' cidade='Jardim Ingá' link='https://wa.me/p/7546592922067166/556191010404' title='Excelente casa no Jardim Ingá' valor='150.000' banheiros='1' quartos='2' vagas='2' />
    </div>
  );
};
