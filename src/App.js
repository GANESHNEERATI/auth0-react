import React from "react";
import "./style.css";
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import "./App.css";
import Nav from "./Nav";

export default function App() {
  return (
    <>
      <Nav />

      <div clasName="app">
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
      </div>
    </>
  );
}
