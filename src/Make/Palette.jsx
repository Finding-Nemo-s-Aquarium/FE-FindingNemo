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
    { name: "둥근어항", nameE: "Fishbowl", src: "/img2/Fishbowl.png", price: 20 },
    { name: "사각어항", nameE: "Fishtank", src: "/img2/Fishtank.png", price: 30 },
  ],
  Floor: [
    { name: "흑사", nameE: "Black sand", src: "/img2/Black_sand.png", price: 15 },
    { name: "백사", nameE: "White sand", src: "/img2/White_sand.png", price: 10 },
    { name: "오색사", nameE: "Multicolored sand", src: "/img2/Multicolored_sand.png", price: 9 },
  ],
  Plant: [
    { name: "브릭샤 자포니카", nameE: "Blyxa japonica", src: "/img2/Blyxa_japonica.png", price: 12 },
    { name: "아메리카 워터스프라이트", nameE: "Water sprite", src: "/img2/Water_sprite.png", price: 10 },
    { name: "발리스네리아", nameE: "Vallisneria", src: "/img2/Vallisneria.png", price: 15 },
  ],
  Stone: [
    { name: "에그스톤(1kg)", nameE: "Egg stone", src: "/img2/Egg_stone.png", price: 6 },
    { name: "청룡석(1kg)", nameE: "Blue dragon stone", src: "/img2/Blue_dragon_stone.png", price: 12 },
    { name: "화산석(1kg)", nameE: "Volcanic stone", src: "/img2/Volcanic_stone.png", price: 8 },
  ],
  Fish: [
    { name: "구피", nameE: "Guppy", src: "/img2/Guppy.png", price: 10 },
    { name: "금붕어", nameE: "Goldfish", src: "/img2/Goldfish.png", price: 10 },
    { name: "베타", nameE: "Betta", src: "/img2/Betta.png", price: 7 },
    { name: "앤젤피쉬", nameE: "Angelfish", src: "/img2/Angelfish.png", price: 28 },
    { name: "테트라", nameE: "Tetra", src: "/img2/Tetra.png", price: 5 },
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