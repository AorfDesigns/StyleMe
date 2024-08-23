'use client';

import React from 'react';

interface Client {
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  notificationMethod: 'sms' | 'email';
}

const clients: Client[] = [
  // Add your client data here
  { name: 'John Doe', email: 'john@example.com', address: '123 Main St', phoneNumber: "07030188861", notificationMethod: 'email' },
  { name: 'Jane Smith', email: 'jane@example.com', address: '456 Elm St', phoneNumber: "080344567890", notificationMethod: 'sms' },
  // More clients...
];

const ClientList: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 text-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Client List</h1>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Clients Information</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 md:px-6 md:py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-600 uppercase tracking-wider whitespace-nowrap">
                    Client Name
                  </th>
                  <th className="px-4 py-2 md:px-6 md:py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-4 py-2 md:px-6 md:py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-4 py-2 md:px-6 md:py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Phone Number
                  </th>
                  <th className="px-4 py-2 md:px-6 md:py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Notification Method
                  </th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap border-b border-gray-200">
                      {client.name}
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap border-b border-gray-200">
                      {client.email}
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap border-b border-gray-200">
                      {client.address}
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap border-b border-gray-200">
                      {client.phoneNumber}
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap border-b border-gray-200">
                      {client.notificationMethod}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden">
          {clients.map((client, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
              <h2 className="text-lg font-semibold mb-2">{client.name}</h2>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Email:</span> {client.email}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Address:</span> {client.address}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Phone Number:</span> {client.phoneNumber}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Notification Method:</span> {client.notificationMethod}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientList;
