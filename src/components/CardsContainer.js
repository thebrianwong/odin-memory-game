import CharacterCard from "./CharacterCard";

const CardsContainer = ({ element, characterData, resolveCardChoice }) => {
  const randomizeCardOrder = (characterData) => {
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
            characterImage={character.image}
            resolveCardChoice={resolveCardChoice}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
