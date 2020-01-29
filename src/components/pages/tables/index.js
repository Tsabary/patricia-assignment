import "./styles.scss";
import React, { useContext } from "react";
import Cookies from "js-cookie";

import AuthApi from "../../../providers/Auth";

import BoxedButton from "../../formComponents/boxedButton";
import SearchInput from "../../search/searchInput";
import Results from "../../search/results";

const Tables = () => {
  const { setAuth } = useContext(AuthApi);

  const logOut = () => {
    setAuth(false);
    Cookies.remove("auth");
  };
  return (
    <div className="tables">
      <div className="flex-group-spaced">
        <div className="tables__title">
          Search our database
        </div>
        <div className="tables__logout">
          <BoxedButton text="Log Out" action={logOut} />
        </div>
      </div>
      <SearchInput />
      <Results />
    </div>
  );
};

export default Tables;
