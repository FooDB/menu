import React from 'react';
import styles from './Table.css';

const Table = (props) => (
  <div className="table section">
    {props.loaded && props.menu[0].menu[0].items.map(plate =>
      <div>
        <div className="title name">{plate.name}</div>
        <div className="title price">{plate.price}</div>
        <p className="description">{plate.description}</p>
      </div>
     )}
  </div>
);

export default Table;
