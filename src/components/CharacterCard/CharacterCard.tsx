import CharacterCardProps from "./types";

const CharacterCard = ({
  characterName,
  characterElement,
  resolveCardChoice,
}: CharacterCardProps) => {
  return (
    <button
      className={`${characterElement}-card game-card`}
      onClick={() => resolveCardChoice(characterName, characterElement)}
    >
      <img
        src={require(`../../assets/character_images/${characterElement}/${characterName}.png`)}
        alt=""
      />
      <p className={`${characterElement}-text elemental-text`}>
        {characterName}
      </p>
    </button>
  );
};

export default CharacterCard;
