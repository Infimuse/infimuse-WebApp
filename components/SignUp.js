/* eslint-disable react/no-unescaped-entities */


import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { signUp, reset } from '@/redux/slices/authSlice';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp({ onClose }) {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  // const { isError, isSuccess, message } = useSelector((state) => state.auth);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(signUp({ firstName, lastName, email, password }));
  // };

  // React.useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //     dispatch(reset());
  //   }

  //   if (isSuccess) {
  //     toast.success('Sign-up successful');
  //     dispatch(reset());
  //     onClose();
  //   }
  // }, [isError, isSuccess, message, dispatch, onClose]);

  const handleClickOutside = (e) => {
    if (e.target.id === 'sign-up-modal') {
      onClose();
    }
  };

  return (
    <div
      id="sign-up-modal"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative text-black">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              // value={firstName}
              // onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              // value={lastName}
              // onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <span className="text-blue-500 cursor-pointer" onClick={onClose}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
