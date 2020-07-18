import React, { useState } from "react";
import "./App.css";
import Header from "../header/Header";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Diary from "../../routes/Diary";
import Home from "../../routes/Home";
import Statistics from "../../routes/Statistics";
import Programs from "../../routes/Programs";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/kuntosali-app">kuntosali app</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/kuntosali-app/ohjelmat">
                  Ohjelmat
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/kuntosali-app/paivakirja">
                  Päiväkirja
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/kuntosali-app/tilastot">
                  Tilastot
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Route path="/kuntosali-app" exact strict component={Home}></Route>
        <Route path="/kuntosali-app/ohjelmat" component={Programs}></Route>
        <Route path="/kuntosali-app/tilastot" component={Statistics}></Route>
        <Route path="/kuntosali-app/paivakirja" component={Diary}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
