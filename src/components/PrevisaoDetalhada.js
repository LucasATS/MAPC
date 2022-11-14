import './PrevisaoResumida.css';
import GetClima from '../util/GetClima.js';
import ObjToArray from '../util/ObjToArray';

function PrevisaoResumida(props) {
  const clima = GetClima(props.nome);
  let tempo = ObjToArray(clima);

  return (
  <span>
    <h1> { clima?.main?.temp }°</h1>
    <span>
      <h2> <b> { clima?.name } </b> </h2>
      <h3> { tempo }  </h3>
    </span>
    
    <h2> Previsão: </h2>
    <h3> {clima?.main?.feels_like} </h3>
    <h3> {clima?.main?.temp_min} </h3>
    <h3> {clima?.main?.temp_max} </h3>
    <h3> {clima?.main?.pressure} </h3>
    <h3> {clima?.main?.humidity} </h3>

    <h2> Vento: </h2>
    <h3> {clima?.wind?.speed} </h3>
    <h3> {clima?.wind?.deg} </h3>
    <h3> {clima?.wind?.gust} </h3>
  </span>);
}

export default PrevisaoResumida;
