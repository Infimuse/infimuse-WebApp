"use client"

import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

export default function Location() {
  const [distance, setDistance] = useState([2, 60]);

  const handleDistanceChange = (event, newValue) => {
    setDistance(newValue);
  };

  return (
    <div className="location-slider">
      <Slider
        value={distance}
        onChange={handleDistanceChange}
        valueLabelDisplay="auto"
        min={2}
        max={60}
        step={1}
        marks={[
          { value: 2, label: '2 km' },
          { value: 60, label: '60 km' },
        ]}
        sx={{
          '& .MuiSlider-thumb': {
            color: '#bb2460', // Changes the thumb color to red
          },
          '& .MuiSlider-track': {
            color: '#bb2460', // Changes the track color to red
          },
          '& .MuiSlider-rail': {
            color: '#bbb' // Changes the rail color to a lighter grey
          }
        }}
      />
      <div className='text-black mt-[-18px] mb-12 text-center'>
        {distance[0]} km - {distance[1]} km
      </div>
    </div>
  );
}
