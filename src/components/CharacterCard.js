const CharacterCard = ({
  characterName,
  characterElement,
  characterImage,
  resolveCardChoice,
}) => {
  return (
    <button onClick={() => resolveCardChoice(characterName, characterElement)}>
      <img src={`${characterImage}`} alt={`${characterName} chibi sticker`} />
      <p>{characterName}</p>
    </button>
  );
};

export default CharacterCard;
