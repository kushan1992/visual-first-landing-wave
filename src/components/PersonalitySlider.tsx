
import React from 'react';

interface PersonalitySliderProps {
  leftLabel: string;
  rightLabel: string;
  value: number;
}

const PersonalitySlider: React.FC<PersonalitySliderProps> = ({ leftLabel, rightLabel, value }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute top-0 left-0 h-2 bg-emerald-400 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default PersonalitySlider;
