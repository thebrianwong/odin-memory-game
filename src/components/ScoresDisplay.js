const ScoresDisplay = ({ currentScore, bestScore, element }) => {
  return (
    <>
      <p>{`Best ${
        element.charAt(0).toUpperCase() + element.slice(1)
      } Score: ${bestScore}`}</p>
      <p>{`Current Score: ${currentScore}`}</p>
    </>
  );
};

export default ScoresDisplay;
