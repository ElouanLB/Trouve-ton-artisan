// Import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Stars_icon() {
  // Fonction pour afficher les étoiles en fonction de la note
  const renderStars = (note) => {
    const starCount = Math.round(note); // Arrondir la note à l'entier le plus proche
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(
        <FontAwesomeIcon icon={faStar} key={i} className="star-icon" />
      );
    }
    return stars;
  };
  return { renderStars };
}
export default Stars_icon;
