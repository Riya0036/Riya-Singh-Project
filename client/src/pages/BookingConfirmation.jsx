import React from 'react';
import { Link } from 'react-router-dom';

function BookingConfirmation() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-off-white rounded-xl shadow-2xl p-8 text-center max-w-md">
        <h1 className="text-5xl font-extrabold text-green-600 mb-8">Hurray! Your ticket has been booked</h1>
        <Link 
          to="/" 
          className="inline-block px-8 py-4 mt-6 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out"
        >
          Check out more events
        </Link>
      </div>
    </div>
  );
}

export default BookingConfirmation;
