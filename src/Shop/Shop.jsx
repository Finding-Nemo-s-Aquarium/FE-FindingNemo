import Navigation from '../After_Navigation/AfterNavigation';
import "./Shop.css";

const Shop = () => {
    return (
        <div className="Background">
            <Navigation />

            <div className="hero">
                <img src="img/main_nemo.png" alt="Clownfish" className="hero-image" />
            </div>

            <div className="category-bar">
                <div className="category">
                    <div className="category-title">Fish</div>
                    <div className="category-items">Guppy</div>
                </div>
                <div className="category">
                    <div className="category-title">Fishbowl</div>
                    <div className="category-items">Goldfish</div>
                </div>
                <div className="category">
                    <div className="category-title">Plant</div>
                    <div className="category-items">Betta</div>
                </div>
                <div className="category">
                    <div className="category-title">Stone</div>
                    <div className="category-items">Angelfish</div>
                </div>
                <div className="category">
                    <div className="category-title">Flooring</div>
                    <div className="category-items">Tetra</div>
                </div>
            </div>
            <div className="gallery">
                <div className="gallery-item"><img src="img/fish.png" alt="Guppy" /></div>
                <div className="gallery-item"></div>
                <div className="gallery-item"></div>
                <div className="gallery-item"></div>
                <div className="gallery-item"></div>
                <div className="gallery-item"></div>
            </div>
        </div>
    );
};

export default Shop;
