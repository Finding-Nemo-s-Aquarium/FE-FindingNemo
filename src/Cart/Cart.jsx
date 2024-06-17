import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BeforeNavigation from "../Navigation/BeforeNavigation";
import AfterNavigation from "../Navigation/AfterNavigation"; 
import './Cart.css';

function Cart({ isLoggedIn }) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8080/api/cart/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setItems(data.items);
        setTotal(data.total);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCheckout = () => {
    alert('Redirecting to checkout...');  // 예시로 경고창을 띄우는 코드
    // 실제 구매 처리 로직을 추가할 수 있습니다.
  };

  return (
    <div className="Cart">
      <img id="cart-background" src="public/img/cart-background.png" alt="배경화면" />
      <div className="cart-head">
        {isLoggedIn ? <AfterNavigation /> : <BeforeNavigation />}
      </div>
      <div className='cart-body'>
        <h1 id='title'>CART</h1>
        <h2 id='itemlist'>ITEM LIST</h2>
        <div className="cart-item-list">
          {items.length === 0 ? (
            <p style={{textAlign:"center",fontSize:'25px',borderRadius:'20px',padding:'10px',opacity:'0.5'}}>Your cart is empty.</p>
          ) : (
            <>
              {items.map((item, index) => (
                <div key={index} className='cart-item'>
                  <img className='cart-item-img' src={item.img_url} alt={item.name} />
                  <span className='cart-item-name'>{item.name}</span>
                  <span className='cart-item-price'>{item.price.toLocaleString()}$</span>
                  <span className='cart-item-amount'>Amount: {item.amount}</span>
                  <span className='cart-item-totalprice'>{item.price * item.amount}$</span>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="cart-total">
          <span id='tttext1'>Total Price:</span> 
          <span id='tttext2'>{total.toLocaleString()}$</span>
        </div>
        <div className="cart-purchase">
          <button className="purchase" onClick={handleCheckout}>Purchase</button>
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Cart;
