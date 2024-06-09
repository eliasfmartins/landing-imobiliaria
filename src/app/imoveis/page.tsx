'use client'
import { useEffect, useState } from "react";
import { CardAbout } from "../components/CardAbout";

const ImoveisPage = () => {
  const [imoveis, setImoveis] = useState([]);
  const [searchParams, setSearchParams] = useState({
    title: "",
    rooms: "",
    minValue: "",
    maxValue: ""
  });

  useEffect(() => {
    fetch("http://localhost:3333/imoveis")
      .then(response => response.json())
      .then(data => setImoveis(data.data));
  }, []);

  const handleSearch = async () => {
    const response = await fetch("http://localhost:3333/imoveis/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(searchParams)
    });
    const data = await response.json();
    setImoveis(data.data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Listagem de Imóveis</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Título"
          value={searchParams.title}
          onChange={(e) => setSearchParams({ ...searchParams, title: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Quartos"
          value={searchParams.rooms}
          onChange={(e) => setSearchParams({ ...searchParams, rooms: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Valor Mínimo"
          value={searchParams.minValue}
          onChange={(e) => setSearchParams({ ...searchParams, minValue: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Valor Máximo"
          value={searchParams.maxValue}
          onChange={(e) => setSearchParams({ ...searchParams, maxValue: e.target.value })}
          className="border p-2 mr-2"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
          Buscar
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {imoveis.map((imovel) => (
          <CardAbout
            key={imovel.id}
            id={imovel.id}
            title={imovel.title}
            subTitle={imovel.description}
            imgSrc={imovel.images[0]}
            textBtn="Ver Mais"
          />
        ))}
      </div>
    </div>
  );
};

export default ImoveisPage;
