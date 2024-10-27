import './Form.css';
import FieldText from '../FieldText/FieldText';
import ListFloat from '../ListFloat/ListFloat';
import Button from '../Button/Button';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('Programação');
    
    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Salvou');
        console.log('Nome: ', nome);
        console.log('Cargo: ', cargo);
        console.log('Imagem: ', imagem);
        console.log('Time: ', time);
        props.aoSalvar({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        });
    }
    
    return (
        <section className="form">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <FieldText 
                    obrigatorio={true} 
                    id="nome" 
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                /> 
                <FieldText 
                    obrigatorio={true} 
                    id="cargo" 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <FieldText 
                    obrigatorio={true} 
                    id="Imagem" 
                    label="Imagem" 
                    placeholder="Digite a URL da imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListFloat 
                    label="Times" 
                    itens={["Programação", "Design", "Marketing", "Vendas"]}
                    value={time}
                    aoAlterar={valor => {
                        console.log('Time: ', valor);
                        setTime(valor)}
                    }
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}

Form.propTypes = {
    aoSalvar: PropTypes.func.isRequired,
};

export default Form;