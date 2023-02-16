import { useState } from "react";
import ElementDropdownMenu from "./components/ElementDropdownMenu";
import ScoresDisplay from "./components/ScoresDisplay";
import CardsContainer from "./components/CardsContainer";
import { characterData } from "./characterData";

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
  const [previouslyPicked, setPreviouslyPicked] = useState([]);
  return (
    <>
      <h1>Genshin Impact Memory Game</h1>
      <p>Test your memory!</p>
      <ScoresDisplay
        currentScore={currentScore}
        bestScore={bestScores[currentElement]}
        element={currentElement}
      />
      <ElementDropdownMenu changeElement={setCurrentElement} />
      <CardsContainer
        element={currentElement}
        characterData={characterData[currentElement]}
      />
      <p>All assets by HoYoverse</p>
    </>
  );
}

export default App;
