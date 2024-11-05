import "../CSS/formfield.css";

function FormField({
  children,
  name,
  id,
  type,
  value,
  onChange,
  isSelect = false,
  options = [],
  placeholder,
  icon1,
  icon2,
}) {
  return (
    <div className="field-container">
      <label className="field-label" htmlFor={name}>
        {children}
      </label>
      {!isSelect ? (
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
      ) : (
        <select
          className="field-select"
          name={name}
          id={id}
          onChange={onChange}
        >
          <option value="" selected disabled></option>
          {options.map((option) => {
            return (
              <option value={option.value} key={option.value}>
                {option.name}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
}

export default FormField;
