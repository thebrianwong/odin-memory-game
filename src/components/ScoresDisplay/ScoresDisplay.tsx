import ScoresDisplayProps from "./types";

const ScoresDisplay = ({
  currentScore,
  bestScore,
  element,
}: ScoresDisplayProps) => {
  const elementLabel = element.charAt(0).toUpperCase() + element.slice(1);
  return (
    <div className="scores-display">
      <p>
        Best{" "}
        <span className={`${element}-text elemental-text`}>{elementLabel}</span>{" "}
        Score: {bestScore}
      </p>
      <p>{`Current Score: ${currentScore}`}</p>
    </div>
  );
};

export default ScoresDisplay;
