import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Filter_artisan_card() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    // Chargez les données des artisans à partir de votre source de données (par exemple, un fichier JSON)
    fetch("/datas.json")
      .then((response) => response.json())
      .then((data) => {
        // Recherchez l'artisan correspondant à l'ID
        const foundArtisan = data.find(
          (artisan) => artisan.id === parseInt(id)
        );
        // Mettez à jour l'état avec les détails de l'artisan
        setArtisan(foundArtisan);
      })
      .catch((error) =>
        console.error(
          "Erreur lors du chargement des données des artisans :",
          error
        )
      );
  }, [id]);

  if (!artisan) {
    return <div>Loading...</div>; // Affiche un message de chargement si l'artisan n'est pas encore chargé
  }

  return artisan; // Retourne les données de l'artisan
}

export default Filter_artisan_card;