import React from "react";
import ReactRouter from "./Router";
import "./App.css"
import { AuthContextProvider } from './context/AuthContext'
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';


axios.defaults.withCredentials = true;



function App() {

  return (
    <AuthContextProvider>
     <ReactRouter />
    </AuthContextProvider>
  )
}

export default App;


