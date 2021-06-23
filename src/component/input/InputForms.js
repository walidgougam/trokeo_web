import React from 'react';
import './InputForms.scss';
import { ReactComponent as HidePassword } from '../../asset/allSvg/hide_password.svg';

function InputForms({ placeholder, value, marginBottom, onChange, hidePassword }) {
  return (<div class="inputWithIcon">
    <input type="text" placeholder="Your name" className='input_inputforms' />
    {hidePassword && <div className='i'>
      <HidePassword />
    </div>}
  </div>
  )
}

export default InputForms


{/* <>
        <input
          type="text"
          value={value}
          className="container_input"
          placeholder={placeholder}
          style={{ marginBottom }}
          onChange={(e) => onChange(e)}
        />
      </> */}