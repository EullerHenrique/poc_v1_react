import './FieldText.css';
import PropTypes from 'prop-types';

const FieldText = (props) => {

    const aoDigitar = (event) => {
       props.aoAlterar(event.target.value);
    }

    return (
        <div className="field-text"> 
            <label htmlFor={props.id}>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required = {props.obrigatorio} type="text" id={props.id} placeholder={props.placeholder}/>
        </div>
    )
}
FieldText.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    obrigatorio: PropTypes.bool,
    valor: PropTypes.string,
    aoAlterar: PropTypes.func.isRequired,
};

export default FieldText;
