import { useEffect, useMemo, useState } from "react";
import ElementDropdownMenu from "./components/ElementDropdownMenu";
import ScoresDisplay from "./components/ScoresDisplay";
import CardsContainer from "./components/CardsContainer";
import { characterData } from "./characterData";

function App() {
  // const randomizeCardOrder = (characterData) => {
  //   const randomOrderData = [...characterData];
  //   for (let i = randomOrderData.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * i);
  //     const tmp = randomOrderData[i];
  //     randomOrderData[i] = randomOrderData[j];
  //     randomOrderData[j] = tmp;
  //   }
  //   return randomOrderData;
  // };
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
  // const [scores, setScores] = useState({
  //   currentScore: 0,
  //   bestScores: {
  //     pyro: 0,
  //     hydro: 0,
  //     anemo: 0,
  //     electro: 0,
  //     dendro: 0,
  //     cryo: 0,
  //     geo: 0,
  //   },
  // });
  const [currentElement, setCurrentElement] = useState("pyro");
  const [previouslyPicked, setPreviouslyPicked] = useState([]);
  // const [shuffledCharacterData, setShuffledCharacterData] = useState(
  //   randomizeCardOrder(characterData[currentElement])
  // );
  const gainPoint = () => {
    setCurrentScore(currentScore + 1);
    // setScores({ ...scores, currentScore: scores.currentScore + 1 });
  };
  const resetPoints = () => {
    setCurrentScore(0);
    // setScores({ ...scores, currentScore: 0 });
  };
  const resetPickedCharacters = () => {
    setPreviouslyPicked([]);
  };
  const checkForNewBestScore = (element) => {
    if (currentScore > bestScores[element]) {
      setBestScores({ ...bestScores, [element]: currentScore });
    }
    // console.log(scores);
    // if (scores.currentScore > scores.bestScores[element]) {
    //   // console.log(scores);
    //   const test = scores;
    //   test.bestScores[element] = test.currentScore;
    //   // setScores({...scores, bestScores: {scores.bestScores}})
    //   setScores(test);
    // }
  };
  const resolveCardChoice = (characterName, element) => {
    if (!previouslyPicked.includes(characterName)) {
      gainPoint();
      setPreviouslyPicked(previouslyPicked.concat(characterName));

      // if (currentScore + 1 > bestScores[element]) {
      //   unstable_batchedUpdates(() => {
      //     setCurrentScore(currentScore + 1);
      //     setBestScores({ ...bestScores, [element]: currentScore });
      //   });
      // } else {
      //   gainPoint();
      // }
    } else {
      setCurrentScore(1);
      // setScores({ ...scores, currentScore: 1 });
      setPreviouslyPicked([characterName]);
    }
    // some function that will accept a callback, which will be cards container's scramble function
  };
  useEffect(() => {
    // console.log(scores.bestScores);
    checkForNewBestScore(currentElement);
    // console.log(scores.bestScores);
  }, [currentScore]);
  useEffect(() => {
    resetPoints();
    resetPickedCharacters();
  }, [currentElement]);
  useEffect(() => {
    // setShuffledCharacterData(randomizeCardOrder(characterData[currentElement]));
    // console.log("change");
    // console.log(shuffledCharacterData);
  }, [previouslyPicked]);
  return (
    <>
      <h1>Genshin Impact Memory Game</h1>
      <p>Test your memory!</p>
      <ScoresDisplay
        currentScore={currentScore}
        // currentScore={scores.currentScore}
        bestScore={bestScores[currentElement]}
        // bestScore={scores.bestScores[currentElement]}
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
