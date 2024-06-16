import PropTypes from 'prop-types';
import { useState } from 'react';
import BeforeNavigation from "../Navigation/BeforeNavigation";
import AfterNavigation from '../Navigation/AfterNavigation';
import "./Shop.css";

const Shop = ({ isLoggedIn }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = {
        Aquarium: [
            { name: "Fish tank", img: "img2/fishbowl1.png" }, // fish_tank
            // { name: "Fish bowl", img: "img2/fish_bowl.png" } // fish_bowl
        ],
        Fish: [
            // { name: "Guppy", img: "img2/guppy.png" }, // guppy
            { name: "Goldfish", img: "img2/goldfish.png" }, // goldfish
            { name: "Betta", img: "img2/beta.png" }, // betta
            { name: "Angelfish", img: "img2/angelfish.png" }, // angelfish
            { name: "Tetra", img: "img2/tetra.png" } // tetra
        ],
        Plant: [
            // { name: "Blyxa japonica", img: "img2/blyxa_japonica.png" }, // blyxa_japonica
            { name: "American water sprite", img: "img2/america.png" }, // american_water_sprite
            { name: "Vallisneria", img: "img2/balis.png" } // vallisneria
        ],
        Stone: [
            { name: "Egg stone", img: "img2/eggstone.png" }, // egg_stone
            { name: "Blue dragon stone", img: "img2/bluedragonstone.png" }, // blue_dragon_stone
            { name: "Volcanic stone", img: "img2/volcanostone.png" } // volcanic_stone
        ],
        Flooring: [
            { name: "Black sand", img: "img2/blackfloor.png" }, // black_sand
            { name: "White sand", img: "img2/whitefloor.png" }, // white_sand
            { name: "Multicolored sand", img: "img2/fivecolorfloor.png" } // multicolored_sand
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