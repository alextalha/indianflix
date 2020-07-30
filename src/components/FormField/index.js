import React from "react";

function FormField({ value, onChange, label, type, name }) {
  return (
    <label>
      {label}
      <input onChange={onChange} name={name} type={type} value={value} />
    </label>
  );
}

export default FormField;
