/*import React, { useState } from "react";
import {useForm } from 'react-hook-form'
const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Perform CRUD operation here, for example:
    // createUser(formData);
  };

    
 const submitForm = (data )=>
 { console.log(data)};


  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;*/
