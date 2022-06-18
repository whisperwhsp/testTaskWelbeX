import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
  count, page, setPage, data,
}) => {
  console.log(count);

  return (
    <div className="btn-group" role="group" aria-label="Basic outlined example">
      <button
        type="button"
        className="btn btn-outline-primary"
        disabled={page <= 1}
        onClick={() => setPage((prev) => prev - 1)}
      >
        Назад

      </button>
      <button type="button" className="btn btn-outline-primary" disabled>{page}</button>

      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => setPage((prev) => prev + 1)}
        disabled={data.length < 5}
      >
        Вперед
      </button>
    </div>
  );
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    dateutc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    distance: PropTypes.number.isRequired,
  })).isRequired,
};

export default Pagination;
