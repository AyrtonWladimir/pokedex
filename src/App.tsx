import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Pokemon from "./pages/Pokemon";
import Pokemons from "./pages/Pokemons";
import Items from "./pages/Items";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/pokemons/:name" element={<Pokemon/>}/>
          <Route path="/pokemons" element={<Pokemons/>}/>
          <Route path="/items" element={<Items/>}/>
          <Route path="/" element={<Pokemons/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
