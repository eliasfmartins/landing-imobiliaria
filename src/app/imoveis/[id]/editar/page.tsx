'use client';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import { useEffect, useState, ChangeEvent, KeyboardEvent, FormEvent } from 'react';

const EditarImovel = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;
  const [imovel, setImovel] = useState({
    title: '',
    description: '',
    images: [] as string[],
    rooms: '',
    value: '',
    city: '',
    bathrooms: '',
    garages: '',
    area: ''
  });

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}imoveis/${id}`)
        .then(response => response.json())
        .then(data => setImovel(data.data))
        .catch(error => console.error("Erro ao carregar os dados:", error));
    }
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setImovel(prevImovel => ({ ...prevImovel, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  const handleImageKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && imageUrl.trim() !== '') {
      setImovel(prevImovel => ({
        ...prevImovel,
        images: [...prevImovel.images, imageUrl]
      }));
      setImageUrl('');
      e.preventDefault();
    }
  };

  const handleRemoveImage = (index: number) => {
    setImovel(prevImovel => ({
      ...prevImovel,
      images: prevImovel.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cookies = parseCookies();
    const token = cookies.token;
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}imoveis/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
      },
      body: JSON.stringify(imovel)
    })
    .then(response => response.json())
    .then(() => router.push(`/imoveis/${id}`))
    .catch(error => console.error("Erro ao atualizar o imóvel:", error));
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Editar Imóvel</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            value={imovel.title}
            onChange={handleChange}
            placeholder="Título"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="rooms"
            value={imovel.rooms}
            onChange={handleChange}
            placeholder="Quartos"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="value"
            value={imovel.value}
            onChange={handleChange}
            placeholder="Valor"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="city"
            value={imovel.city}
            onChange={handleChange}
            placeholder="Cidade"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="bathrooms"
            value={imovel.bathrooms}
            onChange={handleChange}
            placeholder="Banheiros"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="garages"
            value={imovel.garages}
            onChange={handleChange}
            placeholder="Vagas"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="area"
            value={imovel.area}
            onChange={handleChange}
            placeholder="Metragem"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          name="description"
          value={imovel.description}
          onChange={handleChange}
          placeholder="Descrição"
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-32 resize-none"
        />
        <div>
          <input
            type="text"
            value={imageUrl}
            onChange={handleImageChange}
            onKeyPress={handleImageKeyPress}
            placeholder="URL da Imagem (pressione Enter para adicionar)"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <ul className="mt-2 space-y-2">
            {imovel.images.map((image, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
                <span>{image}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default EditarImovel;
