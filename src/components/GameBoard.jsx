import React, { useState, useEffect } from "react";
import WordCard from "./WordCard";

const generateWords = (itemCount, groupSize) => {
  const words = [
    "Valletta", "Malta",
    "Madagascar", "Antananarivo",
    "New Delhi", "India",
    "Laos", "Vientiane",
    "Israel", "Jerusalem",
    "Liberia", "Monrovia",
    "Jamaica", "Kingston",
    "Kyrgyzstan", "Bishkek",
  ];

  const pairs = words.slice(0, itemCount).reduce((acc, word, idx) => {
    if (idx % groupSize === 0) acc.push([]);  // Start a new group
    acc[acc.length - 1].push(word);
    return acc;
  }, []);

  return pairs; // Return the grouped pairs instead of flattening
};

const GameBoard = ({ onAttempt, reset, config }) => {
  const [words, setWords] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);
  const [grouping, setGrouping] = useState([]);

  useEffect(() => {
    const newWords = generateWords(config.itemCount, config.groupSize);
    setWords(newWords.flat());
    setSelected([]);
    setMatched([]);
    setScore(0);
    setGrouping(newWords);
  }, [reset, config]);

  const handleSelect = (word) => {
    if (selected.includes(word) || matched.includes(word)) return;
  
    const newSelection = [...selected, word];
    setSelected(newSelection);
  
    if (newSelection.length === config.groupSize) {
      onAttempt();
  
      const isMatch = grouping.some(group => 
        newSelection.every(sel => group.includes(sel)) && newSelection.length === group.length
      );
  
      if (isMatch) {
        setMatched((prev) => [...prev, ...newSelection]);
        setScore((prev) => prev + 1);
        setSelected([]);
      } else {
        setTimeout(() => {
          setSelected([]);
        }, 500);
      }
    }
  };

  return (
    <div className="mt-4">
      <div className="text-lg font-bold mb-2">
        Score: <span className="text-green-600">{score}</span>
      </div>
      <div
        className={`grid gap-4`}
        style={{
          gridTemplateColumns: `repeat(${config.columns}, minmax(0, 1fr))`,
        }}
      >
        {words.map((word, index) => (
          <WordCard
            key={index}
            word={word}
            onClick={() => handleSelect(word)}
            isMatched={matched.includes(word)}
            isSelected={selected.includes(word)}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
