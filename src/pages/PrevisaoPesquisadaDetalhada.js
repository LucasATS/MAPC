import PrevisaoDetalhada from "../components/PrevisaoDetalhada";
import { useParams } from "react-router-dom";

const PrevisaoPesquisadaDetalhada = () => {
    let { cidade } = useParams();
    let { reload } = useParams();

    let desativarValidacao = false;

    if (reload !== undefined) {
        desativarValidacao = true;
    }

    return (<PrevisaoDetalhada validacao={desativarValidacao} nome={cidade} />);
}

export default PrevisaoPesquisadaDetalhada;