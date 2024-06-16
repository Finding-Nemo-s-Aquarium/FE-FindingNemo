import PropTypes from 'prop-types';
import './Bill.css';

const Bill = ({ images, totalPrice }) => {
  // 이미지를 src로 그룹화하고 각 이미지 유형의 수량과 총 가격 계산
  const groupedImages = images.reduce((acc, image) => {
    const existing = acc.find(item => item.src === image.src);
    if (existing) {
      existing.quantity += 1;
      existing.totalPrice += image.price;
    } else {
      acc.push({ ...image, quantity: 1, totalPrice: image.price });
    }
    return acc;
  }, []);

  return (
    <div className="bill">
      <div className="bill-image-list">
        <p style={{ margin: 0, fontSize: '30px' }}>선택한 상품</p>
        <div className="bill-image-container">
          {groupedImages.map(image => (
            <div key={image.src} className="bill-image-item">
              <img src={image.src} alt="Selected Image" className="selected-image" />
              <span>{image.price}원</span>
              <span> x {image.quantity}개</span>
              <span> = {image.totalPrice}원</span>
            </div>
          ))}
        </div>
      </div>
      <div className='total'>
        <p id="comment">총 가격:</p>
        <p id="result">{totalPrice}원</p>
        <button id="purchase">구매</button>
      </div>
    </div>
  );
};

Bill.propTypes = {
  images: PropTypes.array.isRequired,
  totalPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
};

export default Bill;
