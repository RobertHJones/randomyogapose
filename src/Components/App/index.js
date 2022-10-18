import "./App.css";
import { useState } from "react";
import YogaViewer from "../yogaviewer";

function App() {
  const [id, setId] = useState();

  function handleClick() {
    const number = Math.ceil(Math.random() * 48);
    if (number !== 11) {
      setId(number);
    } else {
      setId(10);
    }
  }

  return (
    <div className="App">
      <h1>Random Yoga Pose Generator</h1>
      <button onClick={handleClick}>Get Random Yoga Pose</button>
      <YogaViewer id={id} />
    </div>
  );
}

export default App;
