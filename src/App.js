import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Services from "./components/Trainers/Services";
import Aboutus from "./components/Aboutus/aboutus";
import Footer from "./components/Footer/Footer";

const App = () => (
  <div className="App">
    <Main />
    <Services />
    <Aboutus />
    <Footer />
  </div>
);

export default App;
