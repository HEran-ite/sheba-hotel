import React, { useState, useEffect } from "react";
import { loginUser, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isSuccess } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  useEffect(() => {
    if (isSuccess) {
      navigate("/dashboard");
      dispatch(reset());
    }
  }, [isSuccess, dispatch, navigate, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  return (
    <div className="login-wrapper">
        <div className="container">
          <h1 className="heading center">Login</h1>
          <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="**********"
                  value={password}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          <div className="button-wrapper">
            <button onClick={handleSubmit}>Login</button>
          </div>
        </div>
    </div>
  );
};

export default Login;
