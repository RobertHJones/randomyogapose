import { useState, useEffect } from "react";

function YogaViewer({ id }) {
  // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!

  const [pose, setPose] = useState("");

  async function fetchPokemon() {
    const response = await fetch(
      `https://lightning-yoga-api.herokuapp.com/yoga_poses/${id}`
    );
    const data = await response.json();
    // console.log(data.sprites);
    // console.log(data.name);
    setPose(data);
    console.log(data);
  }

  useEffect(() => {
    fetchPokemon();
  }, [id]);

  return (
    <div className="pokemon-viewer">
      <p>Sanskrit - {pose.sanskrit_name}</p>
      <p>English - {pose.english_name}</p>
      <img src={pose.img_url} alt="yoga pose" />
    </div>
  );
}

export default YogaViewer;
