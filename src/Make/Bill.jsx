// Bill.jsx

import React from 'react';// eslint-disable-line no-unused-vars
    
import PropTypes from 'prop-types';

const Bill = ({ totalPrice }) => {
  // totalPrice가 객체인 경우, 예를 들어 { amount: 100 }과 같이 되어 있는 경우
  const amount = typeof totalPrice === 'object' ? totalPrice.amount : totalPrice;

  return (
    <div>
      <p>Total Price: {amount}</p>
    </div>
  );
};

Bill.propTypes = {
  totalPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
};

export default Bill;
