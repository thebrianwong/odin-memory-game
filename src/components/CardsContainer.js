const CardsContainer = ({ element, characterData }) => {
  // some function to scramble the order of cards
  return (
    <div>
      {characterData.maps((character) => {
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
