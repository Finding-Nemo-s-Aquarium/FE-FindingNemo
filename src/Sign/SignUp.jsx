import { useNavigate } from 'react-router-dom';
import SignUpButton from './components/SignUpButton';
import AlreadyHave from './components/AlreadyHave';
import SignUpBackToHome from './components/SignUpBackToHome';
import axios from 'axios';
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = async () => {
      const username = document.getElementById('usernameInput').value;
      const email = document.getElementById('emailInput').value;
      const password = document.getElementById('passwordInput').value;
      const name = document.getElementById('nameInput').value;
      const address = document.getElementById('addressInput').value;
      const phone = document.getElementById('phoneInput').value;

      const userData = {
          username,
          email,
          password,
          name,
          address,
          phone
      };

      try {
          const response = await axios.post('http://localhost:8080/auth/signup', userData);
          if (response.status === 201) {
              navigate('/signin');
          } else {
              console.error('Sign up failed:', response.data);
          }
      } catch (error) {
          console.error('An error occurred during sign up:', error);
      }
  };

  return (
    <div className="signup-container">
      <div className="signup-left-panel"></div>
      
      <div className="signup-right-panel">
        <div className="input-container">
          <SignUpBackToHome />

          <div className="header">
            <img className="clownfish" alt="Clownfish" src="img/logo_clownfish.png" />
            <span className="finding-nemo-text">FINDING NEMO</span>
          </div>

          <div className="signup-text">Sign up</div>

          <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="username" className="input-label">USERNAME</label>
            <input className="input-box" type="text" id="usernameInput" name="username" placeholder="Enter your username" required />
            
            <label htmlFor="email" className="input-label">EMAIL</label>
            <input className="input-box" type="email" id="emailInput" name="email" placeholder="example@example.com" required />

            <label htmlFor="password" className="input-label">PASSWORD</label>
            <input className="input-box" type="password" id="passwordInput" name="password" placeholder="********" required />
            
            <label htmlFor="name" className="input-label">NAME</label>
            <input className="input-box" type="text" id="nameInput" name="name" placeholder="Enter your name" required />

            <label htmlFor="address" className="input-label">ADDRESS</label>
            <input className="input-box" type="text" id="addressInput" name="address" placeholder="Enter your address" required />

            <label htmlFor="phone" className="input-label">PHONE</label>
            <input className="input-box" type="text" id="phoneInput" name="phone" placeholder="Enter your phone number" required />

            <SignUpButton className="signup-button" handleSignUp={handleSignUp} />
          </form>

          <AlreadyHave />
        </div>
      </div>
    </div>
  );
};

export default SignUp;