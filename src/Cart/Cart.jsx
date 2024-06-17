import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BeforeNavigation from "../Navigation/BeforeNavigation";
import AfterNavigation from "../Navigation/AfterNavigation"; 
import './Cart.css';

function Cart({ isLoggedIn }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="Cart">
      <img id="cart-background" src="public/img/cart-background.png" alt="배경화면" />
      <div className="cart-head">
        {isLoggedIn ? <AfterNavigation /> : <BeforeNavigation />}
      </div>
      <div className='cart-body'>
      <h1 id='title'>C A R T</h1>
      <h2 id='itemlist'>ITEM LIST</h2>
      <div className="cart-item-list">
        {items.length === 0 ? (
          <p style={{textAlign:"center",fontSize:'25px',borderRadius:'20px',padding:'10px',opacity:'0.5'}}>Your cart is empty.</p>
        ) : (
          <>
            {items.map(item => (
              <div key={item.id} className='cart-item'>
                <img className='cart-item-img' src={item.src} alt="사진" />
                <span className='cart-item-name'>{item.name}</span>
                <span className='cart-item-price'>{item.price.toLocaleString()}$</span>
                <span className='cart-item-amount'>Amount: {item.amount}</span>
              </div>
            ))}
            
          </>
        )}
       
      </div>
      <h2 id='itemlist'>TOTAL</h2>
      <div className="cart-total">
              Total Price: {items.reduce((acc, item) => acc + item.price * item.amount, 0).toLocaleString()}$
            </div>
      </div>

    </div>
  );
}

Cart.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Cart;
