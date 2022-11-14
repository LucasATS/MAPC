import { useState } from "react";
import axios from 'axios';

const GetClima = nome => {
    const keyID = '3c11fa9814f69cad929d6d1f7136afbc';
    const keyID2 = '{API_KEY}';

    const [dados, setDados] = useState([]);
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${nome}&appid=${keyID2}&units=metric`)
    .then(res => {
        setDados(res.data);
    });

    return dados;
}

export default GetClima;