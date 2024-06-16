import { useNavigate } from 'react-router-dom';
import "./Profile.css"

const Profile = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/profile');
    };

    return (
            <div className="PROFILE" onClick={handleClick}></div>
    );
};

export default Profile;