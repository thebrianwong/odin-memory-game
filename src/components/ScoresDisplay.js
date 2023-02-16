const ScoresDisplay = ({ currentScore, bestScore, element }) => {
  <>
    <p>{`Best ${
      element[0].upperCase() + element.slice(1)
    } Score: ${bestScore}`}</p>
    <p>{`Current Score: ${currentScore}`}</p>
  </>;
};

export default ScoresDisplay;
