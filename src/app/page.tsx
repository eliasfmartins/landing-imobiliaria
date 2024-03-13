import { Header } from './components/header/index';

export default function Home() {
  return (
    <main >
      <Header />
      <div className="relative h-[85vh] bg-gradient-to-t from-black to-transparent z-10 bg-bac" >
        <img src="/tower.jpg" alt="Tower" className="absolute inset-0 object-cover w-full h-full z-0" />
      </div>
      <div className="relative h-[85vh] bg-gradient-to-t from-black to-transparent z-10" >
        <img src="/tower.jpg" alt="Tower" className="absolute inset-0 object-cover w-full h-full" />
      </div>
      <div className='container'>Pao</div>
    </main>
  );
}
