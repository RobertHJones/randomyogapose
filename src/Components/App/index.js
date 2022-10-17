import "./App.css";
import { useState } from "react";
import YogaViewer from "../yogaviewer";

function App() {
  const [id, setId] = useState();

  function handleClick() {
    // TODO: Set id to be random number between 1 and 151
    const number = Math.ceil(Math.random() * 48);
    setId(number);
  }

  return (
    <div className="App">
      <h1>Random Yoga Pose Generator</h1>
      <button onClick={handleClick}>Get Random Yoga Pose</button>
      {/* TODO: hand down id as a prop */}
      <YogaViewer id={id} />
    </div>
  );
}

export default App;
