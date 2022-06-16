import React from 'react';
import PropTypes from 'prop-types';
import cl from './Table.module.css';

const Table = ({ ...props }) => {
  const [sortColumn, setSortColumn] = React.useState('');
  const [data, setData] = React.useState(props.data);

  const sortData = (sort) => {
    setSortColumn(sort);
    setData([...data].sort((a, b) => {
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
        {data.map((row) => (
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

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    distance: PropTypes.number.isRequired,
  })).isRequired,
};

export default Table;
