"use client";

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date) => {
    setStartDate(date);
    setShowDatePicker(false); // Hide date picker after selecting a date
  };

  return (
    <div className="flex items-center justify-center mt-2 md:mt-0 text-black w-full">
      <div className="flex items-center justify-center rounded-lg px-4 py-2 w-full md:w-96 lg:w-120 relative mb-5">
        <button className="px-4 py-2 mx-1 bg-gray-100 hover:bg-[#bb2460] hover:text-white whitespace-nowrap rounded-full">This Week</button>
        <button className="px-4 py-2 mx-1 mr-4 rounded-full bg-gray-100 hover:bg-[#bb2460] hover:text-white whitespace-nowrap">Next Week</button>
        <div className="relative mx-1">
          <button
            className="flex items-center px-12 py-2 bg-gray-100 hover:bg-gray-200 hover:text-black whitespace-nowrap rounded-full"
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            <span>Select a date</span>
            <FontAwesomeIcon icon={faCalendarAlt} className="ml-2" />
          </button>
          {showDatePicker && (
            <div className="absolute top-12 left-0 z-10 bg-white rounded-lg shadow-lg">
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                inline
                className="bg-white rounded-lg shadow-lg w-64"
              />
            </div>
          )}
        </div>
        <button className="px-4 py-2 mx-1 rounded-full bg-gray-100 hover:bg-[#bb2460] hover:text-white whitespace-nowrap">Reset</button>
      </div>
    </div>
  );
};

export default DatePickerComponent;
