import { Header } from './components/header/index';
import { playfair } from './layout';
import { roboto } from './layout';

export default function Home() {
  return (
    <main >
      <Header />
      <div className="flex items-center justify-center text-center " style={{ backgroundImage: 'linear-gradient(to bottom, #0001, #000), url(/tower.jpg)', filter: 'brightness(150%)', backgroundSize: 'cover', backgroundPosition: 'center', height: 'calc(100vh - 80px)' }}>
        <div className='flex flex-col gap-y-6'>
          <h2 className={`${playfair.className} text-7xl font-[700] text-white shadow-b-2xl shadow-indigo-500/50  tracking-widest`}>MARTINS & SILVA</h2>
          <h3 className={`${roboto.className} text-4xl font-[200] text-white tracking-widest`}>Escritório Imobiliário</h3>
        </div>
      </div>

    </main>
  );
}