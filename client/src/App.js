import React from "react";
import ReactRouter from "./Router";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="stars">
      <div className="twinkling">
        <div className= "clouds">
        <AuthContextProvider>
          <ReactRouter />
        </AuthContextProvider>
      </div>
    </div>
    </div>
  );
}

export default App;
