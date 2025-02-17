import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Produtos from "./components/Produtos";
import Navegacao from "./components/Navegacao";

function App() {
  return (
    <>
      <div className="contain">
        <BrowserRouter>
          <Navegacao />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
