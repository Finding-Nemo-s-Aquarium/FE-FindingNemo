import { useNavigate } from 'react-router-dom';
import BackToHome from "./components/BackToHome";
import SignUpButton from "./components/SignUpButton";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // 회원가입 로직 구현
    navigate('/signin');
  };

  return (
    <div className="screen">
      <div className="overlap">
        <div className="signup-format">
          <div className="format-top">
            <img className="clownfish" alt="Clownfish" src="img/logo_clownfish.png" />
            <div className="FINDINGNEMO-text">FINDING NEMO</div>
            <div className="Signup-text">Sign up</div>
            <div className="already-have-an-account">
              <span>Already have an account? </span>
              <span className="signin-link" onClick={handleSignUp}>Sign in</span>
            </div>
          </div>
          <div className="input-format">
            <div className="USERNAME">
              <div className="USERNAME-text">Username</div>
              <input className="input-box" type="text" id="usernameInput" name="username" placeholder="Enter your username" required />
            </div>
            <div className="EMAIL">
              <div className="EMAIL-text">Email</div>
              <input className="input-box" type="email" id="emailInput" name="email" placeholder="example@example.com" required />
            </div>
            <div className="PASSWORD">
              <div className="PASSWORD-text">Password</div>
              <input className="input-box" type="password" id="passwordInput" name="password" placeholder="Enter your password" required />
            </div>
            <div className="NAME">
              <div className="NAME-text">Name</div>
              <input className="input-box" type="text" id="nameInput" name="name" placeholder="Enter your name" required />
            </div>
            <div className="ADDRESS">
              <div className="ADDRESS-text">Address</div>
              <input className="input-box" type="text" id="addressInput" name="address" placeholder="Enter your address" required />
            </div>
            <div className="PHONE">
              <div className="PHONE-text">Phone</div>
              <input className="input-box" type="text" id="phoneInput" name="phone" placeholder="Enter your phone number" required />
            </div>
          </div>
          <SignUpButton className="SIGNUP-instance" handleSignUp={handleSignUp} />
        </div>
        <img className="rectangle" alt="Rectangle" src="img/sign_goldfish.jpg" />
        <div className="group">
          <BackToHome className="back-to-home-instance" property1="default" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;