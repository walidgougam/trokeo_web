import React from 'react';
import './InputForms.scss';
import { ReactComponent as HidePassword } from '../../asset/allSvg/hide_password.svg';

function InputForms({
  placeholder,
  value,
  marginBottom,
  onChange,
  hidePassword,
  changeInput,
  name
}) {
  return (
    <div className="inputWithIcon">
      <input
        onChange={changeInput}
        type="text"
        placeholder={placeholder}
        className="input_inputforms"
        name={name}
      />
      {hidePassword && (
        <div className="i">
          <HidePassword />
        </div>
      )}
    </div>
  );
}

export default InputForms;
