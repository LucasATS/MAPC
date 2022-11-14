import { useState } from "react";
import axios from 'axios';

const GetClima = nome => {
    const keyID = '1d3eab340d211f75719834e8e5b197e2';
    const keyID2 = 'fceb65c245b0ce9b0442a9d0ab3497e1';

    const [dados, setDados] = useState([]);
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${nome}&appid=${keyID2}&units=metric`)
    .then(res => {
        setDados(res.data);
    });

    return dados;
}

export default GetClima;