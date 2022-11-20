import PrevisaoDetalhada from "../components/PrevisaoDetalhada";
import { useParams } from "react-router-dom";

const PrevisaoPesquisadaDetalhada = () => {
    let { cidade } = useParams();

    return (<PrevisaoDetalhada nome={cidade} />);
}

export default PrevisaoPesquisadaDetalhada;