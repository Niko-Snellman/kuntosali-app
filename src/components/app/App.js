import React, { useState } from "react";
import "./App.css";
import Header from "../header/Header";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Diary from "../../routes/diary/Diary";
import Home from "../../routes/home/Home";
import Statistics from "../../routes/statistics/Statistics";
import Programs from "../../routes/programs/Programs";
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
                  Ohjelma
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/tilastot">
                  Tilastot
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/päiväkirja">
                  Päiväkirja
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Route path="/" exact strict component={Home}></Route>
        <Route path="/ohjelmat" component={Programs}></Route>
        <Route path="/tilastot" component={Statistics}></Route>
        <Route path="/päiväkirja" component={Diary}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
