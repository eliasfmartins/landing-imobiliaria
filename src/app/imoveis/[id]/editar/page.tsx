'use client';
import { useRouter } from 'next/navigation';
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
      fetch(`http://localhost:3333/imoveis/${id}`)
        .then(response => response.json())
        .then(data => setImovel(data.data));
    }
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setImovel({ ...imovel, [name]: value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  const handleImageKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && imageUrl.trim() !== '') {
      setImovel({ ...imovel, images: [...imovel.images, imageUrl] });
      setImageUrl('');
      e.preventDefault();
    }
  };

  const handleRemoveImage = (index: number) => {
    setImovel({
      ...imovel,
      images: imovel.images.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch(`http://localhost:3333/imoveis/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(imovel)
    });
    router.push(`/imoveis/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Imóvel</h1>
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
        <input
          type="text"
          name="city"
          value={imovel.city}
          onChange={handleChange}
          placeholder="Cidade"
          className="border p-2 mb-2"
        />
        <input
          type="text"
          name="bathrooms"
          value={imovel.bathrooms}
          onChange={handleChange}
          placeholder="Banheiros"
          className="border p-2 mb-2"
        />
        <input
          type="text"
          name="garages"
          value={imovel.garages}
          onChange={handleChange}
          placeholder="Vagas"
          className="border p-2 mb-2"
        />
        <input
          type="text"
          name="area"
          value={imovel.area}
          onChange={handleChange}
          placeholder="Metragem"
          className="border p-2 mb-2"
        />
        <div>
          <input
            type="text"
            value={imageUrl}
            onChange={handleImageChange}
            onKeyPress={handleImageKeyPress}
            placeholder="URL da Imagem (pressione Enter para adicionar)"
            className="border p-2 mb-2"
          />
          <ul>
            {imovel.images.map((image, index) => (
              <li key={index} className="flex items-center">
                {image}
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="ml-2 text-red-500"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default EditarImovel;
