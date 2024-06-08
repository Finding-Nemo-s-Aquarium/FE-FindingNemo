import BackToHome from "./components/BackToHome";
import DonTHaveAn from "./components/DonTHaveAn";
import ForgotPassword from "./components/ForgotPassword";
import SignInButton from "./components/SignInButton";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="screen">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="signin-format">
            <div className="format-top">
              <img className="clownfish" alt="Clownfish" src="clownfish.png" />
              <div className="text-wrapper-5">FINDING NEMO</div>
              <div className="text-wrapper-6">Sign in</div>
              <DonTHaveAn className="dont-have-an-account" property1="default" />
            </div>
            <ForgotPassword className="forgot-password-instance" property1="default" />
            <div className="ID">
              <div className="overlap-group">
                <div className="text-wrapper-7">youremail@email.com</div>
              </div>
              <div className="text-wrapper-8">ID</div>
            </div>
            <div className="PASSWORD">
              <div className="overlap-group">
                <div className="text-wrapper-9">********</div>
              </div>
              <div className="text-wrapper-10">PASSWORD</div>
            </div>
            <SignInButton className="SIGNIN-instance" property1="default" />
          </div>
          <img className="rectangle" alt="Rectangle" src="img/login_goldfish.jpg" />
          <div className="group">
            <BackToHome className="back-to-home-instance" property1="default" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;