import React, { useState } from "react";

const ConfigPanel = ({ config, updateConfig }) => {
  const [settings, setSettings] = useState(config);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: Number(value) });
  };

  const applySettings = () => {
    updateConfig(settings);
  };

  return (
    <div className="mb-6 p-4 bg-white shadow-md rounded-lg w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">Config Settings Panel</h2>
      <div className="flex flex-col gap-4">
        <label className="flex justify-between">
          <span>Group Size:</span>
          <input
            type="number"
            name="groupSize"
            value={settings.groupSize}
            onChange={handleChange}
            className="border p-2 rounded-lg w-20 text-right"
            min="2"
            max="5"
          />
        </label>
        <label className="flex justify-between">
          <span>Item Count:</span>
          <input
            type="number"
            name="itemCount"
            value={settings.itemCount}
            onChange={handleChange}
            className="border p-2 rounded-lg w-20 text-right"
            min="8"
            max="32"
          />
        </label>
        <label className="flex justify-between">
          <span>Columns:</span>
          <input
            type="number"
            name="columns"
            value={settings.columns}
            onChange={handleChange}
            className="border p-2 rounded-lg w-20 text-right"
            min="2"
            max="6"
          />
        </label>
        <button
          onClick={applySettings}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Apply Settings
        </button>
      </div>
    </div>
  );
};

export default ConfigPanel;
