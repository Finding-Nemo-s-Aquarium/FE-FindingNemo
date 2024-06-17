import PropTypes from 'prop-types';
import BeforeNavigation from "../Navigation/BeforeNavigation";
import AfterNavigation from "../Navigation/AfterNavigation"; 
import './Cart.css';

const dummyData = [
  { id: 1, name: '상품 1', price: 10000, amount: 1, src: "/img2/Guppy.png" },
  { id: 2, name: '상품 2', price: 20000, amount: 2, src: "/img2/Guppy.png" },
  { id: 3, name: '상품 3', price: 30000, amount: 1, src: "/img2/Guppy.png" },
  { id: 1, name: '상품 1', price: 10000, amount: 1, src: "/img2/Guppy.png" },
  { id: 2, name: '상품 2', price: 20000, amount: 2, src: "/img2/Guppy.png" },
  { id: 3, name: '상품 3', price: 30000, amount: 1, src: "/img2/Guppy.png" },
  { id: 1, name: '상품 1', price: 10000, amount: 1, src: "/img2/Guppy.png" },
  { id: 2, name: '상품 2', price: 20000, amount: 2, src: "/img2/Guppy.png" },
  { id: 3, name: '상품 3', price: 30000, amount: 1, src: "/img2/Guppy.png" }
];

function Cart({ isLoggedIn }) {
  
  return (
    <div className="Cart">
      <img id="cart-background" src="img2/cart-background.png" alt="배경화면" />

      <div className="cart-head">
        {isLoggedIn ? <AfterNavigation /> : <BeforeNavigation />}
      </div>
      <h1 id='title'>C A R T</h1>
      <div className="cart-body">
        <h2>ITEM LIST</h2>
        {dummyData.map(item => (
          <div key={item.id} className='cart-item'>
            <img className='cart-item-img' src={item.src} alt="사진" />
              <span className='cart-item-name'>{item.name}</span>
              <span className='cart-item-price'>{item.price.toLocaleString()}$</span>
              <span className='cart-item-amount'>Amount: {item.amount}</span>
          </div>
        ))}
        <div className="total">
          Total Price: {dummyData.reduce((acc, item) => acc + item.price * item.amount, 0).toLocaleString()}원
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Cart;
