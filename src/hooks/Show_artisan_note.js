import { useState, useEffect } from "react";

function ShowArtisanNote() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetch("/datas.json")
      .then((response) => response.json())
      .then((data) => {
        // Inclure tous les artisans
        const allArtisans = data;
        // Limiter aux trois premiers artisans
        const topThreeArtisans = allArtisans.slice(0, 3);
        // Mettre à jour l'état avec les artisans
        setArtisans(topThreeArtisans);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, []);

  return { artisans };
}

export default ShowArtisanNote;