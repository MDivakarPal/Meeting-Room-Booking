import Header from "./components/Header";
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutManager from "./components/routmanager";
import React from "react";
import ContextApi from './components/ContextApi'
function App() {
  return (
    <ContextApi>
    <Router>
          <div className="container-fluid">
            <div className="row">
              {" "}
              <Header />
            </div>
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-6 main-container">
                <center>
                  <div>
                   <RoutManager/>
                  </div>
                </center>
              </div>
            </div>
          </div>
          </Router>
          </ContextApi>
       );
}

export default App;
