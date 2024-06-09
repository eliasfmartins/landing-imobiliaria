// pages/imoveis/criar.tsx
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CriarImovel = () => {
    const router = useRouter();
    const [imovel, setImovel] = useState({
      title: '',
      description: '',
      images: [],
      rooms: '',
      value: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setImovel({ ...imovel, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await fetch('http://localhost:3333/imoveis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(imovel)
      });
      router.push('/imoveis');
    };
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Criar Imóvel</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={imovel.title}
            onChange={handleChange}
            placeholder="Título"
            className="border p-2 mb-2"
          />
          <textarea
            name="description"
            value={imovel.description}
            onChange={handleChange}
            placeholder="Descrição"
            className="border p-2 mb-2"
          />
          <input
            type="text"
            name="rooms"
            value={imovel.rooms}
            onChange={handleChange}
            placeholder="Quartos"
            className="border p-2 mb-2"
          />
          <input
            type="text"
            name="value"
            value={imovel.value}
            onChange={handleChange}
            placeholder="Valor"
            className="border p-2 mb-2"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Criar
          </button>
        </form>
      </div>
    );
  };
  
  export default CriarImovel;
