import PropTypes from 'prop-types';
import SignInButton from './components/SignInButton';
import DontHave from './components/DontHave';
import SignInBackToHome from './components/SignInBackToHome';
import "./SignIn.css";

const SignIn = ({ setIsLoggedIn }) => {

  const handleSignIn = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
  };

  return (
    <div className="signin-container">

      <div className="signin-left-panel">
        <div className="input-container">
          <SignInBackToHome />

          <div className="header">
            <img className="clownfish" alt="Clownfish" src="img/logo_clownfish.png" />
            <span className="finding-nemo-text">FINDING NEMO</span>
          </div>

          <div className="signin-text">Sign in</div>

          <form className="signin-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="username" className="input-label">USERNAME</label>
            <input className="input-box" type="text" id="usernameInput" name="username" placeholder="Enter your username" required />
            
            <label htmlFor="password" className="input-label">PASSWORD</label>
            <input className="input-box" type="password" id="passwordInput" name="password" placeholder="********" required />
            
            <SignInButton className="signin-button" handleSignIn={handleSignIn} />
          </form>

          <DontHave />
        </div>
      </div>

      <div className="signin-right-panel"></div>

    </div>
  );
};

SignIn.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default SignIn;