// context/MeasurementContext.tsx
'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Measurement = {
  clientName: string;
  date: string;
  clothingType: string;
  measurementType: string;
  value: string;
  fullMeasurements: {
    [key: string]: string;
  };
};

type MeasurementContextType = {
  measurements: Measurement[];
  addMeasurement: (newMeasurement: Measurement) => void;
  deleteMeasurement: (index: number) => void;  // Add this line
};

const MeasurementContext = createContext<MeasurementContextType | undefined>(undefined);

export const MeasurementProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [measurements, setMeasurements] = useState<Measurement[]>(() => {
    const savedMeasurements = localStorage.getItem('measurements');
    return savedMeasurements ? JSON.parse(savedMeasurements) : [];
  });

  const addMeasurement = (newMeasurement: Measurement) => {
    const updatedMeasurements = [...measurements, newMeasurement];
    setMeasurements(updatedMeasurements);
    localStorage.setItem('measurements', JSON.stringify(updatedMeasurements));
  };

  const deleteMeasurement = (index: number) => {  // Add this function
    const updatedMeasurements = measurements.filter((_, i) => i !== index);
    setMeasurements(updatedMeasurements);
    localStorage.setItem('measurements', JSON.stringify(updatedMeasurements));
  };

  return (
    <MeasurementContext.Provider value={{ measurements, addMeasurement, deleteMeasurement }}>
      {children}
    </MeasurementContext.Provider>
  );
};

export const useMeasurementContext = () => {
  const context = useContext(MeasurementContext);
  if (!context) {
    throw new Error('useMeasurementContext must be used within a MeasurementProvider');
  }
  return context;
};
