import React from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, fas);

const App = () => (
  <div>
    <Header />
    <Landing />
  </div>
);

export default App;
