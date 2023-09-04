import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip';
import LogoTest from '../images/info-icon.png';
import { useMemo } from 'react';

const Card = ({ fullName, title, family, imageUrl }) => {
    const tooltipText = useMemo(() => `${fullName}, ${title} <br> House: ${family}`, [family, fullName, title]);
	return (
		<div className='got-card'>
			<img src={imageUrl} alt='card' className='characters-image'/>
			<div className='card-bottom'>
				<div className='name'>{fullName}</div>
                <img data-tooltip-id="my-tooltip" data-tooltip-html={tooltipText} src={LogoTest} className='card-info-icon' alt='card-info-icon'/>
                <Tooltip id="my-tooltip" className="tooltip"/>
			</div>
		</div>
	);
};

Card.defaultProps = {
	fullName: '',
	title: '',
	family: '',
	imageUrl: ''
}
Card.propTypes = {
	fullName: PropTypes.string,
	title: PropTypes.string,
	family: PropTypes.string,
	imageUrl: PropTypes.string
}
export default Card;
