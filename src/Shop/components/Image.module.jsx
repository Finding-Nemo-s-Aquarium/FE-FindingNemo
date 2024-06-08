import PropTypes from "prop-types";
import './Image.module.css';

const Image = ({ className = "" }) => {
    return (
        <div className={["div", className.join(' ')]}>
            <img className="image22Icon" alt="" src="image 22.png" />
            <img className="image19Icon" alt="" src="image 19.png" />
            <img className="fishbowl30420012801Icon" alt="" src="fishbowl-304200_1280 1.png" />
            <img className="image19Icon1" alt="" src="image 19.png" />
            <img className="image23Icon" alt="" src="image 23.png" />
            <img className="image24Icon" alt="" src="image 24.png" />
        </div>);
};

Image.propTypes = {
    className: PropTypes.string
};

export default Image;