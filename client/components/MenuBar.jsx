import React from 'react';
import styles from './MenuBar.css';
import Button from './Button.jsx';

const MenuBar = ({ loaded, data }) => (
  <div className="menu">
    <hr />
    {loaded &&
      data.foodMenu.map(menu =>
        <Button name={menu.name}/> )}
    {loaded &&
      data.drinksMenus.map(menu =>
        <Button name={menu.name}/> )}
    <hr />
  </div>
);

export default MenuBar;
