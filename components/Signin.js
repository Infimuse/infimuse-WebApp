/* eslint-disable react/no-unescaped-entities */


import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login, reset } from '@/redux/slices/authSlice';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn({ onClose }) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  // const { isError, isSuccess, message } = useSelector((state) => state.auth);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(login({ email, password }));
  // };

  // React.useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //     dispatch(reset());
  //   }

  //   if (isSuccess) {
  //     toast.success('Login successful');
  //     dispatch(reset());
  //     onClose();
  //   }
  // }, [isError, isSuccess, message, dispatch, onClose]);

  const handleClickOutside = (e) => {
    if (e.target.id === 'sign-in-modal') {
      onClose();
    }
  };

  return (
    <div
      id="sign-in-modal"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      <div className="bg-white p-8 rounded-lg text-black shadow-lg w-full max-w-md relative">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        {/* <form onSubmit={handleSubmit} className="space-y-4"> */}
        <form className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-[#12B9f3]"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-[#12B9f3]"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#12B9f3] text-white py-2 rounded-lg hover:bg-[#12B9f3] transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <span className="text-[#12B9f3] cursor-pointer" onClick={() => console.log('Redirect to Sign Up')}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
