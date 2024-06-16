import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import "./SignUpButton.css";

const SignUpButton = ({ className, handleSignUp }) => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    handleSignUp();
    navigate('/signin');
  };

  return (
    <div className={`signup-button ${className}`} onClick={handleSignUpClick}>
      <span className="text-wrapper">Sign up</span>
    </div>
  );
};

SignUpButton.propTypes = {
  className: PropTypes.string,
  handleSignUp: PropTypes.func.isRequired,
};

export default SignUpButton;