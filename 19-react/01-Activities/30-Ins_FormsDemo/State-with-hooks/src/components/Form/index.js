import React, { useState } from "react";
import "./style.css";

const Form = () => {
  // Setting the component's initial state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    console.log('event.target', event.target)

    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${formData.firstName} ${formData.lastName}`);
    setFormData({
      firstName: "",
      lastName: ""
    });
  };
    // Notice how each input has a `value`, `name`, and `onChange` prop
    const { firstName, lastName} = formData;
    return (
      <div>
        <p>
          Hello {firstName} {lastName}
        </p>
        <form className="form">
          <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <button onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
}

export default Form;
