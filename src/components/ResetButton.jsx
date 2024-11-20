import React from "react";

const ResetButton = ({ onReset }) => {
  return (
    <button
      onClick={onReset}
      className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
    >
      Reset
    </button>
  );
};

export default ResetButton;
