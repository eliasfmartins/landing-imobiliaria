import { Header } from './components/header/index';

export default function Home() {
  return (
    <main >
      <Header />
      <div className="" style={{ backgroundImage: 'linear-gradient(to bottom, #0001, #000), url(/tower.jpg)', filter: 'brightness(150%)', backgroundSize: 'cover', backgroundPosition: 'center', height: 'calc(100vh - 76px)' }}>
        <h2>oi</h2>
      </div>

    </main>
  );
}