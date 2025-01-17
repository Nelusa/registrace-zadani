import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleEmailChange = (event) => {
    const userEmailInput = event.target.value;
    console.log(event.target.value);
    if (
      user.username === '' &&
      userEmailInput.includes('@') &&
      userEmailInput.includes('.')
    ) {
      setUser({
        ...user,
        username: userEmailInput.slice(0, userEmailInput.indexOf('@')),
      });
      console.log(user);
    } else if (!userEmailInput.includes('@') && !userEmailInput.includes('.')) {
      console.log('Invalid email!');
    }
  };

  const handleUserChange = (event) => {
    setUser({ ...user, username: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const handlePasswordConfirmation = (event) => {
    setUser({ ...user, passwordConfirm: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (user.password === user.passwordConfirm) {
      console.log(`Registration of the user ${user.username} was successful.`);
      alert(`Your registration was successful! Welcome ${user.username}! 🎉`);
    } else {
      alert('Passwords you entered do not match! Try again 🔂');
    }
  };

  return (
    <>
      <div className="registration__container">
        <h1 className="registration__title">Registration</h1>

        <form id="registration__form" onSubmit={handleFormSubmit}>
          <div className="registration__icon-wrapper--outside">
            <div className="registration__icon-wrapper--inside">
              <img
                className="registration__icon"
                src={require('../img/user-icon.svg')}
              />
            </div>
          </div>

          <input
            id="email_address"
            placeholder="Email Address"
            type="email"
            onChange={handleEmailChange}
          />
          <input
            id="username"
            placeholder="User Name"
            type="text"
            value={user.username}
            onChange={handleUserChange}
          />
          <input
            id="password"
            placeholder="Password"
            type="password"
            value={user.password}
            onChange={handlePasswordChange}
          />
          <input
            id="confirm_password"
            placeholder="Confirm Password"
            type="password"
            value={user.passwordConfirm}
            onChange={handlePasswordConfirmation}
          />
          <button id="registration-button" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Registration;
