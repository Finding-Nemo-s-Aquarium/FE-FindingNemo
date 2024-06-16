import { useState } from 'react';
import PropTypes from 'prop-types';
import Palette from './Palette.jsx';
import Canvas from './Canvas.jsx';
import Bill from './Bill.jsx';
import BeforeNavigation from "../Navigation/BeforeNavigation";
import AfterNavigation from "../Navigation/AfterNavigation";
import './Make.css';

Make.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

function Make({ isLoggedIn }) {
  const [images, setImages] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleImageSelect = (src, price) => {
    const newImage = { src, id: Date.now(), x: 0, y: 0, price };
    setImages([...images, newImage]);
    setTotalPrice(prevTotal => prevTotal + price);
  };

  const handleImageDelete = (id, price) => {
    const newImages = images.filter(image => image.id !== id);
    setImages(newImages);
    setTotalPrice(prevTotal => prevTotal - price);
  };

  const handleImageToFront = (index) => {
    const newImages = [...images];
    const movedImage = newImages.splice(index, 1)[0];
    newImages.push(movedImage);
    setImages(newImages);
  };

  const handleImageToBack = (index) => {
    const newImages = [...images];
    const movedImage = newImages.splice(index, 1)[0];
    newImages.unshift(movedImage);
    setImages(newImages);
  };

  const handleContextMenu = (e, id, index) => {
    e.preventDefault();
    const menuItems = [
      { label: '삭제', action: () => handleImageDelete(id, images[index].price) },
    ];
    showContextMenu(e, menuItems);
  };

  const showContextMenu = (e, menuItems) => {
    const menu = document.createElement('div');
    menu.className = 'context-menu';
    menuItems.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.textContent = item.label;
      menuItem.onclick = () => {
        item.action();
        menu.remove();
      };
      menu.appendChild(menuItem);
    });
    menu.style.top = `${e.clientY}px`;
    menu.style.left = `${e.clientX}px`;
    document.body.appendChild(menu);
    document.addEventListener('click', () => menu.remove(), { once: true });
  };

  const updateImagePosition = (index, newX, newY) => {
    const updatedImages = [...images];
    updatedImages[index] = { ...updatedImages[index], x: newX, y: newY };
    setImages(updatedImages);
  };

  return (
    <div className='Make'>
      <div className="head">
        {isLoggedIn ? <AfterNavigation /> : <BeforeNavigation />}
          </div>
      <div className='Making'>
        <div className="Edit">
          
          <div className="body">
            <Canvas
              images={images}
              handleImageDelete={handleImageDelete}
              handleImageToFront={handleImageToFront}
              handleImageToBack={handleImageToBack}
              handleContextMenu={handleContextMenu}
              updateImagePosition={updateImagePosition}
            />
            <Palette handleImageSelect={handleImageSelect} />
          </div>
        </div>
        <div className="footer">
          <Bill images={images} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
}

export default Make;
