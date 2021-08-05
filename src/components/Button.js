import PropTypes from 'prop-types';

function Button({ text, color, onClick }) {
    return (
        <button onClick={onClick} className="btn" style={{backgroundColor: color}}>{text}</button>
    )
}


Button.defaultProps = {
    text: 'Default text'
}


Button.propType = {
    text: PropTypes.String
}

export default Button
