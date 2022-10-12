import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { illustration, logo } from "assets";
import { InputField } from "components";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  let history = useNavigate();

  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ): void => {
    const { value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  return (
    <div className="login-page">
      <div className="svg-section">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <img src={illustration} alt="pablo-sign-in" className="login-img" />
      </div>
      <div className="form-section">
        <div className="header">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="form-container">
          <h4>Welcome!</h4>
          <p>Enter details to login.</p>
          <form>
            <InputField
              placeholder="Email"
              type="email"
              size="large"
              id="email"
              value={formValues.email}
              onChange={(e) => handleChange(e, "email")}
              required
            />

            <InputField
              placeholder="Password"
              type="password"
              size="large"
              id="password"
              minLength={6}
              value={formValues.password}
              onChange={(e) => handleChange(e, "password")}
              required
            />

            <a href="/#">Forgot Password?</a>
            <button
              type="submit"
              onClick={() => history("/dashboard")}
              className="btn btn-green"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
