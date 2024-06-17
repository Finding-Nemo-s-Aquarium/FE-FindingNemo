import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './SignUpBackToHome.css';

const BackToHome = () => {
  const navigate = useNavigate();
    
  const handleBTH = () => {
      navigate('/home');
  }
  return (
    <div className="backToHome">
      <div className="backToHome-text" onClick={handleBTH}>Back to home</div>
    </div>);
};

BackToHome.propTypes = {
  className: PropTypes.string.isRequired,
};

export default BackToHome;