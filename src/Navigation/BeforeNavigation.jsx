import { useNavigate } from 'react-router-dom';
import FindingNemo from "./components/FindingNemo";
import Make from "./components/Make";
import Shop from "./components/Shop";
import SignIn from "./components/SignIn";
import "./BeforeNavigation.css";

const BeforeNavigation = () => {
  const navigate = useNavigate();

  const handleFindingNemoClick = () => {
    navigate('/home');
  };

  return (
    <div className="BeforeNavigation">
      <div className="text">

        <div className="finding-nemo" onClick={handleFindingNemoClick}>
          <img className="clownfish" alt="Clownfish" src="img/logo_clownfish.png" />
          <FindingNemo className="finding-nemo-text" />
        </div>

        <div className="menu">
          <Shop className="SHOP-instance" />
          <Make className="MAKE-instance" />
        </div>

        <img className="Magnifier" alt="Magnifier" src="img/white_magnifier.png" />
        <div className="SIGN-IN">
          <div className="rectangle" />
          <SignIn className="SIGN-IN-instance" />
        </div>

      </div>
    </div>
  );
};

export default BeforeNavigation;