import { useState } from "react";

function useFieldsValues(initialState) {
  const [inputValues, setInputValues] = useState(initialState);

  const handleInputChange = (e, name) => {
    const value = e.target.value;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
    console.log(inputValues);
  };

  return [inputValues, setInputValues, handleInputChange];
}

export default useFieldsValues;
