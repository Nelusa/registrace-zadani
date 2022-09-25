import React, { useState } from 'react';

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  return (
    <>
      <form id="registration-form">
        <h1>Registration</h1>
        <input id="email_address" placeholder="Email Address" type="email" />
        <input id="user_name" placeholder="User Name" type="text" />
        <input id="password" placeholder="Password" type="password" />
        <input
          id="confirm_password"
          placeholder="Confirm Password"
          type="password"
        />
        <button id="registration-btn" type="submit">
          Register
        </button>
      </form>
    </>
  );
};

export default Registration;
