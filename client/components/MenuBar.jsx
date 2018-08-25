import React from 'react';
// import './MenuBar.css';
import Button from './Button';

const MenuBar = (props) => {
  const {
    loaded,
    data,
    getViewInfo
  } = props;
  return (
    <div className="menu">
      <hr />
      {loaded &&
        Object.keys(data).map((menu, i) => <Button key={i} type={'foodMenu'} index={i} name={menu} getViewInfo={getViewInfo} />)}
      {/* {loaded &&
        data.drinksMenus.map((menu, i) => <Button key={i} type={'drinksMenus'} index={i} name={menu.name} getViewInfo={getViewInfo} />)} */}
      <hr />
    </div>
  );
};

export default MenuBar;
