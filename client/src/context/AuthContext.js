  
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);

  async function getLoggedIn() {
    // const loggedInRes = await axios.get("https://snueze.herokuapp.com/auth/loggedIn");
    const loggedInRes = await axios.get("http://localhost:3001/auth/loggedIn");
    setLoggedIn(loggedInRes.data);
    // console.log(loggedInRes)
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };