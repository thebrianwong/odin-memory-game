import { memo } from "react";

const ElementDropdownMenu = memo(function ElementDropdownMenu({
  changeElement,
}) {
  return (
    <div className="element-menu">
      <button>Element</button>
      <ul className="element-dropdown">
        <li className="menu-option">
          <button onClick={() => changeElement("pyro")}>Pyro</button>
        </li>
        <li className="menu-option">
          <button onClick={() => changeElement("hydro")}>Hydro</button>
        </li>
        <li className="menu-option">
          <button onClick={() => changeElement("anemo")}>Anemo</button>
        </li>
        <li className="menu-option">
          <button onClick={() => changeElement("electro")}>Electro</button>
        </li>
        <li className="menu-option">
          <button onClick={() => changeElement("dendro")}>Dendro</button>
        </li>
        <li className="menu-option">
          <button onClick={() => changeElement("cryo")}>Cryo</button>
        </li>
        <li className="menu-option">
          <button onClick={() => changeElement("geo")}>Geo</button>
        </li>
      </ul>
    </div>
  );
});

export default ElementDropdownMenu;
