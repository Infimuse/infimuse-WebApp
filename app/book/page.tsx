import React from 'react';
import Navbar from '@/components/Navbar';

const BookingPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="px-20 py-20">
        {/* Adjust grid to 2 columns of equal size */}
        <div className="grid grid-cols-2 gap-12">
          {/* Left Column for Booking Details */}
          <div className="w-full">
            <header className="mb-12">
              <h1 className="text-2xl font-semibold text-gray-900">Confirm and Pay</h1>
            </header>

            <div className="border rounded-xl mb-10 border-gray-800 p-4">
              <h2 className="text-lg font-semibold text-gray-800">Your Book Details</h2>
              <p className="text-sm text-gray-500">Claudia's place is usually booked. This is a rare find.</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800">Your Day Experience</h2>
              <div className="mt-4">
                <div className="flex justify-between">
                  <div><p className="text-xl font-bold text-gray-600">Introduction To Guitar</p></div>
                  <div><p className="text-sm text-gray-800">Aug 11 – 16</p></div>
                </div>
                <div className="flex justify-between">
                  <div><p className="font-bold text-gray-600">Venue</p></div>
                  <div><p className="text-sm text-gray-800">Westlands Street</p></div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800">Log in or sign up to book</h2>
              <div className="mt-4">
                <input type="text" placeholder="Phone number" className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                <button className="mt-4 w-full bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">Continue</button>
                
                <div className="flex justify-center space-x-4 mt-4">
                  <button className="p-2 border rounded text-blue-600 border-blue-600">Facebook</button>
                  <button className="p-2 border rounded text-red-600 border-red-600">Google</button>
                  <button className="p-2 border rounded text-gray-800 border-gray-800">Apple</button>
                </div>
                <button className="mt-4 w-full border-gray-500 text-gray-800 border py-2 px-4 rounded hover:bg-pink-600">Continue with Email</button>

              </div>
            </div>
          </div>

          {/* Right Column for Property Details */}
          <div className="w-full bg-gray-50 p-4 rounded-lg shadow">
            <div className="flex flex-col items-center">
              <img src="https://images.pexels.com/photos/3820380/pexels-photo-3820380.jpeg" alt="Property" className="w-full mb-4 rounded-lg object-cover h-64"/>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">Wine Tasting</h3>
              <p className="text-sm text-gray-600 mt-2">Hosted by Vineyard</p>
              <p className="text-sm font-semibold text-gray-800 mt-2">4.96 (226 reviews) • Superhost</p>
            </div>
            <div className="mt-8">
              <p className="text-sm text-gray-600">Price details:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Location: 456 Vineyard Rd, Napa Valley, CA</li>
                <li>Start Date: June 15th, 2023</li>
                <li>Time: 2:00 PM - 5:00 PM EDT</li>
                <li><strong>Total (KES): KSh 48,301.60</strong></li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
