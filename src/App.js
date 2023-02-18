import { useEffect, useMemo, useState } from "react";
import ElementDropdownMenu from "./components/ElementDropdownMenu";
import ScoresDisplay from "./components/ScoresDisplay";
import CardsContainer from "./components/CardsContainer";
import { characterData } from "./characterData";
import "./styles/styles.css";

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
  const gainPoint = () => {
    setCurrentScore(currentScore + 1);
  };
  const resetPoints = () => {
    setCurrentScore(0);
  };
  const resetPickedCharacters = () => {
    setPreviouslyPicked([]);
  };
  const checkForNewBestScore = (element) => {
    if (currentScore > bestScores[element]) {
      setBestScores({ ...bestScores, [element]: currentScore });
    }
  };
  const resolveCardChoice = (characterName, element) => {
    if (!previouslyPicked.includes(characterName)) {
      gainPoint();
      setPreviouslyPicked(previouslyPicked.concat(characterName));
    } else {
      resetPoints();
      resetPickedCharacters();
    }
  };
  useMemo(() => {
    checkForNewBestScore(currentElement);
  }, [currentScore]);
  useEffect(() => {
    resetPoints();
    resetPickedCharacters();
  }, [currentElement]);
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
        resolveCardChoice={resolveCardChoice}
      />
      <p>All assets by HoYoverse</p>
    </>
  );
}

export default App;
