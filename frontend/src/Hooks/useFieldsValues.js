import { useState } from "react";

function useFieldsValues(initialState) {
  const [fields, setFields] = useState(initialState);

  const handleFieldChange = (e, name) => {
    const value = e.target.value;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  return [fields, handleFieldChange];
}

export default useFieldsValues;
