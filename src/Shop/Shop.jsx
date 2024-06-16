import PropTypes from 'prop-types';
import { useState } from 'react';
import BeforeNavigation from "../Navigation/BeforeNavigation";
import AfterNavigation from '../Navigation/AfterNavigation';
import "./Shop.css";

const Shop = ({ isLoggedIn }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

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
            { name: "Black pebble", img: "item/black_pebble.png" },
            { name: "White pebble", img: "item/white_pebble.png" },
            { name: "Multicolored_pebble", img: "item/Multicolored_pebble.png" }
        ]
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="Background">
            <div className="navigation">
                {isLoggedIn ? <AfterNavigation /> : <BeforeNavigation />}
            </div>

            <div className="top">
                <img src="img/main_nemo.png" alt="Clownfish" className="top-image" />
            </div>

            <div className="category-bar">
                {Object.keys(categories).map(category => (
                    <div className="category" key={category}>
                        <div className="category-title" onClick={() => handleCategoryClick(category)}>
                            {category}
                        </div>
                        {selectedCategory === category && (
                            <div className="category-items">
                                {categories[category].map(item => (
                                    <div className="category-item" key={item.name}>{item.name}</div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="gallery">
                {selectedCategory && categories[selectedCategory].map(item => (
                    <div className="gallery-item" key={item.name}>
                        <img src={item.img} alt={item.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

Shop.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};

export default Shop;