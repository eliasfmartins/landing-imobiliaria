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
    area: '',
    phone: '',
    condominium: '',
    highlight: false,
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
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setImovel(prevImovel => ({
        ...prevImovel,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else {
      setImovel(prevImovel => ({
        ...prevImovel,
        [name]: value
      }));
    }
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
    console.log(imovel);
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
                  className={`absolute left-3  text-gray-500 transition-all duration-200 ease-in-out text-xs -top-2.5 bg-white px-1`}
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
          Salvar
        </button>
      </form>
    </div>
  );

};

export default EditarImovel;
