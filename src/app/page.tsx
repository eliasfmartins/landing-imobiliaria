import Link from 'next/link';
import { Header } from './components/header/index';
import { playfair } from './layout';
import { roboto } from './layout';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex items-center justify-center text-center " style={{ backgroundImage: 'linear-gradient(to bottom, #0001, #000), url(/tower.jpg)', filter: 'brightness(150%)', backgroundSize: 'cover', backgroundPosition: 'center', height: 'calc(100vh - 80px)' }}>
        <div className='flex flex-col gap-y-6'>
          <h2 className={`${playfair.className} text-7xl font-[700] text-white tracking-widest`} style={{ textShadow: '5px 1px 4px rgba(0, 0, 0, 0.5)' }}>MARTINS & SILVA</h2>
          <h3 className={`${roboto.className} text-4xl font-[200] text-white tracking-widest`} style={{ textShadow: '5px 1px 4px rgba(0, 0, 0, 0.5)' }}>Escritório Imobiliário</h3>
        </div>
      </div>
      <div className='min-h-[35vh] flex max-w-[1200px] mx-auto'>
        <div className='flex flex-col space-y-10'>
          <h2 className='w-96 text-3xl'>Um Lançamento Com Excelência E Qualidade</h2>
          <p className='font-extralight text-md'>Oportunidade única para quem tem bom gosto e quer morar bem</p>
          <Link href=""  className='border-4 border-cyan-600 border-solid w-40 px-4 py-2 text-center rounded-sm hover:bg-cyan-900 hover:border-cyan-900 hover:text-white font-medium transition duration-300 delay-300 hover:delay-300'>Plantas</Link>
        </div>
      </div>

    </main>
  );
}