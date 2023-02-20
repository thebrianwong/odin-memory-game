const CharacterCard = ({
  characterName,
  characterElement,
  resolveCardChoice,
}) => {
  return (
    <button
      className={`${characterElement}-card game-card`}
      onClick={() => resolveCardChoice(characterName, characterElement)}
    >
      <img
        src={require(`../assets/character_images/${characterElement}/${characterName}.png`)}
        alt={`${characterName} chibi sticker`}
      />
      <p className={`${characterElement}-text elemental-text`}>
        {characterName}
      </p>
    </button>
  );
};

export default CharacterCard;
