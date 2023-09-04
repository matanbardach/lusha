import PropTypes from 'prop-types';

const Footer = ({children}) => {
    return (
        <div className="page-footer">
            {children}
        </div>
    );
}

Footer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Footer;