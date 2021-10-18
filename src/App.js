import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Guidelines from "./components/Guidelines/Guidelines";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Notfound from "./components/Notfound/Notfound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/services">
            <Services></Services>
          </Route>

          <Route exact path="/guidelines">
            <Guidelines></Guidelines>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
