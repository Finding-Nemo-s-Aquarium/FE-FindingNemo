import React from "react";
import FindingNemo from "./components/FindingNemo";
import Make from "./components/Make";
import Shop from "./components/Shop";
import SignIn from "./components/SignIn";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="group">
        <div className="overlap-group">
          <div className="group-2">

            <div className="overlap-2">
              <FindingNemo className="finding-nemo-instance" />
              <img className="clownfish" alt="Clownfish" src="img/clownfish.png" />
            </div>

            <div className="group-3">
              <Shop className="SHOP-instance" />
              <Make className="MAKE-instance" />
              <div className="overlap-group-2">
                <div className="rectangle" />
                <SignIn className="SIGN-IN-instance" />
              </div>
            </div>
          </div>

          <img className="img" alt="Group" src="img/magnifier.png" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
