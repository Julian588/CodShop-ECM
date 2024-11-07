import { useState } from "react";

function useFieldsValues(initialState) {
  const [fields, setFields] = useState(initialState);

  const handleFieldChange = (e, name) => {
    const value = e.target.value.trim();
    setFields({
      ...fields,
      [name]: value,
    });
  };

  return [fields, setFields, handleFieldChange];
}

export default useFieldsValues;
