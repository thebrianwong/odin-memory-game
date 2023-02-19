const CharacterCard = ({
  characterName,
  characterElement,
  characterImage,
  resolveCardChoice,
}) => {
  return (
    <button
      className="game-card"
      onClick={() => resolveCardChoice(characterName, characterElement)}
    >
      <img src={`${characterImage}`} alt={`${characterName} chibi sticker`} />
      <p className={`${characterElement}-text elemental-text`}>
        {characterName}
      </p>
    </button>
  );
};

export default CharacterCard;
