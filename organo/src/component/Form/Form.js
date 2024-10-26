import './Form.css';
import FieldText from '../FieldText/FieldText';

const Form = () => {
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <FieldText id="nome" label="Nome" placeholder="Digite seu nome"/> 
                <FieldText id="cargo" label="Cargo" placeholder="Digite seu cargo"/>
                <FieldText id="Imagem" label="Imagem" placeholder="Digite a URL da imagem"/>
            </form>
        </section>
    );
}

export default Form;