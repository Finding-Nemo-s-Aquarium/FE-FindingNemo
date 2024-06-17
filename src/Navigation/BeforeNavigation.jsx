import { useNavigate } from 'react-router-dom';
import FindingNemo from "./components/FindingNemo_Navigation";
import Make from "./components/Make_Navigation";
import Shop from "./components/Shop_Navigation";
import Magnifier from "./components/Magnifier_Navigation";
import SignIn from "./components/SignIn_Navigation";
import "./BeforeNavigation.css";

const BeforeNavigation = () => {
  const navigate = useNavigate();

  const handleFindingNemo = () => {
    navigate('/home');
  };

  return (
    <div className="BeforeNavigation">
      <div className="text">

        <div className="finding-nemo" onClick={handleFindingNemo}>
          <img className="clownfish" alt="Clownfish" src="img/logo_clownfish.png" />
          <FindingNemo className="finding-nemo-text" />
        </div>

        <div className="menu">
          <Shop className="SHOP-instance" />
          <Make className="MAKE-instance" />
        </div>

        <Magnifier className="MAGNIFIER-instance" />

        <div className="SIGN-IN">
          <div className="SIGN-IN-rectangle" />
          <SignIn className="SIGN-IN-instance" />
        </div>

      </div>
    </div>
  );
};

export default BeforeNavigation;