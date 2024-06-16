import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import "./Make.css"

const Make = ({ className }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/make');
    };

    return (
        <div className="MAKE">
            <div className={`text-wrapper ${className}`} onClick={handleClick}>MAKE</div>
        </div>
    );
};

Make.propTypes = {
    className: PropTypes.string.isRequired,
};

export default Make;
