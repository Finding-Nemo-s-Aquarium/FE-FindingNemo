import { useNavigate } from 'react-router-dom';
import FindingNemo from "./components/FindingNemo";
import Make from "./components/Make";
import Shop from "./components/Shop";
import Magnifier from "./components/Magnifier";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import "./AfterNavigation.css";

const AfterNavigation = () => {
  const navigation = useNavigate();

  const handleFindingNemo = () => {
    navigation('/home');
  };

  return (
    <div className="AfterNavigation">
      <div className="text">

        <div className="finding-nemo" onClick={handleFindingNemo}>
          <img className="clownfish" alt="Clownfish" src="img/logo_clownfish.png" />
          <FindingNemo className="finding-nemo-text" />
        </div>

        <div className="menu">
          <Shop className="SHOP-instance" />
          <Make className="MAKE-instance" />
        </div>

        <div className="image">
          <Magnifier className="MAGNIFIER-instance" />
          <Cart className="CART-instance" />
          <Profile className="PROFILE-instance" />
        </div>

      </div>
    </div>
  );
};

export default AfterNavigation;