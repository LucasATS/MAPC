import PrevisaoResumida from '../components/PrevisaoResumida';
import PrevisaoDetalhada from '../components/PrevisaoDetalhada';
import './Home.css';
import Capitais from '../util/ListaCidades';

function Home() {

  console.log(Capitais[0][1])

  return (<span>
    <PrevisaoResumida nome='Campo Grande, bra' />
    {/* <PrevisaoDetalhada nome='Sao paulo, bra' /> */}
  </span>);
}

export default Home;
