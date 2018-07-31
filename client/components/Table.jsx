import React from 'react';
import './Table.css';

const Table = (props) => {
  const {
    data
  } = props;

  return (
    <div className="section">
      {data.map(plate => (
        <div>
          <div className="title name">
            {plate.name}
          </div>
          <div className="title price">
            {plate.price}
          </div>
          <p className="description">
            {plate.description}
          </p>
        </div>))}
    </div>
  );
};
export default Table;
