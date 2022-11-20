import { Link } from 'react-router-dom';
import { TratamentoDeErro, GetClima } from '../util/GetClima.js';
import { getWeather, WeatherEmojis } from '../util/Listas';
import Backgorund from './Background.js';
import './Previsao.css';

function PrevisaoResumida(props) {

  const clima = GetClima(props.nome + ', bra');
  const tempo = TratamentoDeErro(clima);

  return (
    <span>
      <Backgorund tempo={tempo} />

      <Link to={`/${props.nome.replace(', bra', '')}`}
        className='Painel-PrevisaoResumida painel-center neumorphism center col transition'>
        <h2 className='previsao-emoji'> {getWeather(tempo, WeatherEmojis)} </h2>
        <h1> {Math.round(clima?.main?.temp)}°</h1>
        <span>
          <h2> <b> {clima?.name} </b> </h2>
          <h3> {tempo}  </h3>
        </span>
      </Link>

    </span>
  );
}

export default PrevisaoResumida;
