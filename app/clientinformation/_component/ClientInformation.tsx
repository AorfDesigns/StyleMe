'use client';

import React, { useState } from 'react';

type Client = {
  name: string;
  address: string;
  email: string;
  phone: string;
  notificationMethod: 'SMS' | 'Email';
};

const ClientInformation: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notificationMethod, setNotificationMethod] = useState<'SMS' | 'Email'>('SMS');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a new client object
    const newClient: Client = {
      name,
      address,
      email,
      phone,
      notificationMethod,
    };

    // Placeholder for what to do with the new client (e.g., save it to state, send it to an API)
    console.log('New Client:', newClient);

    // Clear form fields after saving
    setName('');
    setAddress('');
    setEmail('');
    setPhone('');
    setNotificationMethod('SMS');
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 p-6 text-black">
      <div className="max-w-2xl w-full bg-gray-400/20 shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Add New Client</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter client name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter client address"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter client email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter client phone number"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Notification Method</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  checked={notificationMethod === 'SMS'}
                  onChange={() => setNotificationMethod('SMS')}
                  className="mr-2"
                />
                SMS
              </label>
              <label>
                <input
                  type="radio"
                  checked={notificationMethod === 'Email'}
                  onChange={() => setNotificationMethod('Email')}
                  className="mr-2"
                />
                Email
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientInformation;
