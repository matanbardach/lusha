import PropTypes from 'prop-types';

const Headers = ({text}) => {
    return (
        <div className='page-header'>
            <h1>{text}</h1>
        </div>
    );
}

Headers.propTypes = {
    text: PropTypes.string.isRequired
}

export default Headers;