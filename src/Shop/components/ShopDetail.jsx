import PropTypes from 'prop-types';
import { useState } from 'react';
import "./ShopDetail.css";

const ShopDetail = ({ item, onClose, onAddToCart, isLoggedIn }) => {
    const [amount, setAmount] = useState(1);

    const handleAmountChange = (delta) => {
        setAmount(prevAmount => Math.max(1, prevAmount + delta));
    };

    const handleAddToCart = () => {
        if (!isLoggedIn) {
            alert('로그인을 해주세요.');
            return;
        }
        onAddToCart(item.name, amount);
        onClose();
    };

    return (
        <div className="shop-detail-overlay">
            <div className="shop-detail">

                <button className="close-button" onClick={onClose}>X</button>

                <div className="shop-detail-content">
                    <div className="shop-detail-image">
                        <img src={item.src} alt={item.name} />
                    </div>

                    <div className="shop-detail-info">
                        <h2>{item.name}</h2>
                        <p>${item.price}</p>
                        <p>Description: This is {item.name}. Nice to meet you.</p>

                        <div className="amount-selector">
                            <button onClick={() => handleAmountChange(-1)}>-</button>
                            <span>{amount}</span>
                            <button onClick={() => handleAmountChange(1)}>+</button>
                        </div>

                        <button className="add-to-cart-button" onClick={handleAddToCart}>ADD TO CART</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

ShopDetail.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
};

export default ShopDetail;