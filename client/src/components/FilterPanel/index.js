import React from 'react';
import PropTypes from 'prop-types';
import Select from '../UI/Select';
import InputText from '../UI/InputText';

const FilterPanel = ({ filter, setFilter }) => {
  const handleChangeFilter = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <div className="col-6 col-xl">
        <div className="mb-3">
          <Select
            label="Выбор колонки"
            name="column"
            value={filter.column}
            onChange={handleChangeFilter}
            options={[
              { label: 'Нажмите чтобы выбрать', value: '' },
              { label: 'Название', value: 'title' },
              { label: 'Количество', value: 'quantity' },
              { label: 'Расстояние', value: 'distance' },
            ]}
          />
        </div>
      </div>
      <div className="col-6 col-xl">
        <div className="mb-3">
          <Select
            label="Выбор условия"
            name="type"
            value={filter.type}
            onChange={handleChangeFilter}
            options={[
              { label: 'Нажмите чтобы выбрать', value: '' },
              { label: 'Равно', value: 'Равно' },
              { label: 'Содержит', value: 'Содержит' },
              { label: 'Больше', value: 'Больше' },
              { label: 'Меньше', value: 'Меньше' },

            ]}
          />
        </div>
      </div>
      <div className="col-6 col-xl">
        <div className="mb-3">
          <InputText
            type="text"
            label="Поиск по фильтру"
            name="query"
            value={filter.query}
            onChange={handleChangeFilter}
          />
        </div>
      </div>
    </>
  );
};

FilterPanel.propTypes = {
  filter: PropTypes.shape({
    column: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
  }).isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterPanel;
