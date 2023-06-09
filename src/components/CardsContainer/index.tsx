import CharacterCard from "../CharacterCard/index";
import CardsContainerProps from "./types";

const CardsContainer = ({
  element,
  characterData,
  resolveCardChoice,
}: CardsContainerProps) => {
  const randomizeCardOrder = (
    characterData: Array<{ name: string }>
  ): Array<{ name: string }> => {
    const randomOrderData = [...characterData];
    for (let i = randomOrderData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const tmp = randomOrderData[i];
      randomOrderData[i] = randomOrderData[j];
      randomOrderData[j] = tmp;
    }
    return randomOrderData;
  };
  return (
    <div className="game-contents">
      {randomizeCardOrder(characterData).map((character) => {
        return (
          <CharacterCard
            key={character.name}
            characterName={character.name}
            characterElement={element}
            resolveCardChoice={resolveCardChoice}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
