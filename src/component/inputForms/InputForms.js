import React from 'react';
import './InputForms.scss';
import { ReactComponent as HidePassword } from '../../asset/allSvg/hide_password.svg';

function InputForms({
  placeholder,
  value,
  marginBottom,
  onChange,
  hidePassword,
  changeInput
}) {
  return (
    <div className="inputWithIcon">
      <input
        onChange={(e) => changeInput(e)}
        type="text"
        placeholder={placeholder}
        className="input_inputforms"
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
