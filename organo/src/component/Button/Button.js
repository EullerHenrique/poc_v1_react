import './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button className="button">
            {props.children}
        </button>
    );
}
Button.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Button;
