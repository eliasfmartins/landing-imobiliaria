import React from 'react'
import CardImoveis from '../CardImoveis'

export const ImoveisSection = () => {
  return (
    <div className=" mt-[80px] flex sm:justify-between items-center w-full/20 flex-wrap mb-[80px] p-4  justify-center gap-y-8">
    <CardImoveis  />
    <CardImoveis />
    <CardImoveis />
  </div>
  )
}
