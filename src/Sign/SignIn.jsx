import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import BackToHome from "./components/BackToHome";
import SignInButton from "./components/SignInButton";
import "./SignIn.css";

const SignIn = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    setIsLoggedIn(true);
    navigate('/home');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="screen">
      <div className="overlap">

        <div className="signin-group">

          <div className="top-format">
            <img className="clownfish" alt="Clownfish" src="img/logo_clownfish.png" />
            <div className="FINDINGNEMO-text">FINDING NEMO</div>
            <div className="Signin-text">Sign in</div>
          </div>

          <div className="NAME">
            <div className="NAME-text">NAME</div>
            <input className="input-box" type="text" id="nameInput" name="name" placeholder="Enter your name" required />
          </div>

          <div className="PASSWORD">
            <div className="PASSWORD-text">PASSWORD</div>
            <input className="input-box" type="password" id="passwordInput" name="password" placeholder="Enter your password" required />
          </div>

          <SignInButton className="SIGNIN-instance" handleSignIn={handleSignIn} />

          <div className="dont-have-an-account">
            <span>Don&apos;t have an account? </span>
            <span className="signup-link" onClick={handleSignUp}>Sign up</span>
          </div>

        </div>

        <img className="sign-goldfish-rectangle" alt="sign-goldfish" src="img/sign_goldfish.jpg" />
        
        <div className="BACKTO">
          <BackToHome className="back-to-home-instance" property1="default" />
        </div>

      </div>
    </div>
  );
};

SignIn.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default SignIn;