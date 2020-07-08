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
          <NavbarBrand href="/">kuntosali app</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/ohjelmat">
                  Ohjelmat
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/paivakirja">
                  Päiväkirja
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/tilastot">
                  Tilastot
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Route path="/" exact strict component={Home}></Route>
        <Route path="/ohjelmat" component={Programs}></Route>
        <Route path="/tilastot" component={Statistics}></Route>
        <Route path="/paivakirja" component={Diary}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
