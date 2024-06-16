import { useNavigate } from 'react-router-dom';
import "./Cart.css"

const Cart = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/cart');
    };

    return (
        <div className="CART" onClick={handleClick}></div>
    );
};

export default Cart;