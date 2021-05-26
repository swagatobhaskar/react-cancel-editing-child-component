import React, { useState } from "react";

export default function EditProfileComponent({
  fieldName,
  value,
  inputType,
  placeHolder,
  name,
  onSubmit,
  isEdit,
  setEdit
}) {
  // the current, unsaved value of the input
  const [current, setCurrent] = useState(value);

  // sets edit state in the parent
  // sets current to value in case value has changed since last edit
  const onEdit = () => {
    setCurrent(value);
    setEdit(true);
  };

  // sets edit in the parent
  // don't need to reset current because we aren't showing the input
  const onCancel = () => {
    setEdit(false);
  };

  // set local state on change
  // don't update parent until submitting
  const onChange = (e) => {
    setCurrent(e.target.value);
  };

  // need to send the current value to the parent AND ALSO stop editing
  // could do that in the parent instead
  const onSave = () => {
    setEdit(false);
    onSubmit(current);
  };

  // input is the same in Add and Edit cases
  const renderInput = () => (
    <input
      type={inputType}
      value={current}
      placeholder={placeHolder}
      name={name}
      onChange={onChange}
    />
  );

  return (
    <p>
      {fieldName}:{" "}
      {value === "" ? (
        <span>
          {renderInput()}
          <button type="submit" onClick={onSubmit}>
            Add
          </button>
        </span>
      ) : !isEdit ? (
        <span>
          {" "}
          {value} <button onClick={onEdit}>Edit</button>
        </span>
      ) : (
        <span>
          {renderInput()}
          <button type="submit" onClick={onSave}>
            Save
          </button>
          <button type="submit" onClick={onCancel}>
            Cancel
          </button>
        </span>
      )}
    </p>
  );
}
