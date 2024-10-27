import './ListFloat.css';
import PropTypes from 'prop-types';

const ListFloat = (props) => {   
    return (
        <div className = "list-float">
            <label>{props.label}</label>
            <select value={props.value} onChange={event => props.aoAlterar(event.target.value)}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
}
ListFloat.propTypes = {
    label: PropTypes.string.isRequired,
    itens: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    aoAlterar: PropTypes.func.isRequired,
};

export default ListFloat;
