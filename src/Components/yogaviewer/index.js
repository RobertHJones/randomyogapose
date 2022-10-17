import { useState, useEffect } from "react";
import "./index.css";

function YogaViewer({ id }) {
  // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!

  const [pose, setPose] = useState("");

  async function fetchPose() {
    const response = await fetch(
      `https://lightning-yoga-api.herokuapp.com/yoga_poses/${id}`
    );
    const data = await response.json();

    setPose(data);
    console.log(data);
  }

  useEffect(() => {
    fetchPose();
  }, [id]);

  return (
    pose && (
      <div className="pose-viewer">
        <p>Sanskrit - {pose.sanskrit_name}</p>
        <p>English - {pose.english_name} pose</p>
        <img id="poseimage" src={pose.img_url} alt="yoga pose" />
      </div>
    )
  );
}

export default YogaViewer;
