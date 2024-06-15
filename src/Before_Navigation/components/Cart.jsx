import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import "./Cart.css"

const Cart = ({ className }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/cart');
    };

    return (
        <div className="CART">
            <div className={`text-wrapper ${className}`} onClick={handleClick}>Cart</div>;
        </div>
    );
};

Cart.propTypes = {
    className: PropTypes.string.isRequired,
};

export default Cart;
