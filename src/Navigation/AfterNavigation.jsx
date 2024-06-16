import { useNavigate } from 'react-router-dom';
import FindingNemo from "./components/FindingNemo";
import Make from "./components/Make";
import Shop from "./components/Shop";
import "./AfterNavigation.css";

const AfterNavigation = () => {
  const navigation = useNavigate();

  const handleFindingNemoClick = () => {
    navigation('/home');
  };

  return (
    <div className="AfterNavigation">
      <div className="text">

        <div className="finding-nemo" onClick={handleFindingNemoClick}>
          <img className="clownfish" alt="Clownfish" src="img/clownfish.png" />
          <FindingNemo className="finding-nemo-text" />
        </div>

        <div className="menu">
          <Shop className="SHOP-instance" />
          <Make className="MAKE-instance" />
        </div>

        <div className="image">
          <img className="Magnifier" alt="Magnifier" src="img/magnifier.png" />
          <img className="Cart" alt="Cart" src="img/cart.png" />
          <img className="Profile" alt="Profile" src="img/profile.png" />
        </div>

      </div>
    </div>
  );
};

export default AfterNavigation;