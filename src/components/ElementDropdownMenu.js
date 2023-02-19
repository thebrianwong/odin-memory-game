import { memo } from "react";

const ElementDropdownMenu = memo(function ElementDropdownMenu({
  changeElement,
}) {
  return (
    <div className="element-menu">
      <button className="placeholder-button elemental-button">Element</button>
      <ul className="element-dropdown">
        <li className="menu-option">
          <button
            className="pyro-background elemental-button"
            onClick={() => changeElement("pyro")}
          >
            Pyro
          </button>
        </li>
        <li className="menu-option">
          <button
            className="hydro-background elemental-button"
            onClick={() => changeElement("hydro")}
          >
            Hydro
          </button>
        </li>
        <li className="menu-option">
          <button
            className="anemo-background elemental-button"
            onClick={() => changeElement("anemo")}
          >
            Anemo
          </button>
        </li>
        <li className="menu-option">
          <button
            className="electro-background elemental-button"
            onClick={() => changeElement("electro")}
          >
            Electro
          </button>
        </li>
        <li className="menu-option">
          <button
            className="dendro-background elemental-button"
            onClick={() => changeElement("dendro")}
          >
            Dendro
          </button>
        </li>
        <li className="menu-option">
          <button
            className="cryo-background elemental-button"
            onClick={() => changeElement("cryo")}
          >
            Cryo
          </button>
        </li>
        <li className="menu-option">
          <button
            className="geo-background elemental-button"
            onClick={() => changeElement("geo")}
          >
            Geo
          </button>
        </li>
      </ul>
    </div>
  );
});

export default ElementDropdownMenu;
