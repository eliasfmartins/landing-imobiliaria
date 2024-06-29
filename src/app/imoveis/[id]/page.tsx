'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useAuth } from '../../context/AuthContext';
import { parseCookies } from 'nookies';

type Imovel = {
  id: string;
  title: string;
  description: string;
  images: string[];
  rooms: string;
  value: string;
};

const ImovelDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;
  const [imovel, setImovel] = useState<Imovel | null>(null);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}imoveis/${id}`)
        .then((response) => response.json())
        .then((data) => setImovel(data.data));
    }
  }, [id]);

  const handleDelete = async () => {
    try {
      const cookies = parseCookies();
      const token = cookies.token;
      console.log(token)
      if (!token) {
        throw new Error('Token not found in cookies');
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}imoveis/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        }
      });

      if (!response.ok) {
        console.error('Error deleting resource:', response);
        throw new Error('Failed to delete resource');
      }

      router.push('/imoveis');
    } catch (error: any) {
      console.error('Error deleting resource:', error);
    }
  };

  if (!imovel) {
    return <div className=' min-h-[82.8vh]'>Loading...</div>;
  }

  return (
    <div className="container mx-auto pt-36  min-h-[82.8vh]">
      <h1 className="text-2xl font-bold mb-4">{imovel.title}</h1>
      <Carousel
        responsive={{
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
          },
        }}
      >
        {imovel.images.map((img, index) => (
          <Image
            key={index}
            src={img.startsWith('http') ? img : `/${img}`}
            alt={`Imagem ${index}`}

            width={500}
            height={300}
            className='min-w-[700px] min-h-[500px]'
          />
        ))}
      </Carousel>
      <p>{imovel.description}</p>
      <p>Quartos: {imovel.rooms}</p>
      <p>Valor: {imovel.value}</p>
      {isAuthenticated && (
        <div className="mt-4">
          <Link href={`/imoveis/${id}/editar`} passHref>
            <button className="bg-blue-500 text-white p-2 rounded mr-2">
              Editar
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white p-2 rounded"
          >
            Deletar
          </button>


        </div>

      )}
      <button
        onClick={() => router.back()}
        className="bg-gray-400 text-white p-2 rounded"
      >
        Voltar
      </button>
    </div>
  );
};

export default ImovelDetails;
