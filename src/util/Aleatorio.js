/*
  de = min
  ate = max
  quant = valores para sortear
*/
const Aleatorio = (de, ate, quant) => {

  de = parseInt(de);
  ate = parseInt(ate) + 1;
  quant = parseInt(quant) - 1;

  let results = [];

  for (let index = 0; index <= quant; index++) {
    var sort = Math.random(), valor = Math.floor(sort * (ate - de)) + de;
    results.push(valor);
  }

  // console.log(
  //   'SISTEMA DE ALEATÓRIO \n' +
  //   'de: ' + de + '\n' +
  //   'ate: ' + ate + '\n' +
  //   'quant: ' + quant + '\n' +
  //   'results: ' + results
  // );

  return results;
}

export default Aleatorio;