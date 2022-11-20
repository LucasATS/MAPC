import { useState } from "react";
import axios from 'axios';

let oldCidade = '';
const GetClima = (cidade, desativarValidacao = false) => {

    const keyID = '3c11fa9814f69cad929d6d1f7136afbc';
    const [dados, setDados] = useState([]);

    // Faz a API rodar só uma vez, ela só ira rodar se tiver uma mudança de cidade
    if (cidade !== oldCidade) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${keyID}&units=metric`)
            .then(res => {
                setDados(res.data);
                oldCidade = cidade;
            });
        console.log('Pesquisando por: New: ' + cidade + ', Old: ' + oldCidade);
    } else {
        console.log('BLOQUEI: ' + desativarValidacao)
    }

    return dados;
}

const TratamentoDeErro = tempo => {
    try {
        tempo = Object.entries(tempo?.weather);
        tempo = tempo[0][1]?.main;
    }
    catch (err) {
        tempo = tempo?.weather;
    }

    return tempo;
}

export { TratamentoDeErro, GetClima };