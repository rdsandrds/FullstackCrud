import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ListEmployeeComponents from "./components/ListEmployeeComponents";
import HeaderComponents from "./components/HeaderComponents";
import FooterComponents from "./components/FooterComponents";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";
// import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
// import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponents />
          <div className="container">
            <Routes>
              {" "}
              localhost:5173/update-employee/1
              <Route path="/" exact element={<ListEmployeeComponents/>} />
              <Route path="/employees" element={<ListEmployeeComponents/>} />
              <Route path="/add-employee" element={<CreateEmployeeComponent/>} />
              <Route
                path="/update-employee/:id"
                element ={<UpdateEmployeeComponent/>}
              />
              <Route
                path="/view-employee/:id"
                element ={<ViewEmployeeComponent/>}
              />
            </Routes>
          </div>
          <FooterComponents />
        </div>
      </Router>
    </div>
  );
}

export default App;
