import React from 'react';
import PropTypes from 'prop-types';
import Select from '../UI/Select';
import InputText from '../UI/InputText';

const FilterPanel = ({ ...props }) => (
  <>
    <div className="col-6 col-xl">
      <div className="mb-3">
        <Select
          label="Колонка для фильтрации"
          name="columnFilter"
          value={props.column}
          onChange={props.handleSetColumn}
          options={[
            { label: 'Нажмите чтобы выбрать', value: '' },
            { label: 'Название', value: 'Название' },
            { label: 'Количество', value: 'Количество' },
            { label: 'Расстояние', value: 'Расстояние' },
          ]}
        />
      </div>
    </div>
    <div className="col-6 col-xl">
      <div className="mb-3">
        <Select
          label="Колонка для фильтрации"
          name="typeFilter"
          value={props.typeFilter}
          onChange={props.handleSetTypeFilter}
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
          label="Значения для фильтра"
          name="valueFilter"
          value={props.valueFilter}
          onChange={props.handleSetValueFilter}
        />
      </div>
    </div>
    <div className="col-6 col-xl-1">
      <button type="button" className="mt-3 btn btn-outline-danger" onClick={props.resetFilter}>Сброс</button>
    </div>
  </>
);

FilterPanel.propTypes = {
  column: PropTypes.string.isRequired,
  typeFilter: PropTypes.string.isRequired,
  valueFilter: PropTypes.string.isRequired,
  handleSetColumn: PropTypes.func.isRequired,
  handleSetTypeFilter: PropTypes.func.isRequired,
  handleSetValueFilter: PropTypes.func.isRequired,
  resetFilter: PropTypes.func.isRequired,
};

export default FilterPanel;
