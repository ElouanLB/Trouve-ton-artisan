import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/css/styles-mobile.css"; // Importation du fichier de styles mobiles
import "./assets/css/styles-tablet.css"; // Importation du fichier de styles tablet
import "./assets/css/styles.scss"; // Importation du fichier de styles

import "bootstrap/dist/css/bootstrap.min.css";

//Page navigations
import Home from "./pages/Home";
import Craftsman from "./pages/Craftsman";
import Cardcraftsman from "./pages/Cardcraftsman";
import Cardservice from "./pages/Cardservice";
import Cardmanufacturing from "./pages/Cardmanufacturing";
import Cardfood from "./pages/Cardfood";

//Page 404
import Notfound from "./pages/Notfound";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* All nav pages */}
          <Route path="/" element={<Home />} />
          <Route path="/craftsman" element={<Craftsman />} />
          {/* Route pour gérer /artisan/:id */}
          <Route path="/cardcraftsman/:id" element={<Cardcraftsman />} />{" "}
          <Route path="/cardservice" element={<Cardservice />} />
          <Route path="/cardmanufacturing" element={<Cardmanufacturing />} />
          <Route path="/cardfood" element={<Cardfood />} />
          <Route path="*" element={<Notfound />} /> {/* Si aucune route ne correspond, affiche Notfound */}
        </Routes>
      </div>
    </Router>
  );
}
