import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

function SignUp({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://whatever.lat/api/v1/customers/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Sign Up successful!');
        // Handle successful sign up (e.g., redirect, show success message, etc.)
        onClose();
      } else {
        toast.error('Sign Up failed: ' + data.message);
        // Handle sign up failure (e.g., show error message)
      }
    } catch (error) {
      toast.error('An error occurred: ' + error.message);
      // Handle network or other errors
    } finally {
      setLoading(false);
    }
  };

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
      <Toaster />
      <div className="bg-white p-8 rounded-lg text-black shadow-lg w-full max-w-md relative">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-[#12B9f3]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-[#12B9f3]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#12B9f3] text-white py-2 rounded-lg hover:bg-[#12B9f3] transition duration-300"
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;