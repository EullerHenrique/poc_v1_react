import './FieldText.css';
import PropTypes from 'prop-types';

const FieldText = (props) => {
    return (
        <div className="field-text"> 
            <label htmlFor={props.id}>{props.label}</label>
            <input required = {props.obrigatorio} type="text" id={props.id} placeholder={props.placeholder}/>
        </div>
    )
}
FieldText.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    obrigatorio: PropTypes.bool,
};

export default FieldText;
