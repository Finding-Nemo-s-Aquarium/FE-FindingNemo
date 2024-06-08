import { useState, useEffect } from 'react';
// import Navigation from "../Before_Navigation/BeforeNavigation";
import Navigation from "../After_Navigation/AfterNavigation";
import './Home.css';

const Home = () => {
    const [showInfo, setShowInfo] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.scrollHeight;
        if (scrollPosition + windowHeight >= bodyHeight - 100) {
            setShowInfo(true);
        } else {
            setShowInfo(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="background">
            <Navigation />
            {showInfo && (
                <div className="info-bar">
                    <div className="info-links">
                        <a href="#info">Info</a>
                        <a href="#support">Support</a>
                        <a href="#marketing">Marketing</a>
                    </div>
                    <div className="legal-links">
                        <a href="#terms">Terms of 니모를 찾아서</a>
                    </div>
                    <div className="copyright">
                        &copy; 2024 Finding Nemo
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
