import './FieldText.css';

const FieldText = () => {
    return (
        <div className="field-text"> 
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" placeholder="Digite seu nome"/>
        </div>
    )
}

export default FieldText;