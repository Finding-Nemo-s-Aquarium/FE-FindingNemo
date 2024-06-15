import React from 'react';// eslint-disable-line no-unused-vars
import './Cart.css';

function Cart() {
  return (
    <div className="Cart">
      <div id=""></div>
      <img id="cart-background" src="public\img\main_nemo.png" alt="배경화면" />
      
      <div className="cart-items">
      </div>
      <div className="cart-total">
        <h2>총 가격: </h2>
      </div>
    </div>
  );
}

export default Cart;
