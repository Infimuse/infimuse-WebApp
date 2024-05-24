import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  return (
    <div className="flex items-center justify-center mt-2 md:mt-0  text-black w-full">
      <div className="flex items-center border-2 rounded-lg px-2 py-1 w-64">
        <button className="px-2 py-1 rounded-md hover:bg-gray-200">This Week</button>
        <button className="px-2 py-1 rounded-md hover:bg-gray-200">Next Week</button>
        <div className="relative">
          <button
            className="px-2 py-1 rounded-md hover:bg-gray-200"
            onClick={() => setStartDate(null)}
          >
            Select a date
          </button>
          {startDate && (
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              inline
              className="absolute top-10 right-0 z-10 bg-white rounded-lg shadow-lg"
            />
          )}
        </div>
        <button className="px-2 py-1 rounded-md hover:bg-gray-200">Reset</button>
      </div>
    </div>
  );
};

export default DatePickerComponent;