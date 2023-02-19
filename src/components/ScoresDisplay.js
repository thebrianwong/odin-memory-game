const ScoresDisplay = ({ currentScore, bestScore, element }) => {
  return (
    <div className="scores-display">
      <p>{`Best ${
        element.charAt(0).toUpperCase() + element.slice(1)
      } Score: ${bestScore}`}</p>
      <p>{`Current Score: ${currentScore}`}</p>
    </div>
  );
};

export default ScoresDisplay;
