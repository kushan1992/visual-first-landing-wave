
import React from 'react';

interface ProgressBarProps {
  value: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, color = "emerald" }) => {
  return (
    <div className="h-2 bg-gray-200 rounded-full w-full">
      <div
        className={`h-full bg-${color}-500 rounded-full`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressBar;
