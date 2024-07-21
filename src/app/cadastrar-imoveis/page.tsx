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
    area: '',
    phone: '',
    condominium: '',
    highlight: false
  });

  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value, type, checked } = e.target as HTMLInputElement;
  setImovel(prevImovel => ({
    ...prevImovel,
    [name]: type === 'checkbox' ? checked : value
  }));
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
        'Authorization': `${token}`,
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
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Criar Imóvel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'title', type: 'text', placeholder: 'Título' },
            { name: 'rooms', type: 'number', placeholder: 'Quartos' },
            { name: 'value', type: 'number', placeholder: 'Valor' },
            { name: 'city', type: 'text', placeholder: 'Cidade' },
            { name: 'bathrooms', type: 'number', placeholder: 'Banheiros' },
            { name: 'garages', type: 'number', placeholder: 'Vagas' },
            { name: 'area', type: 'number', placeholder: 'Metragem' },
            { name: 'phone', type: 'text', placeholder: 'Telefone' },
            { name: 'condominium', type: 'text', placeholder: 'Condomínio' }
          ].map(({ name, type, placeholder }) => (
            <div key={name} className="relative">
              <input
                type={type}
                name={name}
                value={(imovel as any)[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              {((imovel as any)[name]) && (
                <label
                  className={`absolute left-3 text-gray-500 transition-all duration-200 ease-in-out text-xs -top-2.5 bg-white px-1`}
                >
                  {placeholder}
                </label>
              )}
            </div>
          ))}
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
        <div className="flex items-center">
          <input
            type="checkbox"
            name="highlight"
            checked={imovel.highlight}
            onChange={handleChange}
            id="highlight"
            className="mr-2"
          />
          <label htmlFor="highlight" className="text-gray-700">Destaque</label>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Criar
        </button>
      </form>
    </div>
  );
};

export default CriarImovel;
