import React, { useState } from "react";
import "./style.css";

const Form = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: ''
  });

  const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const {value, name} = event.target;

    // Updating the input's state
    const newState = {
      ...formData,
      [name]: value
    }
    setFormData(newState);
  };

  const handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    const {firstName, lastName, password} = formData;

    if (!firstName || !lastName) {
      return alert(`Please fill out your first and last name`)
    }

    if (password < 6) {
      return(`Please choose a more secure password, ${firstName} ${lastName}`)
    }

    // Alert the user their first and last name, clear `firstName` and `lastName`, clearing the inputs
    alert(`Hello, ${firstName} ${lastName}`);
    setFormData({
      firstName: "",
      lastName: "",
      password: ""
    });
  };


  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <div>
      <p>
        Hello {formData.firstName} {formData.lastName}
      </p>
      <form className="form">
        <input
          value={formData.firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={formData.lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={formData.password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
          maxLength={15}
        />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
