import React, { useState, Component } from "react";
import "./App.css";

function App() {
  const name = { fname: "khushnam Singh", city: "Jamshedpur" };
  function hello() {
    return "kanhaiya kumar";
  }
  return (
    <>
      <h1>Hello React</h1>
      <h1>Hello :{hello()} </h1>
      <h1>Your first name : {name.fname}</h1>
      <h1>Your City Name : {name.city}</h1>
    </>
  );
}

export default App;
