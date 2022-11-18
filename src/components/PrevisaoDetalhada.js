import { GetClima, TratamentoDeErro } from '../util/GetClima.js';
import { getEmoji } from '../util/Listas';
import './Previsao.css';

const PrevisaoDetalhada = props => {
  const clima = GetClima(props.nome + ', bra');
  const tempo = TratamentoDeErro(clima);

  return (
      <span className='pd-container transition'>

        <span className='Painel-PrevisaoDetalhada pd-neumorphism center col'>
          <h3 className='previsao-emoji'> 🥵 </h3>
          <h3> Sensação Térmica </h3>
          <h3> {Math.round(clima?.main?.feels_like)}° </h3>
        </span>

        <span className='Painel-PrevisaoDetalhada pd-neumorphism center col'>
          <h3 className='previsao-emoji'> {getEmoji(tempo)} </h3>
          <h1> {Math.round(clima?.main?.temp)}°</h1>
          <span>
            <h2> <b> {clima?.name} </b> </h2>
            <h3> {tempo}  </h3>
          </span>
        </span>

        <span className='Painel-PrevisaoDetalhada pd-neumorphism center col'>
          <h3 className='previsao-emoji'> 🌡️ </h3>
          <h3> Máx <span style={{ color: 'red' }}> ↑ </span> {Math.round(clima?.main?.temp_max)}° </h3>
          <h3> Mín <span style={{ color: 'blue' }}> ↓ </span> {Math.round(clima?.main?.temp_min)}° </h3>
        </span>

        <span className='Painel-PrevisaoDetalhada pd-neumorphism center col'>
          <h3 className='previsao-emoji'> 📈 </h3>
          <h3> Pressão </h3>
          <h3> {clima?.main?.pressure}hPa </h3>
        </span>

        <span className='Painel-PrevisaoDetalhada pd-neumorphism center col'>
          <h3 className='previsao-emoji'> 💧 </h3>
          <h3> Umidade </h3>
          <h3> {clima?.main?.humidity}% </h3>
        </span>

        <span className='Painel-PrevisaoDetalhada pd-neumorphism center col'>
          <h3 className='previsao-emoji'> 🌬️ </h3>
          <h3> {clima?.wind?.speed}km/h </h3>
          <h3> {clima?.wind?.deg}° </h3>
        </span>
    </span>);
}

export default PrevisaoDetalhada;
