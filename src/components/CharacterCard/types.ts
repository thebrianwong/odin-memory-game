import Element from "../../element.enum";

type CharacterCardProps = {
  characterName: string;
  characterElement: Element;
  resolveCardChoice: (characterName: string, element: Element) => void;
};

export default CharacterCardProps;
