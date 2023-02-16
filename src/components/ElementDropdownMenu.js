const ElementDropdownMenu = ({ changeElement }) => {
  return (
    <div>
      <ul>
        <li>Element</li>
        <li>
          <button onClick={() => changeElement("pyro")}>Pyro</button>
        </li>
        <li>
          <button onClick={() => changeElement("hydro")}>Hydro</button>
        </li>
        <li>
          <button onClick={() => changeElement("anemo")}>Anemo</button>
        </li>
        <li>
          <button onClick={() => changeElement("electro")}>Electro</button>
        </li>
        <li>
          <button onClick={() => changeElement("dendro")}>Dendro</button>
        </li>
        <li>
          <button onClick={() => changeElement("cryo")}>Cryo</button>
        </li>
        <li>
          <button onClick={() => changeElement("geo")}>Geo</button>
        </li>
      </ul>
    </div>
  );
};

export default ElementDropdownMenu;
