// pages/login.tsx
'use client';
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple client-side validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // For now, just clear the form and error
    setError('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="w-screen h-screen bg-transparent flex items-center justify-center">
      <div className="w-full max-w-sm sm:max-w-md bg-gray-400/20 p-6 sm:p-8 shadow-md rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-black">Style_Me</h2>
        <p className="text-center text-gray-400 text-xs sm:text-base mt-2">
          Welcome Back Creative Mind.
        </p>
        
        {error && (
          <div className="mb-4 text-red-500 text-sm text-center">
            {error}
          </div>
        )}

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 sm:py-3 sm:px-6 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="text-center text-gray-600 text-sm sm:text-base mt-6">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
