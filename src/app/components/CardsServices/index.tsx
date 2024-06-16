import React from 'react'
import { CardAbout } from '../CardAbout'

export const CardsServices = () => {
  return (
    <div className=" max-w-[1200px] mx-auto mt-0">
        <div className=" mt-[80px] flex justify-evenly items-center w-full flex-wrap mb-[80px] p-4 gap-y-12">
          <CardAbout
          imgSrc="simule.svg"
          subTitle="Faça uma simulação de crédito para a compra do seu novo imóvel."
          textBtn=" Simular financiamento"
          title=" Simulamos seu finaciamento" id={''}          />
          <CardAbout
            imgSrc="find.svg"
            title="Encontramos seu novo lar"
            subTitle="  Nossa equipe te auxilia a encontrar seu imóvel com muita
              facilidade e segurança."
            textBtn="Saiba mais"
            id={''}
          />
          <CardAbout
          imgSrc="intermediacao.svg"
          subTitle=" Acompanhamos todo o processo de compra até a entrega da sua chave."
          title="Intermediação de todo o processo"
          textBtn="Conheça todas as etapas" id={''}          />
          <CardAbout
          imgSrc="talk.svg"
          subTitle="Temos uma equipe pronta para realizar a sua maior conquista."
          textBtn=" Fale conosco"
          title="Fale com seu corretor" id={''}          />
        </div>
      </div>
  )
}
