import FormField from "@layout/FormField/FormField";

function SelectContainer({
  arraySelect,
  setArraySelect,
  title,
  fieldId,
  value,
  setValue,
  valuesArray,
  handleSelectValue,
}) {
  const handleAddSelect = (selectArray, setSelectArray, selectValue) => {
    if (selectArray.length >= 3) return;
    for (let i = 0; i < selectValue.length; i++) {
      if (selectValue[i] === "") {
        console.log("Error");
        return;
      }
    }
    setSelectArray((prevState) => [...prevState, { name: "" }]);
  };

  const deleteFromSelectArray = (
    array,
    setArray,
    selectValue,
    setSelectValue
  ) => {
    const newArray = [...array];
    const newValue = [...selectValue];
    if (newArray.length <= 1) return;
    newArray.pop();
    selectValue.pop();
    setArray(newArray);
    setSelectValue(newValue);
  };

  return (
    <div className="select-container">
      <label>{title}</label>
      <div className="select-wrapper">
        {arraySelect.map((gender, index) => {
          return (
            <>
              <FormField
                isSelect={true}
                name={(gender.name = `game_gender${index}`)}
                id={fieldId}
                key={index}
                options={valuesArray}
                onChange={(e) => handleSelectValue(e, setValue, index)}
                defaultValue={""}
              />
            </>
          );
        })}
        <button
          className="delete-select"
          type="button"
          onClick={() =>
            deleteFromSelectArray(arraySelect, setArraySelect, value)
          }
        >
          <i className="fa-solid fa-x"></i>
        </button>
        <button
          className="btn-add-select"
          type="button"
          onClick={() => handleAddSelect(arraySelect, setArraySelect, value)}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default SelectContainer;
