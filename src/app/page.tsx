import { Header } from './components/header/index';
import { playfair } from './layout';
import { roboto } from './layout';

export default function Home() {
  return (
    <main >
      <Header />
      <div className="flex items-center justify-center text-center " style={{ backgroundImage: 'linear-gradient(to bottom, #0001, #000), url(/tower.jpg)', filter: 'brightness(150%)', backgroundSize: 'cover', backgroundPosition: 'center', height: 'calc(100vh - 80px)' }}>
        <div className='flex flex-col gap-y-6'>
          <h2 className={`${playfair.className} text-7xl font-[700] text-white tracking-widest`} style={{ textShadow: '5px 1px 4px rgba(0, 0, 0, 0.5)' }}>MARTINS & SILVA</h2>
          <h3 className={`${roboto.className} text-4xl font-[200] text-white tracking-widest`} style={{ textShadow: '5px 1px 4px rgba(0, 0, 0, 0.5)' }}>Escritório Imobiliário</h3>
        </div>
      </div>
      <div className='min-h-[35vh] flex'>
        <div className='flex flex-col '>
          <h2>Um Lançamento Com <br /> Excelência E Qualidade</h2>

          <p>Oportunidade única para quem tem bom gosto e quer morar bem</p>

          <button className=' border border-b-gray-700 border-solid  '>Alguma coisa</button>


        </div>
      </div>

    </main>
  );
}