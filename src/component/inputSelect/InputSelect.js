import React from 'react';
import './InputSelect.scss';

export default function InputSelect({ onChange }) {
  return (
    <select
      className="input_inputselect"
      style={{ width: 344, marginBottom: 37 }}
      onChange={(e) => onChange(e)}>
      <option style={{ color: 'red' }} value="" selected disabled hidden>
        Sélectionnez
      </option>
      <option value="homme">Homme</option>
      <option value="femme">Femme</option>
      <option value="org">Organisation à but non lucratif</option>
    </select>
  );
}
