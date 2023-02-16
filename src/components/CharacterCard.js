const CharacterCard = ({ characterName, characterElement, characterImage }) => {
  return (
    <div>
      <img src={`${characterImage}`} alt={`${characterName} chibi sticker`} />
      <p>{characterName}</p>
    </div>
  );
};

export default CharacterCard;
