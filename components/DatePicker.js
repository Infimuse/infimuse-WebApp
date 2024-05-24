import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date) => {
    setStartDate(date);
    setShowDatePicker(false); // Hide date picker after selecting a date
  };

  return (
    <div className="flex items-center justify-center mt-2 md:mt-0 text-black w-full">
      <div className="flex items-center border-2 rounded-lg px-4 py-2 w-full md:w-96 lg:w-120 space-x-2 relative">
        <button className="px-4 py-2 rounded-md hover:bg-gray-200">This Week</button>
        <button className="px-4 py-2 rounded-md hover:bg-gray-200">Next Week</button>
        <div className="relative">
          <button
            className="px-4 py-2 rounded-md hover:bg-gray-200"
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            Select a date
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
        <button className="px-4 py-2 rounded-md hover:bg-gray-200">Reset</button>
      </div>
    </div>
  );
};

export default DatePickerComponent;
