import Element from "../../element.enum";

type CardsContainerProps = {
  element: Element;
  characterData: Array<{ name: string }>;
  resolveCardChoice: (characterName: string, element: Element) => void;
};

export default CardsContainerProps;
