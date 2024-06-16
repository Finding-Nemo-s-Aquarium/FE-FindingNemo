import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import DonTHaveAn from './components/DonTHaveAn';
import BackToHome from "./components/BackToHome";
import SignInButton from "./components/SignInButton";
import "./SignIn.css";

const SignIn = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    setIsLoggedIn(true);
    navigate('/home');
  };

  return (
    <div className="screen">
      <div className="overlap-wrapper">
        <div className="overlap">

          <div className="signin-format">

            <div className="format-top">
              <img className="clownfish" alt="Clownfish" src="img/logo_clownfish.png" />
              <div className="FINDINGNEMO-text">FINDING NEMO</div>
              <div className="Signin-text">Sign in</div>
              <DonTHaveAn className="dont-have-an-account" property1="default" />
            </div>


            <div className="ID">
              <div className="ID-text">ID</div>
              <input className="input-box" type="email" id="emailInput" name="email" placeholder="example@example.com" required />
            </div>

            <div className="PASSWORD">
              <div className="PASSWORD-text">PASSWORD</div>
              <input className="input-box" type="password" id="passwordInput" name="password" placeholder="Enter your password" required />
            </div>

            <SignInButton className="SIGNIN-instance" setIsLoggedIn={setIsLoggedIn} />

          </div>

          <img className="rectangle" alt="Rectangle" src="img/sign_goldfish.jpg" />
          <div className="group">
            <BackToHome className="back-to-home-instance" property1="default" />
          </div>
        </div>
      </div>

    </div>
  );
};

SignIn.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default SignIn;
