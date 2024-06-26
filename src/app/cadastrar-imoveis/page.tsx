'use client';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import { useState, ChangeEvent, KeyboardEvent, FormEvent } from 'react';

const CriarImovel = () => {
  const router = useRouter();
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

    // Validação simples
    if (!imovel.title || !imovel.description || !imovel.value || !imovel.city || !imovel.rooms) {
      console.error("Todos os campos obrigatórios devem ser preenchidos.");
      return;
    }

    console.log("Enviando dados:", imovel); // Log dos dados enviados
    const cookies = parseCookies();
    const token = cookies.token;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}imoveis`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`${token}`,
      },
      body: JSON.stringify(imovel)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro na resposta do servidor:", errorData); // Log do erro da resposta
    } else {
      const data = await response.json();
      console.log("Resposta do servidor:", data); // Log da resposta do servidor
      router.push('/imoveis');
    }
  };

  return (
    <div className="container mx-auto pt-6">
      <h1 className="text-2xl font-bold mb-4">Criar Imóvel</h1>
      <form onSubmit={handleSubmit} className='flex flex-col flex-1 mb-6'>
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
            className="border p-2 mb-2 w-full"
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
          Criar
        </button>
      </form>
    </div>
  );
};

export default CriarImovel;
