import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import ResetButton from "./components/ResetButton";
import ConfigPanel from "./components/ConfigPanel";

const App = () => {
  const [attempts, setAttempts] = useState(0);
  const [reset, setReset] = useState(false);
  const [config, setConfig] = useState({
    groupSize: 2,
    itemCount: 16,
    columns: 4,
  });

  const handleAttempt = () => setAttempts((prev) => prev + 1);

  const resetGame = () => {
    setAttempts(0);
    setReset(!reset);
  };

  const updateConfig = (newConfig) => {
    setConfig(newConfig);
    resetGame();
  };

  return (
    <>
    <header className="text-3xl font-bold text-center">
       Word Matching
    </header>
    <div className="p-4 min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center mb-6">
        Connect group of {config.groupSize} words by clicking on related words
      </h1>
      <ConfigPanel config={config} updateConfig={updateConfig} />
      <GameBoard onAttempt={handleAttempt} reset={reset} config={config} />
      <p className="text-lg mt-4">Attempts: {attempts}</p>
      <ResetButton onReset={resetGame} />
    </div>
    </>
  );
};

export default App;
