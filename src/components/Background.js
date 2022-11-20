import './Background.css';

const Backgorund = (props) => {
    let style = {
        background: `#fff url('./img/${props.tempo}/1.gif') center bottom/auto repeat padding-box`,
    }

    return ( <span className='Background' style={style} /> );
}

export default Backgorund;