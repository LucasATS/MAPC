import './PrevisaoResumida.css';
import GetClima from '../util/GetClima.js';
import ObjToArray from '../util/ObjToArray';

function PrevisaoResumida() {
  const clima = GetClima('3467747');
  let tempo = ObjToArray(clima);

  return (
  <span>
    <h1> { clima?.main?.temp }°</h1>
    <span>
      <h2> <b> { clima?.name } </b> </h2>
      <h3> { tempo }  </h3>
    </span>
  </span>);
}

export default PrevisaoResumida;
