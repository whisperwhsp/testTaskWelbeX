import React from 'react';
import PropTypes from 'prop-types';
import cl from './Table.module.css';

const Table = ({ ...props }) => {
  const [sortColumn, setSortColumn] = React.useState('');

  const sortData = (sort) => {
    setSortColumn(sort);
    props.setData([...props.data].sort((a, b) => {
      if (typeof a[sort] === 'string') return a[sort].localeCompare(b[sort]);
      return a[sort] - b[sort];
    }));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Дата</th>
          <th className={cl.thSort} onClick={() => sortData('title')}>
            <span>Название</span>
          </th>
          <th className={cl.thSort} onClick={() => sortData('quantity')}>
            <span>Количество</span>
          </th>
          <th className={cl.thSort} onClick={() => sortData('distance')}>
            <span>Расстояние</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((row) => {
          const formattedDate = new Date(row.dateutc);
          const stringDate = `${formattedDate.getDate()}.${formattedDate.getMonth()}.${formattedDate.getFullYear()}`;

          return (
            <tr key={row.dateutc}>
              <td>{stringDate}</td>
              <td>{row.title}</td>
              <td>{row.quantity}</td>
              <td>{row.distance}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    dateutc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    distance: PropTypes.number.isRequired,
  })).isRequired,
  setData: PropTypes.func.isRequired,
};

export default Table;
