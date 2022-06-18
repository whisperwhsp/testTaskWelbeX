import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ ...props }) => (
  <>
    {props.label && (<label htmlFor={props.name} className="form-label">{props.label}</label>)}
    <select
      id={props.name}
      className="form-select"
      name={props.name}
      defaultValue={props.value}
      onChange={props.onChange}
    >
      {props.options.map((option) => (
        <option value={option.value} key={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </select>
  </>
);

Select.defaultProps = {
  label: '',
  options: [],
};

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
  })),
};

export default Select;
