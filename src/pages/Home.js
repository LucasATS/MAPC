import PrevisaoResumida from '../components/PrevisaoResumida';
import { Capitais } from '../util/Listas';
import { useEffect, useState } from 'react';
import Aleatorio from '../util/Aleatorio';
import './Home.css';

function Home() {

  const [capital, setCapital] = useState('Campo Grande, bra');
  useEffect(() => {
    const interval = setInterval(() => {
      setCapital(Capitais[Aleatorio(0, 26, 1)][0]);
    }, 4500);
    return () => clearInterval(interval);
  });

  return (<span>
    <PrevisaoResumida nome={capital} />
  </span>);
}

export default Home;
