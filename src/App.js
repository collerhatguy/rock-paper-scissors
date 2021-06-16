import { useState } from "react";
import "./styles/style.css";
import Header from "./components/Header";

function App() {
  const [score, setScore] = useState(0)
  return (
    <main className="App">
      <Header score={score} />
    </main>
  );
}

export default App;
