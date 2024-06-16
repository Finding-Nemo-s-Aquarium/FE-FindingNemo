import PropTypes from 'prop-types';
import './Bill.css';

const Bill = ({ images, totalPrice }) => {
  // totalPrice가 객체인 경우, 예를 들어 { amount: 100 }과 같이 되어 있는 경우
  const amount = typeof totalPrice === 'object' ? totalPrice.amount : totalPrice;

  return (
    <div className="bill">
      <div className="bill-image-list">
        <p style={{margin:0, fontSize:'30px'}}>Selected Merchandise</p>
        <div className="bill-image-container">
          {images.map(image => (
            <div key={image.id} className="bill-image-item">
              <img src={image.src} alt="Selected Image" className="selected-image" />
              <span>{image.price} $</span>
            </div>
          ))}
        </div>
      </div>
      <div className='total'>
      <p id="comment">Total Price:</p>
      <p id="result">{amount} $</p>
      <button id="purchase">Purchase</button>
      </div>
    </div>
  );
};

Bill.propTypes = {
  images: PropTypes.array.isRequired,
  totalPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
};

export default Bill;
