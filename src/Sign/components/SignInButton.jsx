import PropTypes from 'prop-types';
import "./SignInButton.css";

const SignInButton = ({ className, handleSignIn }) => {
  return (
    <div className="Button">
      <div className={`signin-button ${className}`} onClick={handleSignIn}>
        <span className="text-wrapper">Sign in</span>
      </div>
    </div>
  );
}

SignInButton.propTypes = {
  className: PropTypes.string,
  handleSignIn: PropTypes.func.isRequired,
};

export default SignInButton;