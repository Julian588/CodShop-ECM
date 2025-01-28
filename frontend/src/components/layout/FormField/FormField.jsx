import "./FormField.css";

function FormField({
  children,
  name,
  id,
  type,
  value,
  onChange,
  placeholder,
  icon1,
  icon2,
}) {
  return (
    <div className="field-container">
      <label className="field-label" htmlFor={name}>
        {children}
      </label>
      <div className="input-wrapper">
        <span className="input-icon2">{icon1}</span>
        <input
          placeholder={placeholder}
          className="field-input"
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        />
        <span className="input-icon2">{icon2}</span>
      </div>
    </div>
  );
}

export default FormField;
