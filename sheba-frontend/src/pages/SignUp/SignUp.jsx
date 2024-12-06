import React, { useState, useEffect } from "react";
import { registerUser, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isSuccess } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (isSuccess) {
      navigate("/dashboard");
      dispatch(reset());
    }
  }, [isSuccess, user, dispatch, navigate]);

  const { name, email, password, confirmPassword } = formData;

  // Handle change function to update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    dispatch(registerUser(formData));
  };

  return (
    <div className="login-wrapper">
      <div className="container">
        <h1 className="heading center">SignUp</h1>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email" // Use email input type for better validation
                name="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={handleChange}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password" // Secure password input
                name="password"
                placeholder="**********"
                value={password}
                onChange={handleChange}
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password" // Secure password input
                name="confirmPassword"
                placeholder="**********"
                value={confirmPassword}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="button-wrapper">
          <button onClick={handleSubmit}>SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
