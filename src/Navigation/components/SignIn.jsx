import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import "./SignIn.css";

const SignIn = ({ className }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signin');
    };

    return (
        <div className="SIGN-IN">
            <div className={`text-wrapper ${className}`} onClick={handleClick}>
                <span>SIGN IN</span>
            </div>
        </div>
    );
};

SignIn.propTypes = {
    className: PropTypes.string.isRequired,
};

export default SignIn;