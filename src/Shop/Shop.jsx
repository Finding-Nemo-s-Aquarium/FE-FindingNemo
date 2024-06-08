import { useState, useCallback } from 'react';
import Image from "./components/Image.module";
import PortalPopup from "./components/PortalPopup.module";
import './Shop.css';


const Shop = () => {
    const [isFrameOpen, setFrameOpen] = useState(false);

    const openFrame = useCallback(() => {
        setFrameOpen(true);
    }, []);

    const closeFrame = useCallback(() => {
        setFrameOpen(false);
    }, []);

    return (<>
        <div className="div">
            <img className="topEllipseIcon" alt="" src="Top Ellipse.png" />
            <div className="groupParent">
                <div className="groupContainer">
                    <div className="groupWrapper">
                        <div className="shopParent">
                            <div className="shop">
                                <div className="shop1">SHOP</div>
                            </div>
                            <div className="make">
                                <div className="shop1">MAKE</div>
                            </div>
                        </div>
                    </div>
                    <div className="parent">
                        <img className="icon" alt="" src="제목_없는_아트워크 3.png" />
                        <img className="icon1" alt="" src="제목_없는_아트워크 3 1.png" />
                        <img className="icon2" alt="" src="제목_없는_아트워크 2 1.png" />
                    </div>
                </div>
                <div className="findingNemoParent">
                    <div className="findingNemo">
                        <div className="shop1">Finding Nemo</div>
                    </div>
                    <img className="clownfishIcon" alt="" src="img/clownfish.png" />
                </div>
            </div>
            <div className="fishParent">
                <div className="fish">Fish</div>
                <div className="fishbowl">Fishbowl</div>
                <div className="plant">Plant</div>
                <div className="stone">Stone</div>
                <div className="flooring">Flooring</div>
            </div>
            <div className="guppyParent">
                <div className="guppy">Guppy</div>
                <div className="goldfish">Goldfish</div>
                <div className="betta">Betta</div>
                <div className="angelfish">
                    <span className="angelfishTxt">
                        <span>Angelfish</span>
                        <span className="span"></span>
                    </span>
                </div>
                <div className="tetra">Tetra</div>
            </div>
            <div className="groupDiv">
                <div className="boxParent">
                    <div className="box" onClick={openFrame}>
                        <div className="boxChild" />
                    </div>
                    <div className="box1">
                        <div className="boxChild" />
                    </div>
                    <div className="box2">
                        <div className="boxChild" />
                    </div>
                    <div className="box3">
                        <div className="boxChild" />
                    </div>
                </div>
                <div className="boxGroup">
                    <div className="box4">
                        <div className="boxChild" />
                    </div>
                    <div className="box1">
                        <div className="boxChild" />
                    </div>
                    <div className="box2">
                        <div className="boxChild" />
                    </div>
                    <div className="box3">
                        <div className="boxChild" />
                    </div>
                </div>
            </div>
            <img className="image23Icon" alt="" src="image 23.png" />
        </div>
        {isFrameOpen && (
            <PortalPopup
                overlayColor="rgba(113, 113, 113, 0.3)"
                placement="Centered"





                onOutsideClick={closeFrame}
            >
                <Image onClose={closeFrame} />
            </PortalPopup>
        )}</>);
};

export default Shop;
