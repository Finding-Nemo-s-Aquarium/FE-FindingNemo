import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import "./SignInButton.css";

const SignInButton = ({ className, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoggedIn(true);
    navigate('/home');
  };

  return (
    <div className={`signin-button ${className}`} onClick={handleClick}>
      <span className="text-wrapper">Sign in</span>
    </div>
  );
}

SignInButton.propTypes = {
  className: PropTypes.string,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default SignInButton;