'use client';

import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaChartLine, FaRuler, FaSignOutAlt } from "react-icons/fa"; // Importing icons for Trends, Measurement, and Log out
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpenProfile, setDropdownOpenProfile] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdownProfile = () => {
    setDropdownOpenProfile(!isDropdownOpenProfile);
  };

  return (
    <header className="bg-transparent shadow-md p-4">
      <div className="container flex items-center justify-between lg:justify-start">
        {/* Name with Dropdown Arrow */}
        <div
          className="relative flex items-center text-lg font-bold text-black hover:bg-gray-200 p-4 rounded-md lg:ml-8 mx-auto lg:mr-auto lg:justify-start justify-center cursor-pointer"
          onClick={toggleDropdown}
        >
          Measure
          <IoIosArrowDown className="w-5 h-5 ml-2" aria-hidden="true" />

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 w-96 bg-gray-500 text-white border rounded-lg shadow-lg p-8">
              <ul className="flex flex-col gap-4">
                {/* Trends with Icon */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-white rounded-full p-2">
                    <FaChartLine className="text-gray-500 w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <Link href="/trends" className="font-bold">Trends</Link>
                    <p className="text-xs font-normal mt-2">Latest Fashion design trends</p>
                  </div>
                </div>

                {/* Measurement with Icon */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-white rounded-full p-2">
                    <FaRuler className="text-gray-500 w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <Link href="/measure" className="font-bold">Measurement</Link>
                    <p className="text-xs font-normal mt-2">Take your Measurements</p>
                  </div>
                </div>

                {/* Dashboard with Icon */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-white rounded-full p-2">
                    <FaRuler className="text-gray-500 w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <Link href="/dashboard" className="font-bold">Dashboard</Link>
                    <p className="text-xs font-normal mt-2">Overview of Clients Data</p>
                  </div>
                </div>
            
              </ul>
            </div>
          )}
        </div>

        {/* Profile Image */}
        <div
            className=" relative flex items-center cursor-pointer"
            onClick={toggleDropdownProfile}
          >
             <Image
                src="/dev-images/AvatarModal.png"
                alt="Profile Picture"
                width={40}
                height={40}
                className="rounded-full"
              />
              </div>
          {isDropdownOpenProfile && (
             <div className="absolute right-0 mt-32  w-64 bg-gray-500 text-white border rounded-lg shadow-lg p-4">
                <ul className="flex flex-col gap-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-white rounded-full p-2">
                    <FaSignOutAlt className="text-gray-500 w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <Link href="/login" className="font-bold">Log Out</Link>
                    <p className="text-xs font-normal mt-2">Sign out of your account</p>
                  </div>
                </div>
      </ul>
      </div>     
          )}
          
      </div>
    </header>
  );
};

export default Header;
