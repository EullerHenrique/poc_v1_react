import './FieldText.css';

const FieldText = (props) => {
    return (
        <div className="field-text"> 
            <label htmlFor={props.id}>{props.label}</label>
            <input type="text" id={props.id} placeholder={props.placeholder}/>
        </div>
    )
}

export default FieldText;