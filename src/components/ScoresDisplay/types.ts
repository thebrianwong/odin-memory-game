import Element from "../../element.enum";

type ScoresDisplayProps = {
  currentScore: number;
  bestScore: number;
  element: Element;
};

type ElementLabel =
  | "Pyro"
  | "Hydro"
  | "Anemo"
  | "Electro"
  | "Dendro"
  | "Cryo"
  | "Geo";

export { ScoresDisplayProps, ElementLabel };
