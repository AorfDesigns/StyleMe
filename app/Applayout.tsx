import React from 'react';
import Header from './global/components/Header'; // Adjust the import path as needed

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header at the top */}
      <Header />

      {/* Main content area */}
      <main className="flex-grow bg-gray-100 p-6">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
