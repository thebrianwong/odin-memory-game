const CharacterCard = ({
  characterName,
  characterElement,
  characterImage,
  resolveCardChoice,
}) => {
  return (
    <div onClick={() => resolveCardChoice(characterName, characterElement)}>
      <img src={`${characterImage}`} alt={`${characterName} chibi sticker`} />
      <p>{characterName}</p>
    </div>
  );
};

export default CharacterCard;
