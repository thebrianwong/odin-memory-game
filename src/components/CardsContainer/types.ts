type CardsContainerProps = {
  element: string;
  characterData: Array<{ name: string }>;
  resolveCardChoice: (characterName: string, element: string) => void;
};

export default CardsContainerProps;
