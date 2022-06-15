import React from 'react';

import data from './mock.json';

const Table = () => {
  console.log(data);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Название</th>
          <th>Количество</th>
          <th>Расстояние</th>
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row) => (
          <tr key={row.date}>
            <td>{row.date}</td>
            <td>{row.title}</td>
            <td>{row.quantity}</td>
            <td>{row.distance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
