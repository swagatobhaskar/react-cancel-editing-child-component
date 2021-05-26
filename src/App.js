import "./styles.css";
import EditProfileComponent from "./EditProfile";
import { useState } from "react";

export default function App() {
  const [about, setAbout] = useState("Hi there");

  const handleUserAbout = (value) => {
    setAbout(value);
    console.log(value);
  };

  const [isEditFields, setIsEditFields] = useState({});

  const handleSetEdit = (name, isEdit) => {
    setIsEditFields((prev) => ({
      ...prev,
      [name]: isEdit
    }));
  };

  return (
    <div className="App">
      <EditProfileComponent
        fieldName={"About"}
        value={about}
        inputType={"text"}
        placeHolder={"Enter some info"}
        name={"about"}
        // no more onChange
        onSubmit={handleUserAbout} // is a function that takes the value
        isEdit={isEditFields.about}
        setEdit={(isEdit) => handleSetEdit("about", isEdit)}
      />
    </div>
  );
}
