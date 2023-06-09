import { useMemo, useState } from "react";
import ElementDropdownMenu from "./components/ElementDropdownMenu/index";
import ScoresDisplay from "./components/ScoresDisplay/index";
import CardsContainer from "./components/CardsContainer/index";
import { characterData } from "./characterData";
import "./assets/fonts/gi.ttf";
import "./styles/normalize.css";
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
  useMemo(() => {
    resetPoints();
    resetPickedCharacters();
  }, [currentElement]);
  return (
    <>
      <div className="game-ui">
        <div className="title-text">
          <h1>
            Genshin Impact<br></br> Memory Game
          </h1>
          <p>Test your memory!</p>
        </div>
        <ScoresDisplay
          currentScore={currentScore}
          bestScore={bestScores[currentElement]}
          element={currentElement}
        />
        <ElementDropdownMenu changeElement={setCurrentElement} />
      </div>
      <CardsContainer
        element={currentElement}
        characterData={characterData[currentElement]}
        resolveCardChoice={resolveCardChoice}
      />
      <div className="credits">
        <p>All assets by HoYoverse</p>
      </div>
    </>
  );
}

export default App;
