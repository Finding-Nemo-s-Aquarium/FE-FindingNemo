import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import "./SignInButton.css";

const SignInButton = ({ className, handleSignIn }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    const signinData = {
      username: email,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:8080/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signinData),
      });

      if (response.ok) {
        const token = await response.text();
        localStorage.setItem('authToken', token);
        handleSignIn(true);
        navigate('/home');
      } else {
        const errorText = await response.text();
        console.error('Signin error:', errorText);
        alert('아이디 또는 패스워드가 잘못 입력되었습니다.');
      }
    } catch (error) {
      console.error('Signin error:', error);
      alert('Signin failed: ' + error.message);
    }
  };

  return (
    <div className="Button">
      <div className={`signin-button ${className}`} onClick={handleClick}>
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