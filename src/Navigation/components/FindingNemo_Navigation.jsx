import PropTypes from 'prop-types';
import "./FindingNemo_Navigation.css";

const FindingNemo_Navigation = ({ className }) => {
  return (
    <div className="finding-nemo">
      <div className={`text-wrapper ${className}`}>Finding Nemo</div>
    </div>
  );
};

FindingNemo_Navigation.propTypes = {
  className: PropTypes.string.isRequired,
};

export default FindingNemo_Navigation;