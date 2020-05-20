import React from "react";
import "./App.css";
import Header from "../header/Header";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Diary from "../routes/diary/Diary";
import Home from "../routes/home/Home";
import Statistics from "../routes/statistics/Statistics";
import Programs from "../routes/programs/Programs";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to="/" exact>
              Koti
            </NavLink>
          </li>
          <li>
            <NavLink to="/ohjelmat">Ohjelma</NavLink>
          </li>
          <li>
            <NavLink to="/tilastot">Tilastot</NavLink>
          </li>
          <li>
            <NavLink to="/päiväkirja">Päiväkirja</NavLink>
          </li>
        </ul>

        <Route path="/" exact strict component={Home}></Route>
        <Route path="/ohjelmat" component={Programs}></Route>
        <Route path="/tilastot" component={Statistics}></Route>
        <Route path="/päiväkirja" component={Diary}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
