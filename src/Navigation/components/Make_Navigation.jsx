import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import "./Make_Navigation.css"

const Make_Navigation = ({ className }) => {
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

Make_Navigation.propTypes = {
    className: PropTypes.string.isRequired,
};

export default Make_Navigation;