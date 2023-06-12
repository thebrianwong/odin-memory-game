import { useState, useEffect, useRef } from "react";
import ElementDropdownMenuProps from "./types";
import Element from "../../element.enum";

const ElementDropdownMenu = ({ changeElement }: ElementDropdownMenuProps) => {
  const [display, setDisplay] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = (element: Element) => {
    setDisplay(!display);
    changeElement(element);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      menuRef &&
      menuRef.current &&
      !menuRef.current.contains(e.target as HTMLElement)
    ) {
      setDisplay(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick, true);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick, true);
    };
  }, []);

  return (
    <div className="element-menu" ref={menuRef}>
      <button
        className="placeholder-button elemental-button"
        onClick={() => setDisplay(!display)}
      >
        Element
      </button>
      {display && (
        <ul className="element-dropdown">
          <li className="menu-option">
            <button
              className="pyro-background elemental-button"
              onClick={() => handleClick(Element.PYRO)}
            >
              Pyro
            </button>
          </li>
          <li className="menu-option">
            <button
              className="hydro-background elemental-button"
              onClick={() => handleClick(Element.HYDRO)}
            >
              Hydro
            </button>
          </li>
          <li className="menu-option">
            <button
              className="anemo-background elemental-button"
              onClick={() => handleClick(Element.ANEMO)}
            >
              Anemo
            </button>
          </li>
          <li className="menu-option">
            <button
              className="electro-background elemental-button"
              onClick={() => handleClick(Element.ELECTRO)}
            >
              Electro
            </button>
          </li>
          <li className="menu-option">
            <button
              className="dendro-background elemental-button"
              onClick={() => handleClick(Element.DENDRO)}
            >
              Dendro
            </button>
          </li>
          <li className="menu-option">
            <button
              className="cryo-background elemental-button"
              onClick={() => handleClick(Element.CRYO)}
            >
              Cryo
            </button>
          </li>
          <li className="menu-option">
            <button
              className="geo-background elemental-button"
              onClick={() => handleClick(Element.GEO)}
            >
              Geo
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ElementDropdownMenu;
