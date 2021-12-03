import React from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import DataForm from "./components/DataForm";
import "./components/DataForm.css";
function App() {
  return (
    <React.Fragment>
      <div>
        <BrowserRouter>
          <div className="navbar_main">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-dark">
              <h3 className="navbar-brand ml-5"> Learner's Hub</h3>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <div>
                      <Link
                        to="/myreact-project"
                        className="nav-link"
                        className="navbar-brand"
                      >
                        Home
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item active">
                    <div>
                      <Link
                        to="/contact"
                        className="nav-link"
                        className="navbar-brand"
                      >
                        Contact
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div>
                      <Link
                        to="/details"
                        className="nav-link"
                        className="navbar-brand"
                      >
                        Details
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/myreact-project" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/details" element={<DataForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
