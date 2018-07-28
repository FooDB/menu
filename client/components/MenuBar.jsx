import React from 'react';
import styles from './MenuBar.css';
import Button from './Button.jsx';

const MenuBar = ({ loaded, data, getViewInfo }) => (
  <div className="menu">
    <hr />
    {loaded &&
      data.foodMenu.map((menu, i) =>
        <Button type={'foodMenu'} index={i} name={menu.name} getViewInfo={getViewInfo} /> )}
    {loaded &&
      data.drinksMenus.map((menu, i) =>
        <Button type={'drinksMenus'} index={i} name={menu.name} getViewInfo={getViewInfo} /> )}
    <hr />
  </div>
);

export default MenuBar;
