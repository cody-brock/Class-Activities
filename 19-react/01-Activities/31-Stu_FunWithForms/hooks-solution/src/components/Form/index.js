import React, { useState } from "react";
import "./style.css";

const Form = () => {
  // Setting the component's initial state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: ''
  });

  const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const { name } = event.target;
    if (value.length > 15) {
      value = value.substring(0, 15);
    }

    // Updating the input's state
    const newState = {
      ...formData,
      [name]: value
    };
    setFormData(newState);
  };

  const handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if (!formData.firstName || !formData.lastName) {
      alert('Fill out your first and last name please!');
    } else if (formData.password.length < 6) {
      alert(`Choose a more secure password, ${formData.firstName}`);
    } else {
      alert(`Hello, ${formData.firstName} ${formData.lastName}`)
    }
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    //alert(`Hello ${formData.firstName} ${formData.lastName}`);
    setFormData({
      firstName: "",
      lastName: "",
      password: ""
    });
  };
  // Notice how each input has a `value`, `name`, and `onChange` prop
  const { firstName, lastName, password } = formData;
  return (
    <div>
      <p>
        Hello {userData.firstName} {userData.lastName}
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
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
          // maxLength={15}
        />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
