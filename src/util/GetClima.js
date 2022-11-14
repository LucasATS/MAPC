import { useState } from "react";
import axios from 'axios';

const GetClima = id => {
    const keyID = '1d3eab340d211f75719834e8e5b197e2';

    const [dados, setDados] = useState([]);
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${keyID}&units=metric`)
    .then(res => {
        setDados(res.data);
    });

    console.log('TESTE');

    return dados;
}

export default GetClima;