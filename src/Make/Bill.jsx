import PropTypes from 'prop-types';
import './Bill.css';

const Bill = ({ images, totalPrice }) => {
  // totalPrice가 객체인 경우, 예를 들어 { amount: 100 }과 같이 되어 있는 경우
  const amount = typeof totalPrice === 'object' ? totalPrice.amount : totalPrice;

  return (
    <div className="bill">
      <p id="result">Total Price: {amount} $</p>
      <div className="image-list">
        <h2>Selected Images</h2>
        <div className="image-container">
          {images.map(image => (
            <div key={image.id} className="image-item">
              <img src={image.src} alt="Selected Image" className="selected-image" />
              <span>{image.price} $</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Bill.propTypes = {
  images: PropTypes.array.isRequired,
  totalPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
};

export default Bill;
