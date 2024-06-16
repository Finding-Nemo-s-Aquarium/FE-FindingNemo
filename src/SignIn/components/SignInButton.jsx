import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import "./SignInButton.css";

const SignInButton = ({ className, setIsLoggedIn }) => {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   setIsLoggedIn(true);
  //   navigate('/home');
  // };

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
        setIsLoggedIn(true);
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