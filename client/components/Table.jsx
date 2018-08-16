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
            {plate[0]}
          </div>
          <div className="title price">
            {plate[2]}
          </div>
          <p className="description">
            {plate[1]}
          </p>
        </div>))}
    </div>
  );
};
export default Table;
