import React from 'react';
import PropTypes from 'prop-types';
import cl from './Table.module.css';

const Table = ({ ...props }) => {
  const [sortColumn, setSortColumn] = React.useState('');

  const getSortedData = (sort) => {
    if (!sort) return props.data;

    return [...props.data].sort((a, b) => {
      if (typeof a[sort] === 'string') return a[sort].localeCompare(b[sort]);
      return a[sort] - b[sort];
    });
  };

  const sortData = React.useMemo(() => getSortedData(sortColumn), [props.data, sortColumn]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Дата</th>
          <th
            className={cl.thSort}
            onClick={() => setSortColumn('title')}
          >
            <span>Название</span>
          </th>
          <th
            className={cl.thSort}
            onClick={() => setSortColumn('quantity')}
          >
            <span>Количество</span>
          </th>
          <th
            className={cl.thSort}
            onClick={() => setSortColumn('distance')}
          >
            <span>Расстояние</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortData.map((row) => {
          const formattedDate = new Date(row.dateutc);
          // eslint-disable-next-line max-len
          const stringDate = `${formattedDate.getDate()}.${formattedDate.getMonth() + 1}.${formattedDate.getFullYear()}`;

          return (
            <tr key={row.id}>
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
