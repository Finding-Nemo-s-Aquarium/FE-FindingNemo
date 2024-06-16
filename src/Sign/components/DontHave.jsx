import PropTypes from 'prop-types';
import './DontHave.css';

const DontHave = () => {
  return (
    <div className="SIGNUP">
      <span className="DontHaveAnAccount">{`Don&apos;t have an account?  `}</span>
      <span className="signup">Sign up</span>
    </div>);
};

DontHave.propTypes = {
  className: PropTypes.string,
  handleSignUp: PropTypes.func.isRequired,
};

export default DontHave;