import { useState } from 'react';
import PropTypes from 'prop-types';
import './Palette.css';

const Palette = ({ handleImageSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('Fish');

  const categories = {
    Fish: [
      { src: "/img2/goldfish.png", price: 10 },
      { src: "/img2/tetra.png", price: 15 },
      { src: "/img2/beta.png", price: 20 }
    ],
    Floor: [
      { src: "/img2/whitefloor.png", price: 5 },
      { src: "/img2/blackfloor.png", price: 7 },
      { src: "/img2/fivecolorfloor.png", price: 10 }
    ],
    Stone: [
      { src: "/img2/volcanostone.png", price: 8 },
      { src: "/img2/bluedragonstone.png", price: 12 },
      { src: "/img2/eggstone.png", price: 6 }
    ],
    Plant: [
      { src: "/img2/america.png", price: 10 },
      { src: "/img2/balis.png", price: 15 },
      { src: "/img2/brisha.png", price: 12 }
    ],
    Fishbowl: [
      { src: "/img2/fishbowl1.png", price: 25 }
    ]
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="palette">
      <div className="category-button">
        {Object.keys(categories).map(category => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`palette-button ${selectedCategory === category ? 'selected' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div className="image-list">
          {categories[selectedCategory].map(({ src, price }, index) => (// eslint-disable-line no-unused-vars
            <img
              key={src}
              src={src}
              alt="이미지"
              onClick={() => handleImageSelect(src, price)}
              className="image-item"
              style={{ width: '100%', height: 'auto' }} // 모든 이미지 크기를 동일하게 설정
            />
          ))}
        </div>
      )}
    </div>
  );
};

Palette.propTypes = {
  handleImageSelect: PropTypes.func.isRequired,
};

export default Palette;
