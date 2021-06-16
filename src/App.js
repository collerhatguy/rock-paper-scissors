import { useState } from "react";
import "./styles/style.css";
import Header from "./components/Header";
import Game from "./components/Game";
import Rules from "./components/Rules";

function App() {
  const [score, setScore] = useState(0)
  return (
    <main className="App">
      <Header score={score} />
      <Game setScore={setScore} />
      <Rules />
    </main>
  );
}

export default App;
