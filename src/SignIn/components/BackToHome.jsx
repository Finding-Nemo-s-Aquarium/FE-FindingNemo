import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './BackToHome.css';

const BackToHome = () => {
  const navigate = useNavigate();
    
  const handleClick = () => {
      navigate('/home');
  }
  return (
    <div className="backToHome">
      <div className="backToHome1" onClick={handleClick}>Back to home</div>
    </div>);
};

BackToHome.propTypes = {
  className: PropTypes.string.isRequired,
};

export default BackToHome;