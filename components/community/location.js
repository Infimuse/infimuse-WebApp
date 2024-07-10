"use client"
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

export default function Location() {
  const [distance, setDistance] = useState([2, 60]);

  const handleDistanceChange = (event, newValue) => {
    setDistance(newValue);
  };

  // Todo: Add a location slider to filter communities by distance
  return (
    <div className="location-slider">
      {/* <h1 className=' text-black mb-2'>Find Communities by location</h1> */}
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
      />
      <div className='text-black mb-2'>
        Selected distance: {distance[0]} km - {distance[1]} km
      </div>
    </div>
  );
}