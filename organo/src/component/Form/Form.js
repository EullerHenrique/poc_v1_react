import './Form.css';
import FieldText from '../FieldText/FieldText';
import ListFloat from '../ListFloat/ListFloat';
import Button from '../Button/Button';

const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log('Salvou');
}

const Form = () => {
    return (
        <section className="form">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <FieldText obrigatorio="true" id="nome" label="Nome" placeholder="Digite seu nome"/> 
                <FieldText obrigatorio="true" id="cargo" label="Cargo" placeholder="Digite seu cargo"/>
                <FieldText obrigatorio="true" id="Imagem" label="Imagem" placeholder="Digite a URL da imagem"/>
                <ListFloat label="Times" itens={["Programação", "Design", "Marketing", "Vendas"]}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}

export default Form;