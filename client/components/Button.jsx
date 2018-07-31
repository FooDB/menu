import React from 'react';
import './Button.css';

const Button = (props) => {
  const {
    type,
    index,
    name,
    getViewInfo
  } = props;

  return (
    <button type="button" onClick={() => getViewInfo(index, name, type)} className="btnMenu">
      {name}
    </button>
  );
};

export default Button;
