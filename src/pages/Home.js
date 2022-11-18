import PrevisaoResumida from '../components/PrevisaoResumida';
import PrevisaoDetalhada from '../components/PrevisaoDetalhada';
import './Home.css';
import { Capitais } from '../util/Listas';
import { useEffect, useState } from 'react';
import Aleatorio from '../util/Aleatorio';

function Home() {

  const [capital, setCapital] = useState('Campo Grande, bra');
  useEffect(() => {
    const interval = setInterval(() => {
      setCapital(Capitais[Aleatorio(0, 26, 1)][0]);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (<span>
    <PrevisaoResumida nome={capital} />
  </span>);
}

export default Home;
