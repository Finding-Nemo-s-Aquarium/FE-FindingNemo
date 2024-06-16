import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import BeforeNavigation from "../Navigation/BeforeNavigation"
import AfterNavigation from "../Navigation/AfterNavigation"
import './Home.css'

const Home = ({ isLoggedIn, setIsLoggedIn }) => {
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
        <div>
            <div className="background">
                {isLoggedIn ? <AfterNavigation /> : <BeforeNavigation />}
            </div>
        </div>
    );
};

Home.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    setIsLoggedIn: PropTypes.func.isRequired,
};

export default Home;
