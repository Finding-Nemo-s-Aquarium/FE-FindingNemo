import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import "./Shop.css";

const Shop = ({ className }) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/shop');
    }
  return (
    <div className="SHOP">
      <div className={`text-wrapper ${className}`} onClick={handleClick}>SHOP</div>
    </div>
  );
};

Shop.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Shop;
