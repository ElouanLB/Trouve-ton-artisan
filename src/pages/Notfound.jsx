import React from "react";

// Import pages
import Header from "../components/Header";
import Footer from "../components/Footer";

import NotFoundImage from "../assets/img/404.jpg"; // Importez l'image

const Notfound = () => {
  return (
    <div>
      <Header />

      <main className="container d-flex justify-content-center align-items-center">
        <div className="page404">
          <img
            src={NotFoundImage}
            alt="Page not found"
            className="not-found-image"
          />
          <p>Désolé, la page que vous recherchez n'existe pas.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Notfound;
