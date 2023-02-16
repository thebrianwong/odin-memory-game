import CharacterCard from "./CharacterCard";

const CardsContainer = ({ element, characterData, resolveCardChoice }) => {
  // some function to scramble the order of cards
  return (
    <div>
      {characterData.map((character) => {
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
