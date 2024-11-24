import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Atracoes from "./pages/Atracoes/Atracoes";
import Pagamento from "./pages/Pagamento/Pagamento";
import Teste from "./pages/Test/Test";
import Avisos from "./pages/Avisos/Avisos";
import Login from "./pages/Login/Index";

function App() {
  return (
    <BrowserRouter>
      <div id="root">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/atracoes" element={<Atracoes />} />
            <Route path="/pagamento" element={<Pagamento />} />
            <Route path="/teste" element={<Teste />} />
            <Route path="/avisos" element={<Avisos />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
