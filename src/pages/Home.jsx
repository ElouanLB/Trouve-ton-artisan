import React from "react";
import ShowArtisanNote from "../hooks/Show_artisan_note"; // Importation de votre hook personnalisé

// Import des pages
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import du hook
import Stars_icon from "../hooks/Stars_icon";

function Home() {
  const { artisans } = ShowArtisanNote(); // Utilisation du hook Show
  const { renderStars } = Stars_icon(); // Utilisation du hook stars_icon

  return (
    <div>
      <Header />

      <main className="container">
        {/* Rubrique "Comment trouver mon artisan ?" */}
        <section className="find-artisan-section mt-5">
          <h1 className="$color-template4">Comment trouver mon artisan ?</h1>
          <div className="content">
            <div className="steps">
              {/* Étape 1: Choisir la catégorie d’artisanat */}
              <div className="step mb-4 mr-md-4 ">
                {" "}
                <div className="step-icon-container">
                  <div className="step-icon">1</div>
                </div>
                <div className="step-content">
                  <p className="step_text_color">Choisissez une catégorie d'artisanat dans le menu.</p>
                </div>
              </div>
              {/* Étape 2: Choisir un artisan */}
              <div className="step mb-4 mr-md-4">
                <div className="step-icon-container">
                  <div className="step-icon">2</div>
                </div>
                <div className="step-content">
                  <p className="step_text_color">
                    Parcourez la liste des artisans disponibles dans la
                    catégorie sélectionnée. Cliquez sur le profil de l'artisan
                    pour voir ses détails.
                  </p>
                </div>
              </div>
              {/* Étape 3: Contacter l'artisan via le formulaire de contact */}
              <div className="step mb-4 mr-md-4">
                <div className="step-icon-container">
                  <div className="step-icon">3</div> {/* Contenu de l'icône */}
                </div>
                <div className="step-content">
                  <p className="step_text_color">
                    Remplissez le formulaire de contact avec vos coordonnées et
                    votre message, puis envoyez le formulaire.
                  </p>
                </div>
              </div>
              {/* Étape 4: Réponse de l'artisan sous 48 heures */}
              <div className="step mb-4 mr-md-4">
                <div className="step-icon-container">
                  <div className="step-icon">4</div>
                </div>
                <div className="step-content">
                  <p className="step_text_color">
                    Vous recevrez une réponse de l'artisan dans les 48 heures
                    suivant l'envoi du formulaire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Le top 3 des artisans */}
        <section>
          <h2 className="mt-5">Les artisans du mois</h2>

          <div className="row">
            {artisans.slice(0, 3).map((artisan) => (
              <div key={artisan.id} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">{artisan.name}</h3>
                    <p className="card-text">
                      Note : {renderStars(artisan.note)}
                    </p>
                    <p className="card-text">
                      Spécialité : {artisan.specialty}
                    </p>
                    <p className="card-text">
                      Localisation : {artisan.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
