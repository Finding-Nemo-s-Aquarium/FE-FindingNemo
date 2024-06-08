import FindingNemo from "./components/FindingNemo";
import Make from "./components/Make";
import Shop from "./components/Shop";
import SignIn from "./components/SignIn";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="text">
        <div className="finding-nemo">
          <img className="clownfish" alt="Clownfish" src="img/clownfish.png" />
          <FindingNemo className="finding-nemo-text" />
        </div>
        <div className="menu">
          <Shop className="SHOP-instance" />
          <Make className="MAKE-instance" />
        </div>
        <div className="SIGN-IN">
          <div className="rectangle" />
          <SignIn className="SIGN-IN-instance" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
