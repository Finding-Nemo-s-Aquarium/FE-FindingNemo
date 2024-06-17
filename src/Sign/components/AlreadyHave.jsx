import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './AlreadyHave.css';

const AlreadyHave = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin'); // Sign In 페이지로 이동
  };

  return (
    <div className="SIGNIN">
      <span className="AlreadyHaveAnAccount">{`Already have an account? `}</span>
      <span className="signin" onClick={handleSignIn}>Sign in</span>
    </div>
  );
};

AlreadyHave.propTypes = {
  className: PropTypes.string,
};

export default AlreadyHave;