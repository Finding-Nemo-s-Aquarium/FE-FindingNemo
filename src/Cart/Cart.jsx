import './Cart.css';


const dummyData = [
  { id: 1, name: '상품 1', price: 10000, quantity: 1 },
  { id: 2, name: '상품 2', price: 20000, quantity: 2 },
  { id: 3, name: '상품 3', price: 30000, quantity: 1 }
];

function Cart() {
return (
    <div className="Cart">
      <img id="cart-background" src="img/cart-background.png" alt="배경화면" />
      <div id="cart-body">
        <h2>CART</h2>
        <ul>
          {dummyData.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>{item.price.toLocaleString()}원</span>
              <span>수량: {item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="total">
          총 합계: {dummyData.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}원
        </div>
      </div>
    </div>
  );
}


export default Cart;
