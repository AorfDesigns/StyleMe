'use client';

import React, { useState } from 'react';
import { useMeasurementContext } from './MeasurementsContext';

// Define types
type MeasurementEntry = {
  type: string;
  value: string;
};

type Measurement = {
  clientName: string;
  clothingType: string;
  date: string;
  measurementType: string; // Example: 'Chest', 'Waist', etc.
  value: string; // Example: '42 inches'
  fullMeasurements: { [key: string]: string }; // To hold multiple measurements
};

const Measurements: React.FC = () => {
  const { addMeasurement } = useMeasurementContext();
  const [clientName, setClientName] = useState('');
  const [clothingType, setClothingType] = useState('');
  const [measurements, setMeasurements] = useState<MeasurementEntry[]>([{ type: '', value: '' }]);
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10)); // Default to today's date

  const handleAddMeasurement = () => {
    setMeasurements([...measurements, { type: '', value: '' }]);
  };

  const handleMeasurementChange = (index: number, field: keyof MeasurementEntry, value: string) => {
    const newMeasurements = [...measurements];
    newMeasurements[index][field] = value;
    setMeasurements(newMeasurements);
  };

  const handleDeleteMeasurement = (index: number) => {
    const newMeasurements = measurements.filter((_, i) => i !== index);
    setMeasurements(newMeasurements);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a Measurement object
    const fullMeasurements = measurements.reduce((acc, curr) => {
      if (curr.type && curr.value) {
        acc[curr.type] = curr.value;
      }
      return acc;
    }, {} as { [key: string]: string });

    const newMeasurement: Measurement = {
      clientName,
      clothingType,
      date,
      measurementType: 'Overall', // You may need to adjust or add this logic
      value: '', // If you have a specific value to set
      fullMeasurements
    };

    addMeasurement(newMeasurement);

    // Clear form fields after saving
    setClientName('');
    setClothingType('');
    setMeasurements([{ type: '', value: '' }]);
    setDate(new Date().toISOString().substring(0, 10));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-white">
      <div className="flex flex-col max-w-md w-full lg:bg-gray-700/10 bg-white  rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Take New Measurements</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clientName">
              Client Name
            </label>
            <input
              type="text"
              id="clientName"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter client name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clothingType">
              Clothing Type
            </label>
            <input
              type="text"
              id="clothingType"
              value={clothingType}
              onChange={(e) => setClothingType(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter clothing type"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Measurements</label>
            {measurements.map((measurement, index) => (
              <div key={index} className="flex mb-2 items-center">
                <input
                  type="text"
                  value={measurement.type}
                  onChange={(e) => handleMeasurementChange(index, 'type', e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Measurement type (e.g., Chest)"
                  required
                />
                <input
                  type="text"
                  value={measurement.value}
                  onChange={(e) => handleMeasurementChange(index, 'value', e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Value (e.g., 42 inches)"
                  required
                />
                <button
                  type="button"
                  onClick={() => handleDeleteMeasurement(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddMeasurement}
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Another Measurement
            </button>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Measurements
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Measurements;
