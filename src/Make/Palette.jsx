import { useState } from 'react';
import PropTypes from 'prop-types';
import './Palette.css';

const Palette = ({ handleImageSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('Fish');

  const categories = {
    Fishbowl: [
      { src: "/item/Fishbowl.png", price: 20 },
      { src: "/item/Fishtank.png", price: 30 }

    ],
    Fish: [
      { src: "/item/Goldfish.png", price: 10 },
      { src: "/item/Tetra.png", price: 5 },
      { src: "/item/Betta.png", price: 7 },
      { src: "/item/Angelfish.png", price: 28 },
      { src: "/item/Guppy.png", price: 10 }
   ],
    Plant: [
      { src: "/item/Water_sprite.png", price: 10 },
      { src: "/item/Vallisneria.png", price: 15 },
      { src: "/item/Blyxa_japonica.png", price: 12 }
    ],
        Stone: [
      { src: "/item/Volcanic_stone.png", price: 8 },
      { src: "/item/Blue_dragon_stone.png", price: 12 },
      { src: "/item/Egg_stone.png", price: 6 }
    ],Floor: [
      { src: "/item/White_sand.png", price: 10 },
      { src: "/item/Black_sand.png", price: 15 },
      { src: "/item/Multicolored_sand.png", price: 9 }
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
