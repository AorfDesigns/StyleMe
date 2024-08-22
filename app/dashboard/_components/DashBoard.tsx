'use client'
import React from 'react';
import { useMeasurementContext } from '@/app/measure/_components/MeasurementsContext';

const Dashboard: React.FC = () => {
  const { measurements, deleteMeasurement } = useMeasurementContext();

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 text-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Dashboard</h1>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Recent Measurements</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 md:px-6 md:py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-600 uppercase tracking-wider whitespace-nowrap">
                    Client Name
                  </th>
                  <th className="px-4 py-2 md:px-6 md:py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-2 md:px-6 md:py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-600 uppercase tracking-wider whitespace-nowrap">
                    Clothing Type
                  </th>
                  <th className="px-4 py-2 md:px-6 md:py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-600 uppercase tracking-wider whitespace-nowrap">
                    Measurement Type
                  </th>
                  <th className="px-4 py-2 md:px-6 md:py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Value
                  </th>
                  <th className="px-4 py-2 md:px-6 md:py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-600 uppercase tracking-wider whitespace-nowrap">
                    Full Measurements
                  </th>
                  <th className="px-4 py-2 md:px-6 md:py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {measurements.map((measurement, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap border-b border-gray-200">
                      {measurement.clientName}
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap border-b border-gray-200">
                      {measurement.date}
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap border-b border-gray-200">
                      {measurement.clothingType}
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap border-b border-gray-200">
                      {measurement.measurementType}
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap border-b border-gray-200">
                      {measurement.value}
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap border-b border-gray-200">
                      <ul className="text-xs md:text-sm">
                        {Object.entries(measurement.fullMeasurements).map(([key, value]) => (
                          <li key={key}>{`${key}: ${value}`}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap border-b border-gray-200">
                      <button
                        onClick={() => deleteMeasurement(index)}
                        className="text-red-600 hover:text-red-900 text-xs md:text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
