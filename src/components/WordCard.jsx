import React from "react";

const WordCard = ({ word, onClick, isMatched, isSelected }) => {
  return (
    <button
      onClick={onClick}
      disabled={isMatched} // Disable card if it is matched
      className={`p-4 border rounded-lg text-center ${
        isMatched
          ? "bg-green-500 text-white" // Green if matched
          : isSelected
          ? "bg-red-500 text-white border-red-700" // Red if selected but incorrect
          : "bg-white"
      } hover:shadow-md`}
    >
      {word}
    </button>
  );
};

export default WordCard;
