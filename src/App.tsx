import { useEffect, useState } from "react";
import ElementDropdownMenu from "./components/ElementDropdownMenu/index";
import ScoresDisplay from "./components/ScoresDisplay/index";
import CardsContainer from "./components/CardsContainer/index";
import characterData from "./characterData.json";
import Element from "./element.enum";
import "./styles/styles.scss";

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
  const [currentElement, setCurrentElement] = useState(Element.PYRO);
  const [previouslyPicked, setPreviouslyPicked] = useState(Array<string>);

  const gainPoint = () => {
    setCurrentScore(currentScore + 1);
  };

  const resetPoints = () => {
    setCurrentScore(0);
  };

  const resetPickedCharacters = () => {
    setPreviouslyPicked([]);
  };

  const checkForNewBestScore = (element: Element) => {
    if (currentScore > bestScores[element]) {
      setBestScores({ ...bestScores, [element]: currentScore });
    }
  };

  const resolveCardChoice = (characterName: string) => {
    if (!previouslyPicked.includes(characterName)) {
      gainPoint();
      setPreviouslyPicked(previouslyPicked.concat(characterName));
    } else {
      resetPoints();
      resetPickedCharacters();
    }
  };

  useEffect(() => {
    checkForNewBestScore(currentElement);
  }, [currentScore]);

  useEffect(() => {
    resetPoints();
    resetPickedCharacters();
  }, [currentElement]);

  return (
    <>
      <nav className="game-ui">
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
      </nav>
      <CardsContainer
        element={currentElement}
        characterData={characterData[currentElement]}
        resolveCardChoice={resolveCardChoice}
      />
      <footer className="credits">
        <p>All assets by HoYoverse</p>
      </footer>
    </>
  );
}

export default App;
