import { useState, useEffect } from "react";

const ScoresDisplay = ({ bestScore }) => {
  const [currentScore, setCurrentScore] = useState(0);
  useEffect(() => {
    // if currentScore > bestScore, callback from App.js to set bestScore to currentScore
  }, [currentScore]);
};

export default ScoresDisplay;
