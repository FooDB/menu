import React from 'react';
import styles from './Table.css';

const Table = (props) => (
  <div className="section">
    {props.data.map(plate =>
      <div>
        <div className="title name">{plate.name}</div>
        <div className="title price">{plate.price}</div>
        <p className="description">{plate.description}</p>
      </div>
      )}
  </div>
);

export default Table;
