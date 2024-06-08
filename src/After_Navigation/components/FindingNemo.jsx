import PropTypes from 'prop-types';
import "./FindingNemo.css";

const FindingNemo = ({ className }) => {
  return (
    <div className="finding-nemo">
      <div className={`text-wrapper ${className}`}>Finding Nemo</div>;
    </div>
  );
};

FindingNemo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default FindingNemo;
