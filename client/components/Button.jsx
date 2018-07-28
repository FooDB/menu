import React from 'react';
import styles from './Button.css';

const Button = ({ type, index, name, getViewInfo }) => (

  <button onClick={() => getViewInfo(index, name, type)} className='btn'>{name}</button>

);

export default Button;