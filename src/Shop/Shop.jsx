import PropTypes from 'prop-types';
import { useState } from 'react';
import BeforeNavigation from "../Navigation/BeforeNavigation";
import AfterNavigation from '../Navigation/AfterNavigation';
import ShopDetail from './components/ShopDetail';
import "./Shop.css";

const Shop = ({ isLoggedIn }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [cart, setCart] = useState([]);

    const categories = {
        Aquarium: [
            { name: "Fish tank", src: "/item/Fishtank.png", price: 30 },
            { name: "Fish bowl", src: "/item/Fishbowl.png", price: 20 }
        ],
        Fish: [
            { name: "Guppy", src: "/item/Guppy.png", price: 10 },
            { name: "Goldfish", src: "/item/Goldfish.png", price: 10 },
            { name: "Betta", src: "/item/Betta.png", price: 7 },
            { name: "Angelfish", src: "/item/Angelfish.png", price: 28 },
            { name: "Tetra", src: "/item/Tetra.png", price: 5 }
        ],
        Plant: [
            { name: "Blyxa japonica", src: "/item/Blyxa_japonica.png", price: 12 },
            { name: "Water sprite", src: "/item/Water_sprite.png", price: 10 },
            { name: "Vallisneria", src: "/item/Vallisneria.png", price: 15 }
        ],
        Stone: [
            { name: "Egg stone", src: "/item/Egg_stone.png", price: 6 },
            { name: "Blue dragon stone", src: "/item/Blue_dragon_stone.png", price: 12 },
            { name: "Volcanic stone", src: "/item/Volcanic_stone.png", price: 8 }
        ],
        Flooring: [
            { name: "Black pebble", src: "/item/Black_pebble.png", price: 15 },
            { name: "White pebble", src: "/item/White_pebble.png", price: 10 },
            { name: "Multicolored pebble", src: "/item/Multicolored_pebble.png", price: 9 }
        ]
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedItem(null); // 카테고리를 클릭하면 선택된 아이템을 초기화
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleAddToCart = (name, amount) => {
        if (!isLoggedIn) {
            alert('로그인을 해주세요.');
            return;
        }
        // Add To Cart 버튼을 클릭하면, 상품 이름과 수량을 cart에 추가
        setCart(prevCart => [...prevCart, { name, amount }]);
        generateJsonFile([...cart, { name, amount }]);
    };

    // JSON 파일 생성
    const generateJsonFile = (cartItems) => {
        const jsonOutput = cartItems.map(item => ({
            name: item.name,
            amount: item.amount
        }));

        console.log(JSON.stringify(jsonOutput, null, 2)); // consol 출력
        return jsonOutput; // json 파일을 jsonOutput에 저장
    };

    const handleCloseDetail = () => {
        setSelectedItem(null);
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
                    <ShopDetail 
                        item={selectedItem} 
                        onClose={handleCloseDetail} 
                        onAddToCart={handleAddToCart}
                        isLoggedIn={isLoggedIn}
                    />
                ) : selectedCategory ? (
                    categories[selectedCategory].map(item => (
                        <div className="gallery-item" key={item.name}>
                            <img src={item.src} alt={item.name} onClick={() => handleItemClick(item)} />
                        </div>
                    ))
                ) : (
                    allItems.map(item => (
                        <div className="gallery-item" key={item.name}>
                            <img src={item.src} alt={item.name} onClick={() => handleItemClick(item)} />
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