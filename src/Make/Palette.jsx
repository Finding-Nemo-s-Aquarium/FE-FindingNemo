import { useState } from 'react';
import PropTypes from 'prop-types';
import './Palette.css';

const categoryZIndex = {
  Fishbowl: 100,
  Floor: 200,
  Plant: 300,
  Stone: 400,
  Fish: 500,
};

const categories = {
  Fishbowl: [
    { name: "둥근어항", nameE: "Fishbowl", src: "/item/Fishbowl.png", price: 20 },
    { name: "사각어항", nameE: "Fishtank", src: "/item/Fishtank.png", price: 30 },
  ],
  Floor: [
    { name: "흑사", nameE: "Black sand", src: "/item/Black_pebble.png", price: 15 },
    { name: "백사", nameE: "White sand", src: "/item/White_pebble.png", price: 10 },
    { name: "오색사", nameE: "Multicolored sand", src: "/item/Multicolored_pebble.png", price: 9 },
  ],
  Plant: [
    { name: "브릭샤 자포니카", nameE: "Blyxa japonica", src: "/item/Blyxa_japonica.png", price: 12 },
    { name: "아메리카 워터스프라이트", nameE: "Water sprite", src: "/item/Water_sprite.png", price: 10 },
    { name: "발리스네리아", nameE: "Vallisneria", src: "/item/Vallisneria.png", price: 15 },
  ],
  Stone: [
    { name: "에그스톤(1kg)", nameE: "Egg stone", src: "/item/Egg_stone.png", price: 6 },
    { name: "청룡석(1kg)", nameE: "Blue dragon stone", src: "/item/Blue_dragon_stone.png", price: 12 },
    { name: "화산석(1kg)", nameE: "Volcanic stone", src: "/item/Volcanic_stone.png", price: 8 },
  ],
  Fish: [
    { name: "구피", nameE: "Guppy", src: "/item/Guppy.png", price: 10 },
    { name: "금붕어", nameE: "Goldfish", src: "/item/Goldfish.png", price: 10 },
    { name: "베타", nameE: "Betta", src: "/item/Betta.png", price: 7 },
    { name: "앤젤피쉬", nameE: "Angelfish", src: "/item/Angelfish.png", price: 28 },
    { name: "테트라", nameE: "Tetra", src: "/item/Tetra.png", price: 5 },
  ],
};

const Palette = ({ handleImageSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('Fish');

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
          {categories[selectedCategory].map(({ src, price }, index) => (
            <img
              key={src}
              src={src}
              alt="이미지"
              onClick={() => handleImageSelect(src, price, selectedCategory)}
              className="image-item"
              style={{ width: '100%', height: 'auto', zIndex: categoryZIndex[selectedCategory] + index }}
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