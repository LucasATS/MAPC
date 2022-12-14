import { getWeather, WeatherGifs } from '../util/Listas';
import Aleatorio from '../util/Aleatorio';
import './Background.css';

const Backgorund = (props) => {
    let style = {
        background: `#fff url('./img/${props.tempo}/${Aleatorio(1, getWeather(props.tempo, WeatherGifs), 1)}.gif') center center/auto repeat`,
    }

    return (<span className='Background' style={style} />);
}

export default Backgorund;