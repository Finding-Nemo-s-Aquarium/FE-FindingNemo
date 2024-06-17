import { useNavigate } from 'react-router-dom';
import "./Profile_Navigation.css"

const Profile_Navigation = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/profile');
    };

    return (
            <div className="PROFILE" onClick={handleClick}></div>
    );
};

export default Profile_Navigation;