import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './DontHave.css';

const DontHave = () => {
  const navigate = useNavigate();
  
  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="SIGNUP">
      <span className="DontHaveAnAccount">{`Don't have an account? `}</span>
      <span className="signup" onClick={handleSignUp}>Sign up</span>
    </div>
  );
};

DontHave.propTypes = {
  className: PropTypes.string,
};

export default DontHave;