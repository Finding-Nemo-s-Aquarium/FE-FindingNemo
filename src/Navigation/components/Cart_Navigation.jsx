import { useNavigate } from 'react-router-dom';
import "./Cart_Navigation.css"

const Cart_Navigation = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/cart');
    };

    return (
            <div className="CART" onClick={handleClick}></div>
    );
};

export default Cart_Navigation;