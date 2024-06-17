import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './SignInBackToHome.css';

const BackToHome = () => {
  const navigate = useNavigate();
    
  const handleBTH = () => {
      navigate('/home');
  }
  return (
    <div className="SignInBackToHome">
      <div className="SignInBackToHome-text" onClick={handleBTH}>Back to home</div>
    </div>);
};

BackToHome.propTypes = {
  className: PropTypes.string.isRequired,
};

export default BackToHome;