import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Bill.css';

const Bill = ({ images, totalPrice }) => {
  const navigate = useNavigate();

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

  // JSON 파일 생성
  const generateJsonFile = () => {
    const jsonOutput = groupedImages.map(image => ({
      name: image.src.split('/').pop().replace(/\.[^/.]+$/, ''),
      amount: image.quantity
    }));
  
    console.log(jsonOutput); // Log the JSON array to console
    return jsonOutput;
  };

  const handlePurchase = async () => {
    const jsonData = generateJsonFile();

    try {
      const response = await fetch('http://localhost:8080/api/cart/1/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      navigate('/cart');
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="bill">
      <div className="bill-image-list">
        <p style={{ margin: 0, fontSize: '30px' }}>Selected Items</p>
        <div className="bill-image-container">
          {groupedImages.map(image => (
            <div key={image.src} className="bill-image-item">
              <span>{image.src.split('/').pop().replace(/\.[^/.]+$/, '')}</span>
              <img src={image.src} alt="Selected Image" className="selected-image" />
              <span>{image.price}$ x {image.quantity}</span>
              <span> = {image.totalPrice}$</span>
            </div>
          ))}
        </div>
      </div>
      <div className='bill-info'>
        <div className='bill-total'>
          <p id="comment">Total Price:</p>
          <p id="result">{totalPrice}$</p>
        </div>
        <button id="Purchase" onClick={handlePurchase}></button>
      </div>
    </div>
  );
};

Bill.propTypes = {
  images: PropTypes.array.isRequired,
  totalPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
};

export default Bill;
