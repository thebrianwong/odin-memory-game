import { useState } from "react";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScores, setBestScores] = useState({
    pyro: 0,
    hydro: 0,
    anemo: 0,
    electro: 0,
    dendro: 0,
    cryo: 0,
    geo: 0,
  });
  const [currentElement, setCurrentElement] = useState("pyro");
  return (
    <>
      <h1>Genshin Impact Memory Game</h1>
      <p>Test your memory!</p>
      <p>ScoresDisplay</p>
      <p>ElementDropdownMenu</p>
      <p>CardsContainer</p>
      <p>All assets by HoYoverse</p>
    </>
  );
}

export default App;
