import { memo } from "react";
import ElementDropdownMenuProps from "./types";
import Element from "../../element.enum";

const ElementDropdownMenu = memo(function ElementDropdownMenu({
  changeElement,
}: ElementDropdownMenuProps) {
  return (
    <div className="element-menu">
      <button className="placeholder-button elemental-button">Element</button>
      <ul className="element-dropdown">
        <li className="menu-option">
          <button
            className="pyro-background elemental-button"
            onClick={() => changeElement(Element.PYRO)}
          >
            Pyro
          </button>
        </li>
        <li className="menu-option">
          <button
            className="hydro-background elemental-button"
            onClick={() => changeElement(Element.HYDRO)}
          >
            Hydro
          </button>
        </li>
        <li className="menu-option">
          <button
            className="anemo-background elemental-button"
            onClick={() => changeElement(Element.ANEMO)}
          >
            Anemo
          </button>
        </li>
        <li className="menu-option">
          <button
            className="electro-background elemental-button"
            onClick={() => changeElement(Element.ELECTRO)}
          >
            Electro
          </button>
        </li>
        <li className="menu-option">
          <button
            className="dendro-background elemental-button"
            onClick={() => changeElement(Element.DENDRO)}
          >
            Dendro
          </button>
        </li>
        <li className="menu-option">
          <button
            className="cryo-background elemental-button"
            onClick={() => changeElement(Element.CRYO)}
          >
            Cryo
          </button>
        </li>
        <li className="menu-option">
          <button
            className="geo-background elemental-button"
            onClick={() => changeElement(Element.GEO)}
          >
            Geo
          </button>
        </li>
      </ul>
    </div>
  );
});

export default ElementDropdownMenu;
