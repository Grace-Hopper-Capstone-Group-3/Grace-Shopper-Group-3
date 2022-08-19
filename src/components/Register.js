import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../axios-services";

const Register = ({
  email,
  setEmail,
  password,
  setPassword,
  city,
  setCity,
  zip,
  setZip,
  state,
  setState,
  streetAddress,
  setStreetAddress,
  isLoggedIn
}) => {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const result = await register({
      email,
      password,
      streetAddress,
      city,
      state,
      zip,
    });
    if (result) {
      const token = result.token;
      localStorage.setItem("token", token);
      console.log("This is token in register component: ", token);
    }
    console.log("This the user data from register component: ", result);
    navigate("/login", { replace: true });
  }
  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="label">
          Email:
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></input>
        </label>
        <label className="label">
          Password:
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
        </label>
        <label className="label">
          Street Address:
          <input
            type="text"
            placeholder="street address"
            value={streetAddress}
            onChange={(event) => {
              setStreetAddress(event.target.value);
            }}
          ></input>
        </label>
        <label className="label">
          City:
          <input
            type="text"
            placeholder="city"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
          ></input>
        </label>
        <label className="label">
          State:
          <input
            type="text"
            placeholder="state"
            value={state}
            onChange={(event) => {
              setState(event.target.value);
            }}
          ></input>
        </label>
        <label className="label">
          Zip:
          <input
            type="text"
            placeholder="zip"
            value={zip}
            onChange={(event) => {
              setZip(event.target.value);
            }}
          ></input>
        </label>
        <div className="register-button-and-link-container">
          <button type="submit">Register</button>
          <Link className="register-link" to="/login">
            Already a User? Login here!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
