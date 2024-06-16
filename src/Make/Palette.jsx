import { useState } from 'react';
import PropTypes from 'prop-types';
import './Palette.css';

const Palette = ({ handleImageSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('Fish');

  const categories = {
    Fishbowl: [
      { src: "/img2/Fishbowl.png", price: 20 },
      { src: "/img2/Fishtank.png", price: 30 }

    ],
    Fish: [
      { src: "/img2/Goldfish.png", price: 10 },
      { src: "/img2/Tetra.png", price: 5 },
      { src: "/img2/Betta.png", price: 7 },
      { src: "/img2/Angelfish.png", price: 28 },
      { src: "/img2/Guppy.png", price: 10 }
   ],
    Plant: [
      { src: "/img2/Water_sprite.png", price: 10 },
      { src: "/img2/Vallisneria.png", price: 15 },
      { src: "/img2/Blyxa_japonica.png", price: 12 }
    ],
        Stone: [
      { src: "/img2/Volcanic_stone.png", price: 8 },
      { src: "/img2/Blue_dragon_stone.png", price: 12 },
      { src: "/img2/Egg_stone.png", price: 6 }
    ],Floor: [
      { src: "/img2/White_sand.png", price: 10 },
      { src: "/img2/Black_sand.png", price: 15 },
      { src: "/img2/Multicolored_sand.png", price: 9 }
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
