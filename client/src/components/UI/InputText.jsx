import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({ ...props }) => (
  <>
    <label htmlFor={props.name} className="form-label">
      {props.label}
    </label>
    <input
      type={props.type}
      id={props.name}
      className="form-control"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required={props.required}
    />

  </>
);

InputText.defaultProps = {
  label: '',
  placeholder: '',
  required: false,
};

InputText.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default InputText;
