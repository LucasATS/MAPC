import PrevisaoResumida from '../components/PrevisaoResumida';
import PrevisaoDetalhada from '../components/PrevisaoDetalhada';
import './Home.css';
import { WeatherEmojis } from '../util/Listas';

function Home() {

  return (<span>
    <PrevisaoResumida nome='Campo Grande, bra' />
    {/* <PrevisaoDetalhada nome='Sao paulo, bra' /> */}
  </span>);
}

export default Home;
