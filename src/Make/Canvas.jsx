import React from 'react';// eslint-disable-line no-unused-vars
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import'./Canvas.css'

const Canvas = ({ images, handleImageDelete, handleImageToFront, handleContextMenu, updateImagePosition }) => {

  // 드래그 시작 시 호출되는 함수
  const handleDragStart = (e, data) => {// eslint-disable-line no-unused-vars
    e.stopPropagation(); // 이벤트 전파 중단
  };

  // 드래그 종료 시 호출되는 함수
  const handleStop = (e, data, index) => {
    updateImagePosition(index, data.x, data.y); // 이미지 위치 업데이트
    handleImageToFront(index); // 이미지를 화면 앞으로 가져오기
  };

  return (
    <div className="canvas">
      {/* images 배열을 순회하며 각 이미지에 Draggable 컴포넌트 적용 */}
      {images.map((image, index) => (
        <Draggable
          key={image.id} // 이미지 고유 식별자를 key로 사용
          defaultPosition={{ x: image.x, y: image.y }} // 이미지의 초기 위치 설정
          onStop={(e, data) => handleStop(e, data, index)} // 드래그 종료 시 handleStop 함수 호출
        >
          <div
            className="image-container"
            style={{ zIndex: index, position: 'absolute', height: "100px", width: "100px" }}
            onContextMenu={(e) => handleContextMenu(e, image.id, index)} // 이미지 우클릭 시 handleContextMenu 함수 호출
          >
            <img src={image.src} alt="이미지" onDragStart={handleDragStart} /> {/* 이미지 요소 */}
            <button onClick={() => handleImageDelete(image.id, image.price)}>삭제</button> {/* 삭제 버튼 */}
          </div>
        </Draggable>
      ))}
    </div>
  );
}

// prop 유효성 검사
Canvas.propTypes = {
  images: PropTypes.array.isRequired, // images 배열은 필수로 전달되어야 하며 배열 형태여야 함
  handleImageDelete: PropTypes.func.isRequired, // 이미지 삭제 함수가 필수로 전달되어야 함
  handleImageToFront: PropTypes.func.isRequired, // 이미지를 앞으로 가져오는 함수가 필수로 전달되어야 함
  handleContextMenu: PropTypes.func.isRequired, // 이미지 우클릭 메뉴 처리 함수가 필수로 전달되어야 함
  updateImagePosition: PropTypes.func.isRequired, // 이미지 위치 업데이트 함수가 필수로 전달되어야 함
};

export default Canvas;
