import PropTypes from 'prop-types';
import { useState } from 'react';
import BeforeNavigation from "../Navigation/BeforeNavigation";
import AfterNavigation from '../Navigation/AfterNavigation';
import "./Shop.css";

const Shop = ({ isLoggedIn }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const categories = {
        Aquarium: [
            { name: "Fish tank", img: "item/Fishtank.png" },
            { name: "Fish bowl", img: "item/Fishbowl.png" }
        ],
        Fish: [
            { name: "Guppy", img: "item/Guppy.png" },
            { name: "Goldfish", img: "item/Goldfish.png" },
            { name: "Betta", img: "item/Betta.png" },
            { name: "Angelfish", img: "item/Angelfish.png" },
            { name: "Tetra", img: "item/Tetra.png" }
        ],
        Plant: [
            { name: "Blyxa japonica", img: "item/Blyxa_japonica.png" },
            { name: "Water sprite", img: "item/Water_sprite.png" },
            { name: "Vallisneria", img: "item/Vallisneria.png" }
        ],
        Stone: [
            { name: "Egg stone", img: "item/Egg_stone.png" },
            { name: "Blue dragon stone", img: "item/Blue_dragon_stone.png" },
            { name: "Volcanic stone", img: "item/Volcanic_stone.png" }
        ],
        Flooring: [
            { name: "Black pebble", img: "item/Black_pebble.png" },
            { name: "White pebble", img: "item/White_pebble.png" },
            { name: "Multicolored pebble", img: "item/Multicolored_pebble.png" }
        ]
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedItem(null); // 카테고리를 클릭하면 선택된 아이템을 초기화
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const allItems = Object.values(categories).flat();

    return (
        <div className="Background">
            <div className="navigation">
                {isLoggedIn ? <AfterNavigation /> : <BeforeNavigation />}
            </div>

            <div className="top">
                <img src="img/main_nemo.png" alt="Clownfish" className="top-image" />
            </div>

            <div className="category-bar">
                <div className="category">
                    <div className="category-title" onClick={() => handleCategoryClick(null)}>
                        All
                    </div>
                </div>
                {Object.keys(categories).map(category => (
                    <div className="category" key={category}>
                        <div className="category-title" onClick={() => handleCategoryClick(category)}>
                            {category}
                        </div>
                        {selectedCategory === category && (
                            <div className="category-items">
                                {categories[category].map(item => (
                                    <div 
                                        className="category-item" 
                                        key={item.name} 
                                        onClick={() => handleItemClick(item)}
                                    >
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="gallery">
                {selectedItem ? (
                    <div className="gallery-item">
                        <img src={selectedItem.img} alt={selectedItem.name} />
                    </div>
                ) : selectedCategory ? (
                    categories[selectedCategory].map(item => (
                        <div className="gallery-item" key={item.name}>
                            <img src={item.img} alt={item.name} />
                        </div>
                    ))
                ) : (
                    allItems.map(item => (
                        <div className="gallery-item" key={item.name}>
                            <img src={item.img} alt={item.name} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

Shop.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};

export default Shop;