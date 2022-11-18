import { Link } from 'react-router-dom';
import { TratamentoDeErro, GetClima } from '../util/GetClima.js';
import { getEmoji } from '../util/Listas';
import './Previsao.css';

function PrevisaoResumida(props) {

  const nome = props.nome;

  const clima = GetClima(nome + ', bra');
  const tempo = TratamentoDeErro(clima);

  return (
    <Link to={`/${nome}`}
      className='Painel-PrevisaoResumida painel-center neumorphism center col transition'>
      <h2 className='previsao-emoji'> {getEmoji(tempo)} </h2>
      <h1> {Math.round(clima?.main?.temp)}°</h1>
      <span>
        <h2> <b> {clima?.name} </b> </h2>
        <h3> {tempo}  </h3>
      </span>
    </Link>);
}

export default PrevisaoResumida;
