import CharacterCard from "./CharacterCard";

const CardsContainer = ({ element, characterData }) => {
  // some function to scramble the order of cards
  return (
    <div>
      {characterData.map((character) => {
        <CharacterCard
          characterName={character.name}
          characterElement={element}
          characterImage={character.image}
        />;
      })}
    </div>
  );
};

export default CardsContainer;
