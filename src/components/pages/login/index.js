import "./styles.scss";
import React, { useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

import AuthApi from "../../../providers/Auth";

import InputField from "../../formComponents/inputField";

const LogIn = () => {
  const [values, setValues] = useState({});
  const { setAuth } = useContext(AuthApi);
  useEffect(() => {
    if (Cookies.get("auth")) setAuth(true);
  }, []);

  const logIn = values => {
    if (values.email && values.password) {
      setAuth(true);
      Cookies.set("auth", "loggedIn");
    }
  };

  return (
    <div className="log-in small-margin-top">
      <form onSubmit={() => logIn(values)} className="log-in__form">
        <div className="log-in__title ">Log in to your account</div>
        <div>
          <InputField
            type="email"
            placeHolder="Email"
            value={values.email}
            onChange={email => setValues({ ...values, email })}
            label="Email"
          />
          <InputField
            type="password"
            placeHolder="password"
            value={values.password}
            onChange={password => setValues({ ...values, password })}
            label="Password"
          />
        </div>
        <div className="log-in__button">
          <button type="submit" className="boxed-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
