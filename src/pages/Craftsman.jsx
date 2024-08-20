import { Link } from "react-router-dom";

// Import components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import hooks
import Filter_artisan_category_note from "../hooks/Filter_artisan_category_note";
import Stars_icon from "../hooks/Stars_icon";

function Craftsman() {
  const { artisans, selectedCategory } = Filter_artisan_category_note(); // Utilisation du hook filter
  const { renderStars } = Stars_icon(); // Utilisez le hook stars_icon

  return (
    <div>
      <Header />

      <main className="container">
        <div>
          <h1 className="text-center border-text">
            Liste des artisans Bâtiments
          </h1>
        </div>

        <div className="row">
          {/* Affichage des artisans filtrés */}
          {artisans
            .filter(
              (artisan) =>
                !selectedCategory || artisan.category === selectedCategory
            )
            .map((artisan, index) => (
              <div key={index} className="col-lg-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">{artisan.name}</h2>
                    <p className="card-text">
                      <strong>Note</strong> : {renderStars(artisan.note)}
                    </p>
                    <p className="card-text">
                      <strong>Spécialité</strong> : {artisan.specialty}
                    </p>
                    <p className="card-text">
                      <strong>Localisation</strong> : {artisan.location}
                    </p>
                    <div>
                      <Link
                        to={`/cardcraftsman/${artisan.id}`}
                        className="btn btn-primary"
                      >
                        En savoir plus
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Craftsman;
