import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import "./SignIn_Navigation.css";

const SignIn_Navigation = ({ className }) => {
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

SignIn_Navigation.propTypes = {
    className: PropTypes.string.isRequired,
};

export default SignIn_Navigation;