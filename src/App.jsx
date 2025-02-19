import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Produtos from "./components/Produtos";
import Navegacao from "./components/Navegacao";
import CadastroProduto from "./components/CadastroProduto";
import { GlobalStorage } from "./GlobalContext";

function App() {
  return (
    <>
      <div className="contain">
        <BrowserRouter>
          <GlobalStorage>
            <Navegacao />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/cadastro-produto" element={<CadastroProduto />} />
            </Routes>
          </GlobalStorage>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
