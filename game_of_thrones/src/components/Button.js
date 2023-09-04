import PropTypes from 'prop-types';
import noop from 'lodash/noop';

const Button = ({ onClick, disabled, text }) => {
	return (
		<button className='page-button' onClick={onClick} disabled={disabled}>
			{text}
		</button>
	);
};

Button.defaultProps = {
    text: 'Click',
    onClick: noop,
    disabled: false,
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}

export default Button;
