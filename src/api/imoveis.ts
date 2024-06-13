export type Imovel = {
    id: string;
    title: string;
    description: string;
    images: string[];
    value: string;
    rooms: string;
    city: string;
    bathrooms?: string;
    garages?: string;
    area?: string;
  };

export type SearchParams = {
    title?: string,
    rooms?: string,
    minValue?: string,
    maxValue?: string
}

export async function getImoveis() {
    const response  = await fetch(`${process.env.NEXT_PUBLIC_API_URL}imoveis`)
    return (await response.json()) as Imovel[]
    
}

export async function searchImoveis(searchParams:SearchParams){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}imoveis/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchParams)
      });
      return ( await response.json()) as Imovel[];
}